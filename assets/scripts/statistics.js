const stats = JSON.parse(localStorage.getItem("stats"));

const currentMode = document.getElementById("current-mode");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");

const previousWpm = document.getElementById("previous-wpm");
const previousAccuracy = document.getElementById("previous-accuracy");

const chart = document.getElementById("graphics");
const next = document.getElementById("next");

if (stats) {
    currentMode.innerText = `${stats.difficulty} ${stats.timer} ${stats.wordNumbers}`;
    wpm.innerText = `${stats.wpm} WPM`;
    accuracy.innerText = `${(stats.previousAccuracy).reduce((acc, val) => acc + val / stats.previousAccuracy.length, 0).toFixed(2)}%`;

    previousWpm.innerText = "WPM per Word: " + stats.previousWpm.join(" ");
    previousAccuracy.innerText = "Accuracy per Word: " + stats.previousAccuracy.join(" ");

    const wpmHistory = stats.previousWpm;

    const myChart = echarts.init(chart);
    const option = {
        title: {
            text: 'WPM History',
            textStyle: {
                fontFamily: 'monospace',
                fontWeight: '600',
                color: '#374151'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: wpmHistory.map((_, i) => ` ${i + 1}`),
            axisLabel: {
                textStyle: {
                    fontFamily: 'monospace',
                    color: '#1F2937'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    fontFamily: 'monospace',
                    color: '#1F2937'
                }
            }
        },
        series: [{
            name: 'WPM',
            type: 'line',
            data: wpmHistory,
            smooth: true,
            lineStyle: {
                color: '#374151',
                width: 3,
            },
            itemStyle: {
                color: '#1F2937',
                borderColor: '#333',
                borderWidth: 2
            },
            areaStyle: {
                color: '#374151'
            }
        }]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });
} else {
    currentMode.innerText = "No data";
    wpm.innerText = "0 WPM";
    accuracy.innerText = "0%";
}

next.addEventListener("click", () => {
    window.location.href = "../pages/test.html";
});
