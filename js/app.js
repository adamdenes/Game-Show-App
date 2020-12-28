document.addEventListener('DOMContentLoaded', () => {

    // functions

    /**
     * Randomly choose a phrase from the phrases array and split that phrase into a new array of characters.
     * @param {Object[]} arr 
     */
    const getRandomPhraseAsArray = arr => arr[Math.floor(Math.random() * arr.length)].split('');

    /**
     * For each character in the array create a list item and append to `#phrase ul` element.
     * @param {Object[]} arr 
     */
    const addPhraseToDisplay = arr => {
        arr.forEach(element => {
            const ul = phraseDiv.firstElementChild;
            const li = document.createElement('li');
            li.textContent = element;
            ul.appendChild(li);

            if (element !== ' ') {
                li.setAttribute('class', 'letter');
            }
        });
    };

    // element selectors & variables
    const qwertyDiv = document.querySelector('#qwerty');
    const phraseDiv = document.querySelector('#phrase');
    const resetBtn = document.querySelector('.btn__reset');
    let missed = 0;

    // phrases array
    const phrases = new Array();
    phrases.push(
        'What Goes Up Must Come Down',
        'Hard Pill to Swallow',
        'Right Off the Bat',
        'Down And Out',
        'Man of Few Words'
    );

    const phraseArray = getRandomPhraseAsArray(phrases);
    console.log(phraseArray);
    console.log(addPhraseToDisplay(phraseArray));
});