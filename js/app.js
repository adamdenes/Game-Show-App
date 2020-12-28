document.addEventListener('DOMContentLoaded', () => {
  // element selectors & variables
  const qwerty = document.querySelector('#qwerty');
  const phrase = document.querySelector('#phrase');
  const startButton = document.querySelector('.btn__reset');
  const overlay = startButton.parentNode;
  const ul = phrase.firstElementChild;
  let missed = 0;

  // phrases array
  const phrases = [
    'What Goes Up Must Come Down',
    'Hard Pill to Swallow',
    'Right Off the Bat',
    'Down And Out',
    'Man of Few Words',
  ];

  // functions

  /**
   * Randomly choose a phrase from the phrases array and split that phrase into a new array of characters.
   * @param {Object[]} arr
   */
  const getRandomPhraseAsArray = (arr) =>
    arr[Math.floor(Math.random() * arr.length)].split('');

  /**
   * For each character in the array create a list item and append to `#phrase ul` element.
   * @param {Object[]} arr
   */
  const addPhraseToDisplay = (arr) => {
    arr.forEach((element) => {
      const li = document.createElement('li');
      li.textContent = element.toLowerCase();
      ul.appendChild(li);

      if (element !== ' ') {
        li.className = 'letter';
        li.style.transition = 'all .6s ease-in-out';
      } else {
        li.style.padding = '8px';
      }
    });
  };

  /**
   * Loop over the letters and check if they match the letter in the button the player has chosen.
   * Add 'show' class on match, and 'null' if there is no match.
   * @param {string} button
   */
  const checkLetter = (button) => {
    const lis = ul.querySelectorAll('li');
    let match = null;

    lis.forEach((li) => {
      if (li.textContent.toLowerCase() === button.textContent) {
        li.className += ' show';
        match = button.textContent;
      }
    });
    return match;
  };

  /**
   * If all the letters in the phrase are shown, the “win” overlay is shown.
   * If a player makes 5 wrong guesses, the “lose” overlay is shown.
   */
  const checkWin = () => {
    const liLetter = document.querySelectorAll('li.letter');
    const liShow = document.querySelectorAll('li.show');

    if (liLetter.length === liShow.length) {
      overlay.className = 'win';
      overlay.firstElementChild.textContent = 'You Won!';
      overlay.style.display = 'flex';
    }
    if (missed > 4) {
      overlay.className = 'lose';
      overlay.firstElementChild.textContent = 'You Lost!';
      overlay.style.display = 'flex';
    }
  };

  // event listeners
  startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  qwerty.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON' && button.className !== 'chosen') {
      button.className = 'chosen';
      button.setAttribute('disabled', 'true');
      const letterFound = checkLetter(button);

      if (!letterFound) {
        const ol = document.querySelector('ol');
        const li = ol.querySelector('.tries');
        ol.removeChild(li);
        missed += 1;
      }
    }
    checkWin();
  });

  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
});
