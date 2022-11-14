function add(x, y) {
  return x + y
}

function twoPlusTwo() {
  return add(2, 2)
}

let result = twoPlusTwo()
console.log(result)

function addEventListener(eventType, listener) {
  let event = getEvent()
  // ...
  if (event.type === eventType) {
    listener(event)
  }
}

function getFive() {
  return 5
}

function sumTwoFunctions(fn1, fn2) {
  return fn1() + fn2()
}

console.log(
  sumTwoFunctions(getFive, function () {
    return add(2, 2)
  })
)

let createMagicFunction = function (x) {
  return function () {
    return x
  }
}

function onInput(event, index) {
  // ...
}

function onInputWrapper(event) {
  onInput(event, 10)
}

// element.addEventListener("click", function (event) {})

console.log(createMagicFunction(10)())

createMagicFunction = x => y => x + y
console.log(createMagicFunction(2)(3))
console.log(createMagicFunction)
