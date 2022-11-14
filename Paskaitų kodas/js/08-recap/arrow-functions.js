// function () {}
// () => {}

let a = function () {
  console.log("Hello World!")
}
a()
a = () => {
  console.log("Hello World!")
}
a()

// function (x) {}
// x => {}

let b = function (x) {
  console.log(x + 5)
}
b(5)
b = x => {
  console.log(x + 5)
}
b(5)

// function (x, y, z, ...) {}
// (x, y, z, ...) => {}

// function (...) => { return ??? }
// (...) => ???

let getSum = function (x, y) {
  return x + y
}
console.log(getSum(4, 6))

getSum = (x, y) => x * y
console.log(getSum(5, 12))

const getFirstElement = arr => arr[0]
