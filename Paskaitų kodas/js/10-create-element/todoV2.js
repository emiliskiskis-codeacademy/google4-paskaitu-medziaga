// add todo
// (un)mark as done
// delete todo

const todos = []

// Visų todo elementų divas
const todosDiv = document.getElementById("todos")

function onTodoCheckboxChange(event) {
  const todoText = event.target.nextElementSibling
  if (event.target.checked) {
    todoText.style.textDecoration = "line-through"
  } else {
    todoText.style.textDecoration = ""
  }
}

function onTodoDeleteClick(event) {
  event.target.parentElement.remove()
}

function createTodoCheckbox(done) {
  const todoCheckbox = document.createElement("input")

  todoCheckbox.type = "checkbox"
  todoCheckbox.checked = done
  todoCheckbox.addEventListener("change", onTodoCheckboxChange)

  return todoCheckbox
}

function createTodoSpan(text) {
  const todoSpan = document.createElement("span")
  todoSpan.className = "todo-text"
  todoSpan.innerText = text

  return todoSpan
}

function createTodoDeleteButton() {
  const todoDeleteButton = document.createElement("button")
  todoDeleteButton.innerText = "x"
  todoDeleteButton.addEventListener("click", onTodoDeleteClick)

  return todoDeleteButton
}

function createTodo(todo) {
  const todoDiv = document.createElement("div")

  todoDiv.className = "todo"

  todoDiv.append(
    createTodoCheckbox(todo.done),
    createTodoSpan(todo.text),
    createTodoDeleteButton()
  )
}

document.getElementById("addTodoForm").addEventListener("submit", e => {
  e.preventDefault()
  const todoTextEl = e.target.elements.todoText
  const todoText = todoTextEl.value
  todoTextEl.value = ""

  const newTodo = {
    text: todoText,
    done: false
  }
  todos.unshift(newTodo)

  todosDiv.innerHTML = ""
  todosDiv.append(...todos.map(createTodo))
})

document.getElementById("selectAll").addEventListener("click", e => {
  // if (e.target.checked) {
  //   Array.from(todos.children).forEach(todo => {
  //     Array.from(todo.children).find(
  //       child => child.tagName === "INPUT"
  //     ).checked = true
  //   })
  // } else {
  //   Array.from(todos.children).forEach(todo => {
  //     Array.from(todo.children).find(
  //       child => child.tagName === "INPUT"
  //     ).checked = false
  //   })
  // }
  todos.querySelectorAll("input").forEach(checkbox => {
    checkbox.checked = e.target.checked
    if (e.target.checked) {
      checkbox.nextElementSibling.style.textDecoration = "line-through"
    } else {
      checkbox.nextElementSibling.style.textDecoration = ""
    }
  })
})

// const newTodos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"]
//   .reverse()
//   .map(createTodo)

// todos.prepend(...newTodos)

todos.prepend(
  ...["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"]
    .reverse()
    .map(createTodo)
)
