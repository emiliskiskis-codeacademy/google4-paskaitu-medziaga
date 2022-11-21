// toFixed, toPrecision
// Number.parseInt, Number.parseFloat

const fraction = 1 / 7
console.log(fraction)
console.log(fraction.toFixed(2))

const wholeNumber = 65465
const tinyNumber = 0.0005984965
console.log(wholeNumber.toPrecision(5))
console.log(tinyNumber)
console.log(tinyNumber.toPrecision(3))
console.log(tinyNumber.toPrecision(1))
console.log(tinyNumber.toExponential(0))

let numberInAString = "123"
let convertedNumber = +numberInAString
console.log(convertedNumber)
console.log(typeof convertedNumber)

let convertedNumber2 = Number(numberInAString)
console.log(convertedNumber2)
console.log(typeof convertedNumber2)

let convertedNumber3 = Number.parseInt(numberInAString)
console.log(convertedNumber3)
console.log(typeof convertedNumber3)

let convertedNumber4 = Number.parseFloat(numberInAString)
console.log(convertedNumber4)
console.log(typeof convertedNumber4)

const notANumber = +"aa"
console.log(Number.isNaN(notANumber))

console.log({}.toString())
