/*
string
number
boolean
null/undefined
bigint

function
object, array
symbol
*/

// 20 20
// "Tekstas" "Tekstas"
// true true
// null null
// 123n 123n

let zmogus = {
  id: 1,
  vardas: "Emilis",
  pavarde: "Kiškis",
  amzius: 22,
  geriausiasDraugas: {}
}

let zmogus2 = {
  id: 1,
  vardas: "Artūras"
}

console.log(zmogus.amzius)

let tuscias1 = { amzius: 20 }
let tuscias2 = { amzius: 20 }

console.log(tuscias1.amzius == tuscias2.amzius)

if (
  zmogus.vardas === zmogus2.vardas &&
  zmogus.pavarde === zmogus2.pavarde &&
  zmogus.amzius === zmogus2.pavarde
) {
}

zmogus.amzius = 30
console.log(zmogus)

let amzius = zmogus.amzius
amzius = 40
console.log(zmogus)

let kopija = zmogus
kopija.amzius = 50
console.log(zmogus)

console.log(kopija == zmogus)

// Arrays

let masyvas = [1, 2, 3, 4, 5]
console.log(masyvas)

console.log(masyvas[0])

// let trys = masyvas[2]
// trys = 5
// console.log(masyvas[2])

// let masyvoKopija = masyvas
// masyvoKopija[2] = 5
// console.log(masyvas[2])

console.log(masyvas.length)

for (let i = 0; i < masyvas.length; i++) {
  console.log(i)
  console.log(masyvas[i])
}

let dynamicObj = {}
console.log(dynamicObj)
dynamicObj.a = 10
console.log(dynamicObj)

delete dynamicObj.a
console.log(dynamicObj)

let dynamicArr = []
console.log(dynamicArr)
dynamicArr[0] = 10
console.log(dynamicArr)

delete dynamicArr[0]
console.log(dynamicArr)

dynamicArr[100] = 20
console.log(dynamicArr)

//               0  1  2  3  4  5  6  7  8  9    10  11  12  13  14  15  16  17  18  19  20
let longArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]
//              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(longArray)

for (let i = longArray.length - 1; i >= 10; i--) {
  longArray[i + 1] = longArray[i]
  delete longArray[i]
}
console.log(longArray)

longArray[10] = 100
console.log(longArray)

delete longArray[10]
console.log(longArray)

for (let i = 10; i < longArray.length - 1; i++) {
  longArray[i] = longArray[i + 1]
  delete longArray[i + 1]
}
console.log(longArray)
console.log(longArray.length)

longArray.pop()
console.log(longArray)

let arrayMethods = []

arrayMethods.push(10)
console.log(arrayMethods)

arrayMethods.pop()
console.log(arrayMethods)

arrayMethods = [1, 2, 3]

arrayMethods.unshift(100)
console.log(arrayMethods)

arrayMethods.shift()
console.log(arrayMethods)

arrayMethods.splice(1, 1)
console.log(arrayMethods)
console.log(arrayMethods.length)
