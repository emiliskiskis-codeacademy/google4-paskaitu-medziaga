console.log(2 + 3)

let rezultatas = 2 + 3
let tuscias
const konstanta = 10 + 20
console.log(rezultatas)

rezultatas = 10
console.log(rezultatas)

// < > == <= >= !=

if (5 > 10) {
  console.log("Matematika nemeluoja")
}

if ("Labas" == "labas") {
  console.log("Stringai yra lygūs")
}

if ("ĄČĘĖĮ" == "ĄČĘĖĮ") {
  console.log("sutampa")
}

if (true) {
  console.log("True")
}

if (false) {
  console.log("False")
}

console.log("ĄČĘĖĮ" == "ĄČĘĖĮ")
console.log("Labas" == "labas")

const isAvailable = false

if (isAvailable) {
  console.log("Buy now!")
}

// if-else

if (isAvailable) {
  console.log("Buy now!")
} else {
  console.log("Out of stock")
}

const randomNumber = 8
let guess = 8

if (guess == randomNumber) {
  console.log("Sveikiname!")
} else {
  console.log("Neatspėjot")
}

if (guess == randomNumber) {
  console.log("Sveikiname!")
} else if (guess < randomNumber) {
  console.log("Daugiau")
} else {
  console.log("Mažiau")
}

if (guess == 1) {
  // ...
} else if (guess == 2) {
  // ...
} else if (guess == 1) {
  // ...
}

// if pabaiga

if (guess == 1) {
}
if (guess == 2) {
}
if (guess == 1) {
}

let a = true
let b = false
let c = true

if (a && c && !b) {
  console.log("Pavalgiau pusryčius ir išsimaudžiau ir neišsivaliau dantų")
}

if (a) {
  console.log("Pavalgiau pusryčius")
}

if (b) {
  console.log("Išsivaliau dantis")
}

if (c) {
  console.log("Išsimaudžiau")
}

if (a && c) {
  console.log("Pavalgiau pusryčius ir išsimaudžiau")
}

if (!b && c) {
  console.log("Neišsivaliau dantų ir išsimaudžiau")
}

if (a && !b) {
  console.log("Pavalgiau pusryčius ir neišsivaliau dantų")
}

if (b || c) {
  console.log("Išsivaliau dantis ir/ar išsimaudžiau")
}

if (!(!b && !c)) {
  console.log("Ne (neišsivaliau dantų ir neišsimaudžiau)")
}

if (b && c) {
  console.log("Išsivaliau dantis ir išsimaudžiau")
}

if (!(!b || !c)) {
  console.log("Nėra taip, kad neišsivaliau dantų arba neišsimaudžiau")
}

b = false
c = false

if (b ^ c) {
  console.log("Arba išsivaliau dantis, arba išsimaudžiau")
}

// and - &&
// not - !
// or - ||
// xor - ^
// nand - !(a && b)
// nor - !(a || b)
// xnor - !(a ^ b)

// (a && b) => !(!a || !b)
// (a || b) => !(!a && !b)
// De Morgano dėsnis
