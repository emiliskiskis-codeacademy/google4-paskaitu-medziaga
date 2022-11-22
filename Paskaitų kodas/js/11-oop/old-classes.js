/*

Parduotuve
Sandelis
Sale
Preke
Pirkejas
Pardavejas

Pirkimas - Pirkejas, Pardavejas, Preke[]

*/

/*

Automobilis: {
  spalva
  modelis
  marke
  galingumas
  duru skaicius
  kebulo tipas
  // variklio cilindro ilgis

  greitis

  greiteti
  stabdyti
  pasukti
}

Pirkejas {
  vardas
  pavarde
  adresas
  uzsakymu istorija
  pinigu skaicius
}

Pardavejas {
  vardas
  pavarde
  adresas
  pardavimu skaicius
}

(inheritance)

Zmogus {
  vardas
  pavarde
  gimimo data
}

Pirkejas : Zmogus {
  uzsakymu istorija
  pinigu skaicius
}

Pardavejas : Zmogus {
  pardavimu skaicius
}

*/

const zmogus = {
  vardas: "Emilis",
  pavarde: "Kiškis",
  gimimoData: "2000-05-12",
  eiti: function () {
    this.greitis = 5
  }
}

console.log(zmogus.greitis)
zmogus.eiti()
console.log(zmogus.greitis)

// class
function createPerson(vardas, pavarde, gimimoData) {
  return {
    vardas,
    pavarde,
    gimimoData
  }
  /*
  return {
    vardas: vardas,
    pavarde: pavarde,
    gimimoData: gimimoData
  }
  */
}

const person1 = createPerson("Emilis", "Kiškis", "2000-05-12")

function eiti() {
  this.greitis = 5
  console.log(this)
}

// klasė - Person
// konstruktorius - function Person() {}
// objektas - Person vienetas
// this - konkretus objektas
// prototipas - intrinsic savybės

function Person(vardas, pavarde, gimimoData) {
  // this = {}
  this.vardas = vardas
  this.pavarde = pavarde
  this.gimimoData = gimimoData

  this.greitis = 0
  // return this
}

Person.prototype = {
  eiti() {
    this.greitis = 5
  },
  sustoti() {
    this.greitis = 0
  }
}

// prototipas yra objektas, objektas turi prototipą, tai ir prototipas turi prototipą

const person2 = new Person("Emilis", "Kiškis", "2000-05-12")
const person3 = new Person("Emilis", "Kiškis", "2000-05-12")

console.log(typeof person1)
console.log(typeof person2)

console.log(person1 instanceof Person)
console.log(person2 instanceof Person)
console.log([] instanceof Array)
console.log({} instanceof Array)

// Metodo pavyzdys
console.log(person2.greitis)
person2.eiti()
console.log(person2.greitis)
person2.sustoti()
console.log(person2.greitis)

console.log("This:", this)

const emptyObj = {}
const emptyArr = []
console.log(emptyObj.toString())
console.log("Object.getPrototypeof", Object.getPrototypeOf(emptyObj))

Array.prototype.getSecond = function () {
  return this[1]
}

console.log([1, 2, 3].getSecond())
