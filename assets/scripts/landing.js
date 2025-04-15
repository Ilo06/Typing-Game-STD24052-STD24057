const main = document.getElementById("main")
const button = document.getElementById("start-button")

const left = document.getElementById("start-up")
const right = document.getElementById("start-up-images")

const phone = window.matchMedia('(max-width:450px)')


button.addEventListener("click", () => {

    if (phone.matches) {

        right.classList.add("appear")
        setTimeout(() => {
            right.style.opacity = "100%"
        },1000)

        left.classList.add("disapear")
        setTimeout(() => {
            left.style.opacity = "0%"
        },1000)

        setTimeout(() => {  
            main.classList.add("disapear")
        }, 3500);

        setTimeout(() => {
            window.location.href = "assets/pages/test.html"
        }, 4000);

    }
    else {
        left.style.transform = "translateX(50vw)"
        right.style.transform = "translateX(-50vw)"

        setTimeout(() => {  
            main.classList.add("disapear")
        }, 500);

        setTimeout(() => {
            window.location.href = "assets/pages/test.html"
        }, 1450);
    }
})