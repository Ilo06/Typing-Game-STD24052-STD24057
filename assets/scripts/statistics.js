const stats = JSON.parse(localStorage.getItem("stats"));

const currentMode = document.getElementById("current-mode");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");

const previousWpm = document.getElementById("previous-wpm");
const previousAccuracy = document.getElementById("previous-accuracy");


if (stats) {
    currentMode.innerText = `${stats.difficulty} ${stats.timer} ${stats.wordNumbers}`;
    wpm.innerText = `${stats.wpm} WPM`;
    accuracy.innerText = `${(stats.previousAccuracy).reduce((acc, val) => acc + val/stats.previousAccuracy.length,0).toFixed(2)}%`;

    previousWpm.innerText = "Previous WPM: " + stats.previousWpm.join(" ");
    previousAccuracy.innerText = "Previous Accuracy: " + stats.previousAccuracy.join(" ");
} else {
    currentMode.innerText = "No data";
    wpm.innerText = "0 WPM";
    accuracy.innerText = "0%";
}

