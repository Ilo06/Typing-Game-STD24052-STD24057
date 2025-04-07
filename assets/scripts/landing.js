const main = document.getElementById("main")
const button = document.getElementById("start-button")

const left = document.getElementById("start-up")
const right = document.getElementById("start-up-images")


button.addEventListener("click", () => {

    left.style.transform = "translateX(50vw)"
    right.style.transform = "translateX(-50vw)"

    setTimeout(() => {
        
        window.location.href = "assets/pages/test.html"
    }, 1450);
    setTimeout(() => {
        
        main.classList.add("disapear")
    }, 500);


})