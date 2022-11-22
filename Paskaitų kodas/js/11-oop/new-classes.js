class Animal {}

class Person extends Animal {
  greitis = 0

  constructor(vardas, pavarde, gimimoData) {
    super()
    this.vardas = vardas
    this.pavarde = pavarde
    this.gimimoData = new Date(gimimoData)
  }

  eiti() {
    this.greitis = 5
  }

  sustoti() {
    this.greitis = 0
  }

  getAge() {
    return new Date().getMonth() < this.gimimoData.getMonth()
      ? new Date().getFullYear() - this.gimimoData.getFullYear() - 1
      : new Date().getFullYear() - this.gimimoData.getFullYear()
  }
}

console.log(new Person())
const as = new Person("Emilis", "Kiškis", new Date(2000, 4, 12))
const irgiAs = {
  gimimoData: new Date("2000-05-12"),
  get age() {
    return new Date() - this.gimimoData
  },
  set age(a) {
    console.log(a)
  }
}
console.log(as)
console.log(as.getAge())
console.log(irgiAs.age)

class Buyer extends Person {
  uzsakymuIstorija = []

  constructor(vardas, pavarde, gimimoData, piniguSkaicius) {
    super(vardas, pavarde, gimimoData)
    this.piniguSkaicius = piniguSkaicius
  }

  eiti() {
    super.eiti()
    this.greitis = 7
  }

  getAge() {
    return super.getAge() + 10
  }
}

const person = new Person("Emilis", "Kiškis", "2000-05-12")
const buyer = new Buyer("Emilis", "Kiškis", "2000-05-12", 10)
person.eiti()
console.log(person.greitis)
buyer.eiti()
console.log(buyer.greitis)
console.log(person.getAge())
console.log(buyer.getAge())

console.log(person instanceof Person)
console.log(buyer instanceof Buyer)
console.log(person instanceof Buyer)
console.log(buyer instanceof Person)

function calculateWorth(person) {
  let worth = 0
  if (person instanceof Person) {
    worth = person.getAge() * 5
    if (person instanceof Buyer) {
      worth += person.piniguSkaicius
    }
  }
}

class Todo {
  done = false

  constructor(text) {
    const div = document.createElement("div")
    this.checkbox = document.createElement("input")
    this.checkbox.type = "checkbox"

    this.textSpan = document.createElement("span")
    this.textSpan.textContent = text
  }

  setTextStyle(value) {
    this.textSpan.style.textDecoration = value
  }

  markAsDone() {
    this.done = true
    this.setTextStyle("line-through")
  }

  unmarkAsDone() {
    this.done = false
    this.setTextStyle("")
  }
}

class HTTPService {
  constructor() {}
}

new Todo()
todo.markAsDone()
