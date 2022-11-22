function sum(x, y) {
  if (!(typeof x === "number" && typeof y === "number")) {
    throw new Error("x or y is not a number")
  }
  return x + y
}

if (1 / 0 === Infinity) {
  console.log("Dalyba iš nulio")
}

try {
  console.log(sum(3, 5))
  console.log(sum(1, 2))
  console.log(sum({}))
  console.log(sum(5, 5) - 3)
  console.log(sum([1, 2, 3], {}) - 3)
} catch (e) {
  console.log("Error: one parameter wasn't a number")
}

function getDataFromServer() {
  // return {
  //   data: [],
  //   timeStamp: new Date().toISOString(),
  //   version: 2.0
  // }
  throw new Error("No internet") // 404 Not Found, 504 Service Unavailable
}

try {
  getDataFromServer().data.map(datum => datum.status)
} catch (e) {
  console.log("Couldn't connect to server, please try again.")
  serverData = null
}

class ServerConnection {
  constructor() {
    this.dataArray = [16198, 61981, 961, 98165, 1]
    // ...
  }

  sendData() {
    throw new Error("Failed to send data")
  }

  receiveData() {}

  close() {
    console.log("Closed!")
  }
}

function getData(tries = 0) {
  // const conn = new ServerConnection()
  // conn.sendData()
  // const data = conn.receiveData()
  // conn.close()
  // return data;

  for (let i = 0; i < 3; i++) {
    const conn = new ServerConnection()
    try {
      conn.sendData()
      const data = conn.receiveData()
      return data
    } catch (e) {
      console.log(e)
    } finally {
      conn.close()
    }
  }
}

getData()

let acc = 0
let seq = []
for (let i = 0; i < 20; i++) {
  acc += i
  seq.push(acc)
}
console.log(seq)
