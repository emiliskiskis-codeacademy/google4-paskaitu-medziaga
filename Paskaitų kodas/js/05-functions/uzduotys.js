// Funkcijos be return:
// 1. Parašykite funkciją print(str), kuri parašys reiškmę str į konsolę.
// 2. Parašykite funkciją printSequence(n), kuri į konsolę parašys reikšmes nuo 1 iki n imtinai.
// 3. Parašykite funckiją continuePattern(sequence), kuri prie masyvo sequence pridės elementą, kurio reikšmė bus paskutinis elementas plius visų elementų vidurkis. Pvz. sequence = [5, 8, 10], po funkcijos sequence = [5, 8, 10, 17,6666667]

function print(str) {
  console.log(str)
}

print("Hello World!")

function printSequence(n) {
  for (let i = 0; i < n; i++) {
    console.log(i + 1)
  }
}

// arba
// function printSequence(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i)
//   }
// }

printSequence(10)

function continuePattern(sequence) {
  let sum = 0
  let lastIndex = sequence.length - 1
  for (let i = 0; i <= lastIndex; i++) {
    sum += sequence[i]
  }
  // vidurkis = suma / el. skaičius
  sequence[lastIndex + 1] = sequence[lastIndex] + sum / sequence.length
}

let seq = [5, 8, 10]
continuePattern(seq)
console.log(seq)

seq = [1, 2, 3]
continuePattern(seq)
console.log(seq)

seq = [1, 2, 3]
continuePattern(seq)
console.log(seq)

// Užduoties pataisymas - pratęsia seką ne pagal elementų vidurkį, o pagal vidutinį gretimų elementų skirtumą
function continuePatternFixed(sequence) {
  // Atimame gretimus elementus dešinį iš kairio ir juos susumuojame
  let sum = 0
  for (let i = 0; i < sequence.length - 1; i++) {
    sum += sequence[i + 1] - sequence[i]
  }
  // vidurkis = suma / susumuotų elementų skaičius
  sequence[sequence.length] =
    sequence[sequence.length - 1] + sum / (sequence.length - 1)
}

seq = [5, 8, 10]
continuePatternFixed(seq)
console.log(seq)

seq = [1, 2, 3]
continuePatternFixed(seq)
console.log(seq)

seq = [1, 4, 9, 16, 25, 36]
continuePatternFixed(seq)
console.log(seq)

// Funkcijos su return:
// 1. Parašykite funkciją getRectangleArea(w, h), kuri grąžina stačiakampio plotą iš ilgio w ir pločio h.
// 2. Parašykite funckiją getProduct(numbers), kuri grąžina visų masyvo numbers skaičių tarpusavio sandaugą.
// 3. Parašykite funkciją createSequence(n, start, increment), kuri grąžina n ilgio masyvą pradedant skaičiumi start, kurio sekantys elementai didėja po increment.

function getRectangleArea(w, h) {
  return w * h
}

console.log(getRectangleArea(10, 20))

function getProduct(numbers) {
  let product = 1
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i]
  }
  return product
}

console.log(getProduct([1, 2, 3, 4, 5]))

function createSequence(n, start, increment) {
  // kodėl galima rašyti const?
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(start + increment * i)
  }
  return arr
}

console.log(createSequence(5, 2, 3))
console.log(createSequence(10, 5, -3))
console.log(createSequence(8, 1, 1))
