const root = document.documentElement

const desertSand = document.getElementById("desert-sand");
const wood = document.getElementById("wood");
const steelGray = document.getElementById("steel-gray");
const defaultColor = document.getElementById("default");
const custom = document.getElementById("custom")

const settings = document.getElementById("settings")
const settingsCloseIcon = document.getElementById("settings-close-icon")

const customBox = document.querySelector(".custom-color")
const customPrimaryColor = document.getElementById("primary-color-input");
const customSecondaryColor = document.getElementById("secondary-color-input");
const applyButton = document.getElementById("apply-button");
const closeIcon = document.getElementById("close-icon")

desertSand.addEventListener("click", () => {
    root.style.setProperty("--secondary-color", "#102542")
    root.style.setProperty("--primary-color", "#F87060")
    customBox.classList.add("hide")
})
wood.addEventListener("click", () => {
    root.style.setProperty("--secondary-color", "#D9A8A1")
    root.style.setProperty("--primary-color", "#583123")
    customBox.classList.add("hide")
})
steelGray.addEventListener("click", () => {
    root.style.setProperty("--secondary-color", "#1F1C2C")
    root.style.setProperty("--primary-color", "#928DAB")
    customBox.classList.add("hide")
})
defaultColor.addEventListener("click", () => {
    root.style.setProperty("--secondary-color", "#C6C8CC")
    root.style.setProperty("--primary-color", "#374151")
    customBox.classList.add("hide")
})

custom.addEventListener("click", () => {
    customBox.classList.toggle("hide")
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