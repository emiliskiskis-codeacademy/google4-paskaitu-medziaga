const kaina = 15
console.log(kaina + " €/h")
console.log(kaina * 24 + " €/para")
console.log(kaina * 168 + " €/sav.")

let vardas = prompt("Koks jūsų vardas?")
alert("Malonu susipažinti, " + vardas + "!")
alert("Kaip jums sekasi, " + vardas + "?")

let pavarde

pavarde = prompt("Kokia jūsų pavardė?")
// 1. parodomas prompt ir laukiama atsakymo
// 2. reikšmė išsaugoma kintamajame

pavarde = prompt(pavarde + "? Ar tikrai?")
// 1. parodomas prompt ir laukiama atsakymo
// 2. reikšmė išsaugoma kintamajame

alert("Aaa, supratau, sveiki " + pavarde + "!")

let sk1 = 0,
  sk2 = 1,
  sk3 = 1

console.log(sk3)

sk3 = sk1 + sk2
sk1 = sk2
sk2 = sk3
console.log(sk3)

sk3 = sk1 + sk2
sk1 = sk2
sk2 = sk3
console.log(sk3)

sk3 = sk1 + sk2
sk1 = sk2
sk2 = sk3
console.log(sk3)

sk3 = sk1 + sk2
sk1 = sk2
sk2 = sk3
console.log(sk3)

sk3 = sk1 + sk2
sk1 = sk2
sk2 = sk3
console.log(sk3)

var kintamasis = 10
console.log(kintamasis)
