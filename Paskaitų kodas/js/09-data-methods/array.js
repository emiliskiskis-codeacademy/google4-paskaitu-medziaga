// join
// map
// forEach
// filter
// find, findIndex
// every, some
// sort, reduce

const listOfNames = "Alice,Bob,Charlie,David,Emilis"
const sentence =
  "Mollit commodo Lorem consequat incididunt pariatur non aliquip est commodo"

const namesArr = listOfNames.split(",")
const words = sentence.split(" ")
console.log(namesArr)
console.log(words)

const values = {
  firstName: "Emilis",
  lastName: "Kiškis",
  age: "22",
  sex: "m",
  dob: "2000-05-12",
  tob: "12%3A00",
  city: "Klaipeda",
  loanAmount: "17566",
  password: "abcde",
  identity: "",
  agree: "on"
}

let entries = Object.entries(values)
console.log(entries)
const joinedEntries = entries.map(entry => entry.join("="))
console.log(joinedEntries)
entries = entries.join("&")

console.log(entries)

// map
const seq = [1, 2, 3, 4, 5]
const seq2 = []
for (let i = 0; i < seq.length; i++) {
  seq2.push(seq[i] * 2)
}
console.log(seq2)

const seq2Alt = seq.map(value => value * 5)
console.log(seq2Alt)

const seq3 = seq.map((_, index) => index)
console.log(seq3)

function mapArray(value) {
  return value * 9
}

const seq4 = seq.map(mapArray)
console.log(seq4)

const nameElements = namesArr.map(name => `<p>${name}</p>`)
console.log(nameElements.join(""))

let innerHTML = ""
// forEach
nameElements.forEach(element => {
  innerHTML += element
})

// filter
const filteredNames = namesArr.filter(name => name.endsWith("e"))
console.log(filteredNames)
const filteredNames2 = namesArr.filter(name => name === "Emilis")
console.log(filteredNames2)
const filteredSeq2 = seq2.filter(value => value > 5)
console.log(filteredSeq2)

// const filteredOrders = orders.filter(order => order.status === 'vykdomas')
// const filteredOrders = orders.filter(order => order.date === '2022-11-17')
const nameStartingWithB = namesArr.find(name => name.startsWith("B"))
console.log(nameStartingWithB)

// const id = 1656151
// const order = orders.find(order => order.id === id)
// if (!order) {
//   alert("nėra tokio užsakymo")
// }

// findIndex

const indexOfNameStartingWithB = namesArr.findIndex(name =>
  name.startsWith("B")
)
console.log(indexOfNameStartingWithB)
namesArr[indexOfNameStartingWithB] = "Bernard"
console.log(namesArr[1])

// every, some
console.log(namesArr)

const doesEveryNameStartWithA = namesArr.every(name => name.startsWith("A"))
console.log(doesEveryNameStartWithA)

const doesAnyNameStartWithA = namesArr.some(name => name.startsWith("A"))
console.log(doesAnyNameStartWithA)

const doesEveryNameStartWithACapitalLetter = namesArr.every(
  name => name[0] === name[0].toUpperCase()
)
console.log(doesEveryNameStartWithACapitalLetter)

// const allOrdersCompleted = orders.every(order => order.status === 'completed')
// const hasOrdersCompleted = orders.some(order => order.status === 'completed')

// !!(!a && !b && !c && ...) => !(a || b || c || ...)
// const noOrdersCompleted = !orders.some(order => order.status === 'completed')

const names = ["Bernard", "David", "Emilis", "Ąžuolas", "Alice", "Charlie"]
names.sort()
console.log(names)

const randomNumbers = [665, 2, 3, 8, 465, 65, 21, 62, 41]
randomNumbers.sort()
console.log(randomNumbers)

// value = palyginimo funkcijos rezultatas (skaičius)
// value > 0: [b, a]
// value < 0: [a, b]
// value === 0: ta pati tvarka (safe sort)

// pvz. a = 3, b = 5 [a, b]
// pvz. a = 10, b = 20 [a, b]
// pvz. a = 13, b = 12 [b, a]
// pvz. a = 5, b = 5 ta pati tvarka
randomNumbers.sort((a, b) => a - b)
console.log(randomNumbers)

randomNumbers.sort((a, b) => b - a)
console.log(randomNumbers)

names.sort((a, b) => a.localeCompare(b))
console.log(names)
// 'Alice'.localeCompare('Bernard')
// ^^^^^^                ^^^^^^^^^
// referenceStr          compareStr

console.log(Number(false) - Number(true))
