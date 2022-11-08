const randomNumber = Math.floor(Math.random() * 100 + 1)
let atspejo = false

while (!atspejo) {
  let guess = prompt("Spėkite skaičių")

  if (guess < randomNumber) {
    alert("Daugiau!")
  } else if (guess > randomNumber) {
    alert("Mažiau!")
  } else {
    alert("Atspėjot!")
    atspejo = true
  }
}
