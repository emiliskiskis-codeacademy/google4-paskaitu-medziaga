const url = "https://randomuser.me/api/?results=5000";
const cardDiv = document.getElementById("card");

function onUserFetch(user) {
  const img = document.createElement("img");
  const nameSpan = document.createElement("span");
  const ageSpan = document.createElement("span");
  const emailSpan = document.createElement("span");

  img.src = user.picture.thumbnail;
  img.alt = "Profile picture";

  nameSpan.textContent = user.name.first + " " + user.name.last;
  ageSpan.textContent = user.dob.age;
  emailSpan.textContent = user.email;

  cardDiv.append(img, nameSpan, ageSpan, emailSpan);
}

// fetch(url)
//   .then(res => {
//     if (res.status >= 400) {
//       throw new Error(res.statusText);
//     }
//     res.json();
//   })
//   .then(data => {
//     onUserFetch(data.results[0]);
//   })
//   .catch(error => {
//     cardDiv.textContent = error.message;
//   });

const form = document.getElementById("form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const data = {
    firstName: form.elements.firstName.value,
    lastName: form.elements.lastName.value,
    dob: form.elements.dob.value,
    sex: form.elements.sex.value,
    acceptedTerms: form.elements.acceptedTerms.checked
  };

  fetch("https://638500943fa7acb14f071e15.mockapi.io/users/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res);
  });
});
