const firstNameInput = document.getElementById("first-name")
const lastNameInput = document.getElementById("last-name")
console.log(firstNameInput.value)

firstNameInput.value = "Antanas"

function onFirstNameInput(event) {
  console.log(event.target.value)
  lastNameInput.value = event.target.value
}

function onFirstNameBeforeInput(event) {
  if (
    event.data === "0" ||
    event.data === "1" ||
    event.data === "2" ||
    event.data === "3" ||
    event.data === "4" ||
    event.data === "5" ||
    event.data === "6" ||
    event.data === "7" ||
    event.data === "8" ||
    event.data === "9"
  ) {
    event.preventDefault()
  }
}

function setFirstNameErrorDisplay(display) {
  const firstNameError = document.getElementById("first-name-error")
  firstNameError.style.display = display
}

function onFirstNameChange(event) {
  console.log(event.target.value)
  lastNameInput.value = event.target.value

  if (event.target.value === "") {
    setFirstNameErrorDisplay("")
  } else {
    setFirstNameErrorDisplay("none")
  }
}

// firstNameInput.addEventListener("input", onFirstNameInput)
firstNameInput.addEventListener("change", onFirstNameChange)
firstNameInput.addEventListener("beforeinput", onFirstNameBeforeInput)

const form = document.getElementById("form")

function onSubmit(event) {
  event.preventDefault()
  console.log("Form was submitted")

  const elements = event.target.elements

  const values = {
    firstName: elements.firstName.value,
    lastName: elements.lastName.value,
    age: elements.age.value,
    sex: elements.sex.value,
    dob: elements.dob.value,
    tob: elements.tob.value,
    city: elements.city.value,
    loanAmount: elements.loanAmount.value,
    password: elements.password.value,
    identity: elements.identity.value,
    agree: elements.agree.checked
  }

  console.log(values)
}

form.addEventListener("submit", onSubmit)

// 1. paspaudžiama raidė
// 2. iškviečiamas beforeinput
// 3. raidė parodoma ekrane
// 4. iškviečiamas input
