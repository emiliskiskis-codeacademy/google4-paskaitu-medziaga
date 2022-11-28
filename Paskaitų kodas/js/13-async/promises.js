const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Timeout finished");
  }, 1000);
});

const timeBefore = new Date();
console.log(promise, timeBefore.getSeconds(), timeBefore.getMilliseconds());

// let buttonPressed = false;
// const promise2 = new Promise((resolve, reject) => {
//   const id = setInterval(() => {
//     if (buttonPressed) {
//       clearInterval(id);
//       resolve();
//     }
//   }, 1000);
// });

promise.then(text => {
  const timeNow = new Date();
  console.log(text, timeNow.getSeconds(), timeNow.getMilliseconds());
});

const buttonPressed5Times = new Promise((resolve, reject) => {
  let i = 0;
  const button = document.getElementById("submit");
  const onClick = () => {
    i++;
    if (i === 5) {
      resolve();
      button.removeEventListener("click", onClick);
    }
  };
  button.addEventListener("click", onClick);

  setTimeout(() => {
    reject("Mygtukas nebuvo paspaustas 5 kartus per 5 sekundes");
  }, 5000);
});

buttonPressed5Times
  .then(() => {
    alert("Button was pressed 5 times");
    // const nextPromise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("One second passed");
    //   }, 1000);
    // });
    // nextPromise
    //   .then(text => {
    //     console.log(text);
    //   })
    //   .catch(() => {
    //     console.error();
    //   });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("One second passed");
      }, 1000);
      reject("Time error");
    });
  })
  .then(text => {
    alert(text);
  })
  .catch(error => {
    console.error("Oh no, something happened", error);
  });

// užmezgam ryšį su serveriu
// išsiunčiam užklausą
// laukiam atsakymo
// atsisiunčiam atsakymą
// papildomai: nutraukiam ryšį
