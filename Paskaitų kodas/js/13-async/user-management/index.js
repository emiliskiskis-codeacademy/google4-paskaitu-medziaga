function onDeleteClick(id) {
  fetch("https://638500943fa7acb14f071e15.mockapi.io/users/" + id, {
    method: "DELETE"
  }).then(() => {
    refreshUsers();
  });
}

function createUser(user) {
  const div = document.createElement("div");

  const editButton = document.createElement("button");
  const editAnchor = document.createElement("a");
  editAnchor.href = `edit/?id=${user.id}`;
  editAnchor.textContent = "Edit";
  editButton.append(editAnchor);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    onDeleteClick(user.id);
  });

  div.append(editButton, deleteButton, user.firstName + " " + user.lastName);

  return div;
}

function refreshUsers() {
  const users = document.getElementById("users");
  fetch("https://638500943fa7acb14f071e15.mockapi.io/users")
    .then(res => res.json())
    .then(data => {
      users.innerHTML = "";
      users.append(...data.map(createUser));
    });
}

refreshUsers();
