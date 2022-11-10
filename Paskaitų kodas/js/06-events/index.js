const p = document.querySelector("p")
const button = document.querySelector("button")

// const mygtukai = []

// // MouseEvent
// function onClick(event) {
//   console.log(`Paspaustas ${event.target.tagName}`)
//   p.style.color = "red"
// }

// // KeyboardEvent
// function onKeyDown(event) {
//   event.preventDefault()
//   console.log(
//     `Paspaustas klavišas ${event.key} ant elemento ${event.target.tagName}`
//   )
// }

// window.addEventListener("keydown", onKeyDown)

// for (let i = 0; i <= 8; i++) {
//   mygtukai.push(
//     document.querySelector(`#mygtukai > button:nth-child(${i + 1})`)
//   )
//   mygtukai[i].addEventListener("click", onClick)
//   mygtukai[i].addEventListener("keydown", onKeyDown)
// }

// button.addEventListener("click", onClick)
// console.log(mygtukai)

// let buttonLeft = 0,
//   buttonTop = 0,
//   mousePressed = false

// function onMouseEvent(event) {
//   if (mousePressed) {
//     buttonLeft += event.movementX
//     buttonTop += event.movementY
//     button.style.left = buttonLeft + "px"
//     button.style.top = buttonTop + "px"
//   }
// }

// function onMouseDown() {
//   mousePressed = true
// }

// function onMouseUp() {
//   mousePressed = false
// }

// button.addEventListener("mousedown", onMouseDown)
// button.addEventListener("mouseup", onMouseUp)
// button.addEventListener("mousemove", onMouseEvent)

function showKeyCombination(event) {
  event.preventDefault()
  if ((event.ctrlKey || event.metaKey) && event.key === "s") {
    console.log("Buvo paspausta Ctrl+S")
  } else if (event.ctrlKey && event.key === "a") {
    console.log("Buvo paspausta Ctrl+A")
  }
}

window.addEventListener("keydown", showKeyCombination)

// let string = `Hello World! ${window} \${} \\`
// console.log(string)
// console.log("C:\\Users\\Emilis\\Desktop")

// console.log([
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
// ])

function onButtonClick(event) {
  // event.stopPropagation()
  console.log(event)
  console.log(`Paspaustas elementas ${event.currentTarget}`)
}

button.addEventListener("click", onButtonClick)
window.addEventListener("click", onButtonClick)
