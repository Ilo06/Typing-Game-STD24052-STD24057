import { wordsList } from "./modules/words.js";
import { storage as memoryStorage } from "./localStorage.js";

let time = 15;
let intervalId = null;

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
const leftTime = document.getElementById("left-time");

//used to import words from words.js
const words = wordsList;

//just the restart button
const restartButton = document.getElementById("restart-button")

//updated word to be displayed on wordDisplay after or while typing it
let updatedWord = "";

//Used to push stats to a tab
let avgAccuracy = []
let avgWpm = []


//time mode select
const timerSelect = document.getElementById("timer-select");

let language = "english"

const malagasy = document.getElementById("malagasy")
const english = document.getElementById("english")
const french = document.getElementById("french")


malagasy.addEventListener("click", ()=> {
    language = "malagasy"
    startTest(numberSelect.value)
});

french.addEventListener("click", ()=> {
    language = "french"
    startTest(numberSelect.value)
});

english.addEventListener("click", ()=> {
    language = "english"
    startTest(numberSelect.value)
});


// Generate a random word from the selected mode
const getRandomWord = (mode) => {
    const wordList = words[language][mode];
    return wordList[Math.floor(Math.random() * wordList.length)];
};


//used to get the hammming distance between the correct and the writen word in order to calculate the accuracy
const hamming = (word1, word2) => {
    if (!word1 || !word2) return 0;

    let distance = word1.length;

    for (let i = 0; i < word1.length; i++) {
        word1[i] != word2[i] ? distance-- : true;
    }
    if (word2.length > word1.length) {
        distance -= (word2.length - word1.length);
    }
    return Math.max(distance, 0);
};



const startTimer = () => {
    if (startTime || intervalId !== null) return;

    startTime = Date.now();
    previousEndTime = Date.now();

    const timerDiv = document.getElementById("timer");
    let originalTime = time;

    intervalId = setInterval(() => {
        if (time > 0) {
            time--;
            timerDiv.style.width = `${((time -1)  * 100) / originalTime}%`;
            leftTime.textContent = time;
        } else {
            clearInterval(intervalId);
            intervalId = null;
            // inputField.disabled = true;
            changeData();
        }
    }, 1000);
};

// Initialize the typing test
const startTest = (wordCount = 30) => {
    clearInterval(intervalId);
    intervalId = null;
    time = parseInt(timerSelect.value);
    inputField.disabled = false;
    leftTime.textContent = time;
    document.getElementById("timer").style.width = "100%";

    wordsToType.length = 0;
    wordDisplay.innerHTML = "";
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
        if (index === 0) span.style.color = "#F94449";
        wordDisplay.appendChild(span);
    });


    //to make sure that all values are reset
    inputField.value = "";
    wpmStat.textContent = "0.00";
    accuracyStat.textContent = "0.00%";
    updatedWord = "";
    avgAccuracy = [];
    avgWpm = [];
};




// Calculate and return WPM & accuracy
const getCurrentStats = () => {
    const elapsedTime = (Date.now() - previousEndTime) / 1000;
    const word = wordsToType[currentWordIndex] || "";
    const input = inputField.value;

    const wpm = ((word.length / 5) / (elapsedTime / 60));
    const accuracy = (hamming(word, input) / (word.length || 1)) * 100;

    return { wpm: wpm.toFixed(2), accuracy: accuracy.toFixed(2) };
};

const getAvgStats = () => {
    const { wpm, accuracy } = getCurrentStats();

    avgWpm.push(parseFloat(wpm));
    avgAccuracy.push(parseFloat(accuracy));

    wpmStat.textContent = avgWpm.reduce((acc, value) => acc += (value / avgWpm.length), 0).toFixed(2)
    accuracyStat.textContent = avgAccuracy.reduce((acc, value) => acc += (value / avgAccuracy.length), 0).toFixed(2)

}

const changeData = () => {
    const word = wordsToType[currentWordIndex] || "";
    const input = inputField.value;

    const averageWpm = (avgWpm.reduce((a, b) => a + b, 0) / avgWpm.length).toFixed(2);
    const accuracy = ((hamming(word, input) / (word.length || 1)) * 100).toFixed(2);

    const stats = {
        wordNumbers: numberSelect.value + " words",
        timer: timerSelect.value + " seconds",
        difficulty: modeSelect.value,
        wpm: averageWpm,
        accuracy: accuracy,
        previousWpm: avgWpm,
        previousAccuracy: avgAccuracy
    };

    localStorage.setItem("stats", JSON.stringify(stats));
    window.location.href = "../pages/stats.html";
};

// Move to the next word and update stats only on spacebar press
const updateWord = (event) => {
    if (event.key === " ") {
        if (!previousEndTime) previousEndTime = startTime;
    
        getAvgStats();
        previousEndTime = Date.now();
    
        if (currentWordIndex === wordsToType.length - 1) {
            inputField.disabled = true;
            changeData();
            return;
        }
    
        currentWordIndex++;
        highlightNextWord();
        inputField.value = "";
        event.preventDefault();
    }
    
};

const highlightNextWord = () => {
    const wordElements = wordDisplay.children;

    if (currentWordIndex < wordElements.length) {
        if (currentWordIndex > 0) {
            const prevSpan = wordElements[currentWordIndex - 1];
            if (prevSpan.innerText.trim() === inputField.value.trim()) {
                prevSpan.style.color = "#8BCA84";
            } else {
                prevSpan.style.color = "#F94449";
            }
        }
        wordElements[currentWordIndex].style.color = "#F94449";
    }
};

inputField.addEventListener("keydown", (event) => {
    startTimer();
    updateWord(event);
});
modeSelect.addEventListener("change", () => startTest(numberSelect.value));
numberSelect.addEventListener("change", () => startTest(numberSelect.value));
timerSelect.addEventListener("change", () => startTest(numberSelect.value));

const changeLetterColor = () => {
    inputField.addEventListener("input", () => {
        const inputValue = inputField.value;
        const currentWord = wordsToType[currentWordIndex];
        updatedWord = "";

        for (let i = 0; i < Math.max(currentWord.length, inputValue.length); i++) {
            if (inputValue[i] === currentWord[i]) {
                updatedWord += `<span class="correct">${currentWord[i]}</span>`;
            } else if (inputValue[i] !== undefined) {
                updatedWord += `<span class="incorrect">${inputValue[i]}</span>`;
            } else {
                updatedWord += `<span>${currentWord[i]}</span>`;
            }
        }

        updatedWord += " ";
        if (wordDisplay.children[currentWordIndex]) {
            wordDisplay.children[currentWordIndex].innerHTML = updatedWord;
        }
    });
};

changeLetterColor();
document.addEventListener("keydown", ()=> {
    inputField.focus()
})

let currentInputFieldValue = "";

inputField.addEventListener("focusout", () => {
    currentInputFieldValue = inputField.value;
    restartButton.addEventListener("click", () => {
        currentInputFieldValue = "";
    });
    inputField.value = "Click here to start";
});

inputField.addEventListener("focusin", () => { 
    inputField.value = currentInputFieldValue;
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") startTest(numberSelect.value);
});
restartButton.addEventListener("click", () => startTest(numberSelect.value));

startTest(numberSelect.value);
