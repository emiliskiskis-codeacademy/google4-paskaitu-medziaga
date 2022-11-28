const form = document.getElementById("form");

const id = new URLSearchParams(location.search).get("id");
let user;
fetch("https://638500943fa7acb14f071e15.mockapi.io/users/" + id)
  .then(res => res.json())
  .then(data => {
    user = data;
    form.elements.firstName.value = user.firstName;
    form.elements.lastName.value = user.lastName;
    form.elements.dob.value = user.dob.slice(0, 10);
    form.elements.sex.value = user.sex;
    form.elements.acceptedTerms.checked = user.acceptedTerms;
  });

form.addEventListener("submit", event => {
  event.preventDefault();

  if (!user) {
    return;
  }

  const data = {
    firstName: form.elements.firstName.value,
    lastName: form.elements.lastName.value,
    dob: form.elements.dob.value,
    sex: form.elements.sex.value,
    acceptedTerms: form.elements.acceptedTerms.checked,
    id: user.id,
    createdAt: user.createdAt
  };

  fetch("https://638500943fa7acb14f071e15.mockapi.io/users/" + id, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.ok) {
      location.pathname = location.pathname.slice(
        0,
        location.pathname.length - 6
      );
    }
  });
});
