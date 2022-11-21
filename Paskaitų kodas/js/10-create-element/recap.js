function toUpperCase(str) {
  return str + "" // ...
}

console.log("Laba diena".toUpperCase())
// ;(123).toUpperCase()

/*

toLowerCase
trim, trimStart, trimEnd
padLeft, padRight
slice
split

*/

console.log("Sveiki atvykę į CodeAcademy".slice(16))
console.log("Sveiki atvykę į CodeAcademy".split(" "))
/*
toFixed, toPrecision, toExponential
Number.parseInt, Number.parseFloat
*/
console.log((18.659541).toFixed(2) - 2)
console.log((602213213651658981654665).toPrecision(3))

/*
join
map (orders [{ order }, { order }, { order }]).map(order => order.status)
forEach (orders [{ order }, { order }, { order }].forEach(order => ))
filter
find, findIndex
every
some

sort
reduce
*/
console.log([1, 2, 3, 3.5, 4, 5, 3.7].filter(value => value < 3 || value > 4))
