const mainContainer = document.querySelector(".main-container")
const subscribeButton = document.querySelector(".btn")
const thanksContainer = document.querySelector(".subscribe")
const dismissButton = document.querySelector(".dismiss")

subscribeButton.addEventListener("click", () => {
    mainContainer.classList.add("hidden")
    thanksContainer.classList.remove("hidden")
})


dismissButton.addEventListener("click", () => {
    mainContainer.classList.remove("hidden")
    thanksContainer.classList.add("hidden")
})
