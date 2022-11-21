// Object.keys, Object.values, Object.entries
// Object.freeze

let zmogus = {
  id: 1,
  vardas: "Emilis",
  pavarde: "Kiškis",
  amzius: 22,
  geriausiasDraugas: {}
}
console.log(Object.keys(zmogus))
console.log(Object.values(zmogus))
console.log(Object.entries(zmogus))

zmogus.id = 5
Object.freeze(zmogus)
zmogus.id = 10

// id nepasikeitė
console.log(zmogus)

const numberObj = new Number(10)
console.log(typeof numberObj)
console.log(numberObj)
console.log(numberObj.valueOf())
