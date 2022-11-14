function saveData() {}

function loadData() {}

function listSaves() {}

function deleteData() {}

function quit() {}

let choice = 5

if (choice === 1) {
  saveData()
} else if (choice === 2) {
  loadData()
} else if (choice === 3) {
  listSaves()
} else if (choice === 4) {
  deleteData()
}

switch (choice) {
  case 1:
    saveData()
    break
  case 2:
  case 5:
    loadData()
    break
  case 3:
    listSaves()
    break
  case 4:
    deleteData()
    break
  default:
    console.log("Neteisingas pasirinkimas")
}

choice = 2

switch (choice) {
  case 2:
    saveData()
  case 1:
    quit()
    break
  default:
    console.log("Neteisingas pasirinkimas")
}
