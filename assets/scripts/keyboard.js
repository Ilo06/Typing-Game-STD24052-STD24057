const a = document.getElementById("a")
const z = document.getElementById("z")
const e = document.getElementById("e")
const r = document.getElementById("r")
const t = document.getElementById("t")
const y = document.getElementById("y")
const u = document.getElementById("u")
const i = document.getElementById("i")
const o = document.getElementById("o")
const p = document.getElementById("p")
const q = document.getElementById("q")
const s = document.getElementById("s")
const d = document.getElementById("d")
const f = document.getElementById("f")
const g = document.getElementById("g")
const h = document.getElementById("h")
const j = document.getElementById("j")
const k = document.getElementById("k")
const l = document.getElementById("l")
const m = document.getElementById("m")
const w = document.getElementById("w")
const x = document.getElementById("x")
const c = document.getElementById("c")
const v = document.getElementById("v")
const b = document.getElementById("b")
const n = document.getElementById("n")
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
    const key = pressedKey.key.toLowerCase(); // pour éviter les soucis de majuscules
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
