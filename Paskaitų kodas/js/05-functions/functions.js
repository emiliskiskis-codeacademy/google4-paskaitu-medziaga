// let arr = []
// for (let i = 0; i < 10; i++) {
//   arr[i] = i + 1
// }
// console.log(arr)

// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
// console.log(sum)

// let els1 = [],
//   els2 = [],
//   els3 = [],
//   els4 = [],
//   els5 = []

// let n1 = 10,
//   n2 = 20,
//   n3 = 30,
//   n4 = 40,
//   n5 = 50

// for (let i = 0; i < n1; i++) {
//   els1[i] = i + 1
// }
// for (let i = 0; i < n2; i++) {
//   els2[i] = i + 1
// }
// for (let i = 0; i < n3; i++) {
//   els3[i] = i + 1
// }
// for (let i = 0; i < n4; i++) {
//   els4[i] = i + 1
// }
// for (let i = 0; i < n5; i++) {
//   els5[i] = i + 1
// }

// console.log(els1)
// console.log(els2)
// console.log(els3)
// console.log(els4)
// console.log(els5)

// let sum1 = 0,
//   sum2 = 0,
//   sum3 = 0,
//   sum4 = 0,
//   sum5 = 0

// for (let i = 0; i < els1.length; i++) {
//   sum1 += els1[i]
// }
// for (let i = 0; i < els2.length; i++) {
//   sum2 += els2[i]
// }
// for (let i = 0; i < els3.length; i++) {
//   sum3 += els3[i]
// }
// for (let i = 0; i < els4.length; i++) {
//   sum4 += els4[i]
// }
// for (let i = 0; i < els5.length; i++) {
//   sum5 += els5[i]
// }

// console.log(sum1, sum2, sum3, sum4, sum5)

function getSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

function generateNumbers(n, els) {
  for (let i = 0; i < n; i++) {
    els[i] = i + 1
  }
}

let arr = [1, 2, 3, 4, 5]
let sum = getSum(arr)
console.log(sum)

let n = 100

let elArrayArray = []

for (let i = 1; i <= n; i++) {
  let els = []
  generateNumbers(i * 10, els)
  elArrayArray.push(els)
}

console.log(elArrayArray)

for (let i = 0; i < elArrayArray.length; i++) {
  console.log(getSum(elArrayArray[i]))
}

// Functions and DOM
const body = document.querySelector("body")

const paragraphs = [
  "Porro beatae commodi quisquam dolores molestiae aut non ut. Quisquam occaecati perspiciatis consectetur. Itaque accusantium ipsa earum explicabo. Magni provident rerum maxime cupiditate neque ut sint veritatis.",
  "Ipsum provident odit fugit et animi fugit. Dignissimos corrupti in ut voluptatem natus veritatis laborum tenetur. Dignissimos quia aut dolor veniam eveniet.",
  "Asperiores iusto quia quis aliquam non eum est provident. Earum amet in pariatur beatae inventore omnis. Blanditiis adipisci rerum explicabo et aut praesentium debitis doloremque. Voluptatem corporis eaque libero temporibus excepturi unde. Nulla rerum qui eligendi rerum.",
  "Quaerat neque ut et quia. Eveniet porro non voluptatibus iure ullam tempora. Nam exercitationem a blanditiis sit ab consequatur exercitationem. Odio tempora ut velit sapiente.",
  "Deserunt sint repudiandae maiores itaque error dolore. Occaecati est repellendus fugiat minus. Enim magnam tempore natus blanditiis. Ut quas labore reiciendis deleniti. Adipisci perferendis aut provident culpa et quia doloribus. Ut possimus nulla ut tempora voluptatem optio et quia.",
  "Nobis quo corporis consequatur non. Aut est molestiae ea voluptatem eaque vel. Quaerat aut velit qui qui explicabo.",
  "Et quod quidem consequatur quaerat dolor voluptate repellendus ut. Nostrum ex culpa dicta. Laborum ut excepturi quod. Voluptas quo dolores repellat eum pariatur expedita. Reiciendis et exercitationem molestiae facilis aspernatur. Qui non dignissimos illo reiciendis eos doloremque omnis numquam.",
  "Aut cumque dolores doloremque beatae laudantium expedita. Vitae minus temporibus quidem. Quia sint doloremque fugiat non et dolorem ratione. Veniam quia sunt praesentium rerum aliquam iure. Laborum omnis exercitationem tempora. Alias sunt sint quas eum.",
  "Dolorum ipsam qui molestiae illum fuga veritatis. Sit deleniti necessitatibus ipsam. Vero tempore deserunt harum saepe esse et amet. Autem repellendus molestiae aliquid sint.",
  "Distinctio voluptatem eos vero aut qui. Aperiam provident distinctio consequatur non neque perspiciatis et. Ratione similique dolor et qui ut qui. Voluptatem ut et laudantium omnis. Ratione id incidunt odio nihil accusamus. Rerum commodi est qui minima neque doloremque."
]

function addParagraph(text) {
  const newP = `<p style="color: red;">${text}</p>`
  body.innerHTML += newP
}

for (let i = 0; i < paragraphs.length; i++) {
  addParagraph(paragraphs[i])
}
