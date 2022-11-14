const button = document.querySelector("button")
const div = document.querySelector("div")
const section = document.querySelector("section")
const body = document.body

function onClick(event) {
  // event.stopPropagation()
  console.log("Clicked", event.target, event.currentTarget)
}

button.addEventListener("click", onClick)
div.addEventListener("click", onClick)
section.addEventListener("click", onClick)
body.addEventListener("click", onClick)
addEventListener("click", onClick)
