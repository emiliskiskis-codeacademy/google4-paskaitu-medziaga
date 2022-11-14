let age = 20
// let message
// if (age >= 18) {
//   message = "Jūs esate pilnametis"
// } else {
//   message = "Nesate pilnametis"
// }

// jeigu 21, galima vartoti alkoholį
// jeigu 18, galima turėti būstą
// jeigu 16, galima vairuoti
// kitu atveju nieko negalima

let message = age >= 18 ? "Jūs esate pilnametis" : "Nesate pilnametis"

console.log(message)
console.log(age >= 18 ? "Jūs esate pilnametis" : "Nesate pilnametis")

// if (age >= 21) {
//   message = "Galima vartoti alkoholį"
// } else (if (age >= 18) {
//   message = "Galima turėti būstą"
// } else (if (age >= 16) {
//   message = "Galima vairuoti"
// } else {
//   message = "Nieko negalima"
// }))

message =
  age >= 21
    ? "Galima vartoti alkoholį"
    : age >= 18
    ? "Galima turėti būstą"
    : age >= 16
    ? "Galima vairuoti"
    : "Nieko negalima"

console.log(message)
console.log(
  age >= 21
    ? "Galima vartoti alkoholį"
    : age >= 18
    ? "Galima turėti būstą"
    : age >= 16
    ? "Galima vairuoti"
    : "Nieko negalima"
)

let x = 10
console.log(x)

console.log(10)

if (
  (age >= 21
    ? "Galima vartoti alkoholį"
    : age >= 18
    ? "Galima turėti būstą"
    : age >= 16
    ? "Galima vairuoti"
    : "Nieko negalima") === "Nieko negalima"
) {
  console.log("age < 16")
}

function getDataFromUserId() {
  return {}
}

let userId = null
let data = userId === null ? null : getDataFromUserId(userId)
console.log(data)

if ((userId === null ? getDefaultData() : getDataFromUserId(userId)).sessionId === ...) {
  
}