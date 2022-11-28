function product(x, y) {
  return x * y;
}

// document.getElementById("submit").addEventListener("click", event => {
//   // alert("Mygtukas paspaustas!");
//   event.target.textContent = "Mygtukas jau paspaustas";
// });

let a = 5;
let b = 6;
console.log(product(a, b));

setTimeout(() => {
  console.log("Praėjo sekundė");
}, 5000);

let i = 0;
const tId = setInterval(() => {
  i++;
  console.log("Praėjo sekundė " + i);
  if (i >= 5) {
    clearInterval(tId);
  }
}, 1000);

while (!buttonPressed) {
  // wait()
}

console.log("Finished!");

function onButtonPressed() {}

let buttonPressed = false;

const tId2 = setInterval(() => {
  if (buttonPressed) {
    clearInterval(tId2);
    onButtonPressed();
  } else {
    console.log(i++);
  }
}, 1000);
