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

// reduce

const orders = [
  {
    createdAt: "2022-11-21T07:22:47.046Z",
    userId: 28727,
    sum: 91347,
    id: "1"
  },
  {
    createdAt: "2022-11-20T19:27:48.980Z",
    userId: 44041,
    sum: 64656,
    id: "2"
  },
  {
    createdAt: "2022-11-21T10:51:08.141Z",
    userId: 30096,
    sum: 49500,
    id: "3"
  },
  {
    createdAt: "2022-11-21T15:53:58.135Z",
    userId: 51080,
    sum: 76678,
    id: "4"
  },
  {
    createdAt: "2022-11-21T10:53:28.274Z",
    userId: 41957,
    sum: 80102,
    id: "5"
  },
  {
    createdAt: "2022-11-21T13:19:42.702Z",
    userId: 10641,
    sum: 30395,
    id: "6"
  },
  {
    createdAt: "2022-11-21T05:59:25.269Z",
    userId: 4444,
    sum: 50882,
    id: "7"
  },
  {
    createdAt: "2022-11-20T18:44:33.149Z",
    userId: 26629,
    sum: 58562,
    id: "8"
  },
  {
    createdAt: "2022-11-21T05:13:58.926Z",
    userId: 84012,
    sum: 75224,
    id: "9"
  },
  {
    createdAt: "2022-11-20T20:19:44.026Z",
    userId: 44200,
    sum: 17441,
    id: "10"
  }
]

let totalSum = 0
orders.forEach(order => {
  totalSum = totalSum + order.sum
})
console.log(totalSum)

let totalProduct = 1
orders.forEach(order => {
  totalProduct = totalProduct * order.sum
})
console.log(totalProduct)

const reduceSum = orders.reduce((acc, order) => acc + order.sum, 0)
console.log(reduceSum)
const reduceProduct = orders.reduce((acc, order) => acc * order.sum, 1)
console.log(reduceProduct)

console.log([5, 3, 6].reduce((acc, sk) => acc * sk))

let grades = [5, 3, 6]

function reduce(arr, callbackfn, initialValue) {
  if (initialValue !== undefined) {
    let acc = initialValue
    arr.forEach((element, index) => {
      acc = callbackfn(acc, element, index, arr)
    })
    return acc
  } else {
    let acc = arr[0]
    arr.slice(1).forEach((value, index) => {
      acc = callbackfn(acc, value, index, arr)
    })
    return acc
  }
}

console.log(reduce(grades, (acc, value) => acc + value))

function forEach(arr, callbackfn) {
  for (let i = 0; i < arr.length; i++) {
    callbackfn(arr[i], i, arr)
  }
}
