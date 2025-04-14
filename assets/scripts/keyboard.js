const space = document.getElementById("space")

const inputField = document.getElementById("input-field")

const showButton = document.getElementById("keyboard-show")
const keyboard = document.getElementById("keyboard")

showButton.addEventListener("click", () => {
    keyboard.classList.toggle("hide")

    if (keyboard.classList.contains("hide") == false) {
        showButton.innerHTML = `<i class="bx bxs-x-circle"></i>`
    } else {
        showButton.innerHTML = `<i class="bx bxs-keyboard"></i>`
    }
})

window.addEventListener("keydown", (pressedKey) => {
    const key = pressedKey.key.toLowerCase();
    const validKeys = "azertyuiopqsdfghjklmwxcvbn ";
    
    if (validKeys.includes(key)) {
        let element = (key === " ") ? space : document.getElementById(key);

        if (!element) return;

        element.style.backgroundColor = "var(--secondary-color)";
        element.style.color = "var(--primary-color)";
        
        setTimeout(() => {
            element.style.backgroundColor = "var(--primary-color)";
            element.style.color = "var(--secondary-color)";
        }, 100);
    }
});
