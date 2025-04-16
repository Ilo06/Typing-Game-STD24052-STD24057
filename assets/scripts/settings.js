const root = document.documentElement

const desertSand = document.getElementById("desert-sand");
const wood = document.getElementById("wood");
const steelGray = document.getElementById("steel-gray");
const defaultColor = document.getElementById("default");
const custom = document.getElementById("custom")

const settings = document.getElementById("settings")
const settingsCloseIcon = document.getElementById("settings-close-icon")

const customBox = document.getElementById("custom-color")
const customPrimaryColor = document.getElementById("primary-color-input");
const customSecondaryColor = document.getElementById("secondary-color-input");
const applyButton = document.getElementById("apply-button");
const closeIcon = document.getElementById("close-icon")

const settingsButton = document.getElementById("settings-icon")

const timesnr = document.getElementById("timesnr")
const monospace = document.getElementById("monospace")
const arial = document.getElementById("arial")
const comic = document.getElementById("comic")

const displayedWord = document.getElementById("word-display")

desertSand.addEventListener("click", () => {
    root.style.setProperty("--terty-color", "#6E6E6E ")  
    root.style.setProperty("--primary-color", "#838181")     
    root.style.setProperty("--secondary-color", "#2A4551")      
    customBox.classList.add("hide")
})

wood.addEventListener("click", () => {
    root.style.setProperty("--secondary-color", "#BFA88F")  
    root.style.setProperty("--primary-color", "#4B3B30")     
    root.style.setProperty("--terty-color", "#2C1E16")      
    customBox.classList.add("hide")
})
steelGray.addEventListener("click", () => {
    root.style.setProperty("--secondary-color", "#1F1C2C")
    root.style.setProperty("--primary-color", "#928DAB")
    root.style.setProperty("--terty-color", "#6E6B80")
    customBox.classList.add("hide")
})
defaultColor.addEventListener("click", () => {
    root.style.setProperty("--secondary-color", "#C6C8CC")
    root.style.setProperty("--primary-color", "#374151")
    root.style.setProperty("--terty-color", "#1F2937")
    customBox.classList.add("hide")
})

custom.addEventListener("click", () => {
    customBox.classList.remove("hide")
    // alert("caodicjo")
})
closeIcon.addEventListener("click", () => {
    customBox.classList.add("hide")
})

applyButton.addEventListener("click", () => {
    root.style.setProperty("--secondary-color", customSecondaryColor.value)
    root.style.setProperty("--primary-color", customPrimaryColor.value)
})

settingsCloseIcon.addEventListener("click", () => {
    settings.classList.add("hide")
})

settingsButton.addEventListener("click", () => {

    settings.classList.remove("hide")
})

const malagasy = document.getElementById("malagasy")
const english = document.getElementById("english")
const french = document.getElementById("french")


malagasy.addEventListener("click", ()=> {
    settings.classList.add("hide")
});

french.addEventListener("click", ()=> {
    settings.classList.add("hide")
});

english.addEventListener("click", ()=> {
    settings.classList.add("hide")
});

timesnr.addEventListener("click", ()=> {
    displayedWord.style.fontFamily = "'Times New Roman', Times, serif"
    settings.classList.add("hide")
})

monospace.addEventListener("click", ()=> {
    displayedWord.style.fontFamily = "monospace"
    settings.classList.add("hide")
})

arial.addEventListener("click", ()=> {
    displayedWord.style.fontFamily = "Arial, Helvetica, sans-serif"
    settings.classList.add("hide")
})

comic.addEventListener("click", ()=> {
    displayedWord.style.fontFamily = "'Comic sans ms'"
    settings.classList.add("hide")
})
