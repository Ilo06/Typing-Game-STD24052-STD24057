/**
 * Point culture (en Français car je suis un peu obligé): 
 * Dans ce genre de jeu, un mot equivaut a 5 caractères, y compris les espaces. 
 * La precision, c'est le pourcentage de caractères tapées correctement sur toutes les caractères tapées.
 * 
 * Sur ce... Amusez-vous bien ! 
*/
import { wordsList } from "./modules/words.js";

let startTime = null, previousEndTime = null;
let currentWordIndex = 0;
const wordsToType = [];

//mode select (difficulty and number of words)
const modeSelect = document.getElementById("mode");
const numberSelect = document.getElementById("num");

//word display and the field 
const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");

//some statistics
const wpmStat = document.getElementById("wpmStat");
const accuracyStat = document.getElementById("accuracyStat");

//used to import words from words.js
const words = wordsList;

//just the restart button
const restartButton = document.getElementById("restart-button")

//updated word to be displayed on wordDisplay after or while typing it
let updatedWord = "";

// //Used to push stats to a tab
// let avgAccuracy = []
// let avgWpm = []



// Generate a random word from the selected mode
const getRandomWord = (mode) => {
    const wordList = words[mode];
    return wordList[Math.floor(Math.random() * wordList.length)];
};

// Initialize the typing test
const startTest = (wordCount = 30) => {
    wordsToType.length = 0; // Clear previous words
    wordDisplay.innerHTML = ""; // Clear display
    currentWordIndex = 0;
    startTime = null;
    previousEndTime = null;

    //initialize all the words to write
    for (let i = 0; i < wordCount; i++) {
        wordsToType.push(getRandomWord(modeSelect.value));
    }

    //create a span element for every word in words to type
    wordsToType.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        if (index === 0) span.style.color = "#F94449"; // Highlight first word
        wordDisplay.appendChild(span);

    });

    //to make sure that all are reset
    inputField.value = "";
    wpmStat.textContent = "0.00";
    accuracyStat.textContent = "0.00%";
    updatedWord = ""

};

// Start the timer when user begins typing
const startTimer = () => {
    if (!startTime) startTime = Date.now();
};

//used to get the hammming distance between the correct and the writen word in order to calculate the accuracy
const hamming = (word1, word2) => {
    let distance = word1.length;

    for (let i = 0; i < word1.length; i++) {
        word1[i] != word2[i] ? distance-- : true;
    }
    if (word2.length > word1.length) {
        distance -= (word2.length - word1.length)
    }
    if (distance < 0) {
        distance = 0
    }

    return distance
}



// Calculate and return WPM & accuracy
const getCurrentStats = () => {
    const elapsedTime = (Date.now() - previousEndTime) / 1000; // Seconds
    const wpm = (wordsToType[currentWordIndex].length / 5) / (elapsedTime / 60); // 5 chars = 1 word
    const accuracy = ((hamming(wordsToType[currentWordIndex], inputField.value) / wordsToType[currentWordIndex].length)) * 100

    return { wpm: wpm.toFixed(2), accuracy: accuracy.toFixed(2) };
};

// const getAverageStats = () => {
//     const { wpm, accuracy } = getCurrentStats()

//     avgWpm.push(wpm)
//     avgAccuracy.push(accuracy)

//     console.log(avgWpm, avgAccuracy);
    
// }

// Move to the next word and update stats only on spacebar press
const updateWord = (event) => {
    if (event.key === " ") { // Check if spacebar is pressed
        if (inputField.value.trim() === wordsToType[currentWordIndex]) {
            if (!previousEndTime) previousEndTime = startTime;

            const { wpm, accuracy } = getCurrentStats();
            // const wpm = avgWpm.reduce((acc, value) => acc += (value / avgWpm.length), 0)
            // const accuracy = avgAccuracy.reduce((acc, value) => acc += (value / avgAccuracy.length), 0)
            // console.log(avgWpm, avgAccuracy);

            wpmStat.textContent = `${wpm}`
            accuracyStat.textContent = `${accuracy}%`

            currentWordIndex++;
            previousEndTime = Date.now();
            highlightNextWord();

            inputField.value = ""; // Clear input field after space
            event.preventDefault(); // Prevent adding extra spaces
        } else if (inputField.value.trim() != wordsToType[currentWordIndex]) {
            if (!previousEndTime) previousEndTime = startTime;

            const { wpm, accuracy } = getCurrentStats();
            // const wpm = avgWpm.reduce((acc, value) => acc += (value / avgWpm.length), 0)
            // const accuracy = avgAccuracy.reduce((acc, value) => acc += (value / avgAccuracy.length), 0)
            // console.log(avgWpm, avgAccuracy);
            wpmStat.textContent = `${wpm}`
            accuracyStat.textContent = `${accuracy}%`

            currentWordIndex++;
            previousEndTime = Date.now();
            highlightNextWord();

            inputField.value = ""; // Clear input field after space
            event.preventDefault(); // Prevent adding extra spaces
        }
    }
};

// Highlight the current word and all mistaken words in red, highlight well writen words in green
const highlightNextWord = () => {
    const wordElements = wordDisplay.children;

    if (currentWordIndex < wordElements.length) {
        if (currentWordIndex > 0) {
            if (String(wordElements[currentWordIndex - 1].innerText).trim() === (inputField.value).trim()) {
                wordElements[currentWordIndex - 1].style.color = "#8BCA84";

            } else {
                // wordElements[currentWordIndex - 1].innerHTML = `${inputField.value.trim()} `
                wordElements[currentWordIndex].style.color = "#F94449";
            }
        }
        wordElements[currentWordIndex].style.color = "#F94449";
    }
};

// Event listeners
// Attach `updateWord` to `keydown` instead of `input`
inputField.addEventListener("keydown", (event) => {
    startTimer();
    updateWord(event);
});
modeSelect.addEventListener("change", () => startTest(numberSelect.value));
numberSelect.addEventListener("change", () => startTest(numberSelect.value));

//Start the test when "Enter" key is pressed
document.addEventListener("keydown", (e) => e.key == "Enter" ? startTest(numberSelect.value) : true)
restartButton.addEventListener("click", () => startTest(numberSelect.value))

// Start the test
startTest(numberSelect.value);

//Change letter color based on how well you write the word
const changeLetterColor = () => {
    inputField.addEventListener("input", () => {
        const inputValue = inputField.value;
        const currentWord = wordsToType[currentWordIndex];
        updatedWord = ""

        for (let i = 0; i < currentWord.length; i++) {
            if (inputValue[i] === currentWord[i]) {
                updatedWord += `<span class="correct">${currentWord[i]}</span>`;
            } else if (inputValue[i] !== undefined) {
                updatedWord += `<span class="incorrect">${inputValue[i]}</span>`;
            } else {
                updatedWord += `<span>${currentWord[i]}</span>`;
            }
        }

        if (currentWord.length < inputValue.length) {
            updatedWord = ""
            for (let i = 0; i < inputValue.length; i++) {
                if (inputValue[i] === currentWord[i]) {
                    updatedWord += `<span class="correct">${currentWord[i]}</span>`;
                } else if (inputValue[i] !== undefined) {
                    updatedWord += `<span class="incorrect">${inputValue[i]}</span>`;
                } else {
                    updatedWord += `<span>${currentWord[i]}</span>`;
                }
            }
        }

        updatedWord += " ";
        wordDisplay.children[currentWordIndex].innerHTML = updatedWord;
    });
};

changeLetterColor()

