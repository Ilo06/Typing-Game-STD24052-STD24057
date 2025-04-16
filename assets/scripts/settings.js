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

desertSand.addEventListener("click", () => {
    root.style.setProperty("--secondary-color", "#102542")
    root.style.setProperty("--primary-color", "#F87060")
    root.style.setProperty("--terty-color", "#B04F45")
    customBox.classList.add("hide")
})
wood.addEventListener("click", () => {
    root.style.setProperty("--secondary-color", "#D9A8A1")
    root.style.setProperty("--primary-color", "#583123")
    root.style.setProperty("--terty-color", "#3B2016")
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