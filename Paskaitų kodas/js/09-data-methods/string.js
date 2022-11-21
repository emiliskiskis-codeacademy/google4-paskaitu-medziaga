// to(Locale)LowerCase, to(Locale)UpperCase
// trim, trimStart, trimEnd
// split
// slice
// startsWith, endsWith
// padStart, padEnd

let str1 = "Hello World!"
str1 = str1.toLowerCase()
console.log(str1)

str1 = str1.toUpperCase()
console.log(str1)

str1 = str1.toLocaleLowerCase()
console.log(str1)

str1 = str1.toLocaleUpperCase()
console.log(str1)

let str2 = "     mano miestas  vilnius          "
str2 = str2.trim()
console.log(str2)

str2 = "     mano miestas  vilnius          "
str2 = str2.trimStart()
console.log(str2)

str2 = "     mano miestas  vilnius          "
str2 = str2.trimEnd()
console.log(str2)

const trimmedStr2 = str2.trim()
console.log(trimmedStr2)

const listOfNames = "Alice,Bob,Charlie,David,Emilis"
const sentence =
  "Mollit commodo Lorem consequat incididunt pariatur non aliquip est commodo"

console.log(listOfNames.split(","))
console.log(sentence.split())

const parametersStr =
  "first-name=Emilis&last-name=Kiškis&age=22&sex=m&dob=2000-05-12&tob=12%3A00&city=Vilnius&city=Kaunas&city=Klaipeda&loan-amount=17566&password=abcde&identity=&agree=on"
const parameters = parametersStr.split("&")
console.log(parameters)

const parameterObj = {}
for (let i = 0; i < parameters.length; i++) {
  const elements = parameters[i].split("=")
  let name = elements[0],
    value = elements[1]
  const words = name.split("-")
  if (words.length === 1) {
    name = words[0]
  } else if (words.length === 2) {
    name = words[0] + words[1][0].toUpperCase() + words[1].slice(1)
  }
  parameterObj[name] = value
}
console.log(parameterObj)

const str3 = "Another hello world"
console.log(str3.slice(8))
console.log(str3.slice(8, 8 + 5))

// startsWith, endsWith
console.log(str3.startsWith("Another"))
console.log(str3.startsWith("Hello"))
console.log(str3.endsWith("hello"))
console.log(str3.endsWith("world"))
console.log(str3.startsWith(""))

let str4 = "Stulpelis"
console.log(str4.length)
str4 = str4.padEnd(20, "ABC")
console.log(str4.length)
console.log(str4)

let hours = 12
let minutes = 5
let milliseconds = 20
console.log(
  `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`
)
