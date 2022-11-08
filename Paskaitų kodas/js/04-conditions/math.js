let n = 10
let i = 0
let suma = 1

while (i < n) {
  suma = suma + (i + 1)
  i++
}

console.log(suma)
// 2, 4, 6, 8
// 0, 1, 4, 9, 16, 25, 36
// 0, 1, 2, 3, 4, 5, 6, ...
// 1, 2, 3, 4, 5, 6, 7, ...
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55

i = 0
seka = ""
while (i < n) {
  seka += i + 1
  if (i < n - 1) {
    seka += " "
  }
  i++
}

console.log(seka)

// "1 2 3 4 ... n"
// "" + "1" === "1"

for (let j = 0; j < 10; j++) {
  console.log(j + 1)
}

for (let j = 0; j < 10; j++) {
  console.log(j + 1)
}
for (let j = 0; j < 10; j++) {
  console.log(j + 1)
}
for (let j = 0; j < 10; j++) {
  console.log(j + 1)
}
