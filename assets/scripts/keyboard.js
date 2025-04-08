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
    if (pressedKey.key == "a") {
        setTimeout(() => {
            a.style.backgroundColor = "var(--primary-color)"
            a.style.color = "var(--secondary-color)"
        }, 100);
        a.style.backgroundColor = "var(--secondary-color)"
        a.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "z") {
        setTimeout(() => {
            z.style.backgroundColor = "var(--primary-color)"
            z.style.color = "var(--secondary-color)"
        }, 100);
        z.style.backgroundColor = "var(--secondary-color)"
        z.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "e") {
        setTimeout(() => {
            e.style.backgroundColor = "var(--primary-color)"
            e.style.color = "var(--secondary-color)"
        }, 100);
        e.style.backgroundColor = "var(--secondary-color)"
        e.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "r") {
        setTimeout(() => {
            r.style.backgroundColor = "var(--primary-color)"
            r.style.color = "var(--secondary-color)"
        }, 100);
        r.style.backgroundColor = "var(--secondary-color)"
        r.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "t") {
        setTimeout(() => {
            t.style.backgroundColor = "var(--primary-color)"
            t.style.color = "var(--secondary-color)"
        }, 100);
        t.style.backgroundColor = "var(--secondary-color)"
        t.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "y") {
        setTimeout(() => {
            y.style.backgroundColor = "var(--primary-color)"
            y.style.color = "var(--secondary-color)"
        }, 100);
        y.style.backgroundColor = "var(--secondary-color)"
        y.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "u") {
        setTimeout(() => {
            u.style.backgroundColor = "var(--primary-color)"
            u.style.color = "var(--secondary-color)"
        }, 100);
        u.style.backgroundColor = "var(--secondary-color)"
        u.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "i") {
        setTimeout(() => {
            i.style.backgroundColor = "var(--primary-color)"
            i.style.color = "var(--secondary-color)"
        }, 100);
        i.style.backgroundColor = "var(--secondary-color)"
        i.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "o") {
        setTimeout(() => {
            o.style.backgroundColor = "var(--primary-color)"
            o.style.color = "var(--secondary-color)"
        }, 100);
        o.style.backgroundColor = "var(--secondary-color)"
        o.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "p") {
        setTimeout(() => {
            p.style.backgroundColor = "var(--primary-color)"
            p.style.color = "var(--secondary-color)"
        }, 100);
        p.style.backgroundColor = "var(--secondary-color)"
        p.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "q") {
        setTimeout(() => {
            q.style.backgroundColor = "var(--primary-color)"
            q.style.color = "var(--secondary-color)"
        }, 100);
        q.style.backgroundColor = "var(--secondary-color)"
        q.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "s") {
        setTimeout(() => {
            s.style.backgroundColor = "var(--primary-color)"
            s.style.color = "var(--secondary-color)"
        }, 100);
        s.style.backgroundColor = "var(--secondary-color)"
        s.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "d") {
        setTimeout(() => {
            d.style.backgroundColor = "var(--primary-color)"
            d.style.color = "var(--secondary-color)"
        }, 100);
        d.style.backgroundColor = "var(--secondary-color)"
        d.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "f") {
        setTimeout(() => {
            f.style.backgroundColor = "var(--primary-color)"
            f.style.color = "var(--secondary-color)"
        }, 100);
        f.style.backgroundColor = "var(--secondary-color)"
        f.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "g") {
        setTimeout(() => {
            g.style.backgroundColor = "var(--primary-color)"
            g.style.color = "var(--secondary-color)"
        }, 100);
        g.style.backgroundColor = "var(--secondary-color)"
        g.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "h") {
        setTimeout(() => {
            h.style.backgroundColor = "var(--primary-color)"
            h.style.color = "var(--secondary-color)"
        }, 100);
        h.style.backgroundColor = "var(--secondary-color)"
        h.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "j") {
        setTimeout(() => {
            j.style.backgroundColor = "var(--primary-color)"
            j.style.color = "var(--secondary-color)"
        }, 100);
        j.style.backgroundColor = "var(--secondary-color)"
        j.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "k") {
        setTimeout(() => {
            k.style.backgroundColor = "var(--primary-color)"
            k.style.color = "var(--secondary-color)"
        }, 100);
        k.style.backgroundColor = "var(--secondary-color)"
        k.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "l") {
        setTimeout(() => {
            l.style.backgroundColor = "var(--primary-color)"
            l.style.color = "var(--secondary-color)"
        }, 100);
        l.style.backgroundColor = "var(--secondary-color)"
        l.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "m") {
        setTimeout(() => {
            m.style.backgroundColor = "var(--primary-color)"
            m.style.color = "var(--secondary-color)"
        }, 100);
        m.style.backgroundColor = "var(--secondary-color)"
        m.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "w") {
        setTimeout(() => {
            w.style.backgroundColor = "var(--primary-color)"
            w.style.color = "var(--secondary-color)"
        }, 100);
        w.style.backgroundColor = "var(--secondary-color)"
        w.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "x") {
        setTimeout(() => {
            x.style.backgroundColor = "var(--primary-color)"
            x.style.color = "var(--secondary-color)"
        }, 100);
        x.style.backgroundColor = "var(--secondary-color)"
        x.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "c") {
        setTimeout(() => {
            c.style.backgroundColor = "var(--primary-color)"
            c.style.color = "var(--secondary-color)"
        }, 100);
        c.style.backgroundColor = "var(--secondary-color)"
        c.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "v") {
        setTimeout(() => {
            v.style.backgroundColor = "var(--primary-color)"
            v.style.color = "var(--secondary-color)"
        }, 100);
        v.style.backgroundColor = "var(--secondary-color)"
        v.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "b") {
        setTimeout(() => {
            b.style.backgroundColor = "var(--primary-color)"
            b.style.color = "var(--secondary-color)"
        }, 100);
        b.style.backgroundColor = "var(--secondary-color)"
        b.style.color = "var(--primary-color)"
    } else if (pressedKey.key == "n") {
        setTimeout(() => {
            n.style.backgroundColor = "var(--primary-color)"
            n.style.color = "var(--secondary-color)"
        }, 100);
        n.style.backgroundColor = "var(--secondary-color)"
        n.style.color = "var(--primary-color)"
    } else if (pressedKey.key == " ") {
        setTimeout(() => {
            space.style.backgroundColor = "var(--primary-color)"
            space.style.color = "var(--secondary-color)"
        }, 100);
        space.style.backgroundColor = "var(--secondary-color)"
        space.style.color = "var(--primary-color)"
    }
});