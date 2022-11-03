// document.getElementById

let elementas = document.getElementById("langelis")
console.log(elementas)

elementas.textContent

// document.querySelector
// document.querySelectorAll (sąrašas)

let studentId = document.querySelector("#pirma > tbody > tr:nth-child(3) > td")
console.log(studentId.textContent)
studentId.textContent = "2200001"
// studentId.colSpan = 2

let tekstas = studentId.textContent
tekstas = "2212345"
// neekvivalentu!
// studentId.textContent = "2212345"

console.log(studentId.textContent)

let img = document.getElementById("nuotrauka")
img.src = "https://picsum.photos/300/300"
img.alt = "Pavyzdinė nuotrauka"

// document.createElement
// element.append
// element.prepend
// element.remove

// element.innerHTML
let antraLentele = document.querySelector("#antra > tbody")
console.log(antraLentele.innerHTML)

antraLentele.innerHTML =
  antraLentele.innerHTML +
  '<tr><td rowspan="2">Destination 4</td><td>Way 1</td><td>400m</td><td>1600m</td><td>2h22m</td><td>19:25</td><td>19:25</td></tr><tr><td>Way 1</td><td>400m</td><td>1600m</td><td>2h22m</td><td>19:25</td><td>19:25</td></tr>'

let container = document.getElementById("container")
container.innerHTML = `
<img src="https://picsum.photos/50/50" alt="Logo">
<p id="description" style="color: blue">lorem ipsum</p>
`

let p = document.getElementById("description")
p.textContent = "Hello from Javascript!"
