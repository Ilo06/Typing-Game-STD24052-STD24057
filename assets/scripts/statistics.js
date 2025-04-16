const stats = JSON.parse(localStorage.getItem("stats"));

const currentMode = document.getElementById("current-mode");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");

const previousWpm = document.getElementById("previous-wpm");
const previousAccuracy = document.getElementById("previous-accuracy");

const chart = document.getElementById("graphics")

const next = document.getElementById("next")

if (stats) {
    currentMode.innerText = `${stats.difficulty} ${stats.timer} ${stats.wordNumbers}`;
    wpm.innerText = `${stats.wpm} WPM`;
    accuracy.innerText = `${(stats.previousAccuracy).reduce((acc, val) => acc + val / stats.previousAccuracy.length, 0).toFixed(2)}%`;

    previousWpm.innerText = "WPM per Word: " + stats.previousWpm.join(" ");
    previousAccuracy.innerText = "Accuracy per Word: " + stats.previousAccuracy.join(" ");
} else {
    currentMode.innerText = "No data";
    wpm.innerText = "0 WPM";
    accuracy.innerText = "0%";
}

const wpmHistory = stats.previousWpm

wpmHistory.forEach((word) => {
    const span = document.createElement("span");
    span.style.width = `${100 / wpmHistory.length}%`
    span.style.height = `${((word * 100) / (Math.max(...wpmHistory)))}%`
    span.classList.add("stat-animation")
    span.style.backgroundColor = "var(--primary-color)"
    chart.appendChild(span);
});

next.addEventListener("click", () => {
    window.location.href = "../pages/test.html"
})
