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
    if (res.ok) {
      location.pathname = location.pathname.slice(
        0,
        location.pathname.length - 4
      );
    }
  });
});
