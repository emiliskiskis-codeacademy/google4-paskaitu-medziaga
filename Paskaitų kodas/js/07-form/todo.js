// Sekančio todo elemento indeksas
let nextIndex = 1

// Visų todo elementų divas
const todos = document.getElementById("todos")

// Kai paspausta varnelė
function onTodoCheckboxChange(event, index) {
  // Pasirenkame tekstą pagal indeksą
  const todoText = document.getElementById("todo-text-" + index)
  if (event.target.checked) {
    todoText.style.textDecoration = "line-through"
  } else {
    todoText.style.textDecoration = ""
  }
}

// Kai paspaudė Add
function onAddTodoFormSubmit(event) {
  event.preventDefault()
  const todoTextInput = event.target.elements.todoText
  const newTodo = `
<div class="todo">
  <input type="checkbox" id="todo-item-${nextIndex}">
  <span class="todo-text" id="todo-text-${nextIndex}">${todoTextInput.value}</span>
</div>
`
  todos.innerHTML += newTodo
  todoTextInput.value = ""

  // Kiekvienam todo elementui uždedame event listenerį
  for (let i = 1; i <= nextIndex; i++) {
    const newTodoInput = document.getElementById("todo-item-" + i)
    newTodoInput.addEventListener("change", e => onTodoCheckboxChange(e, i))
  }
  nextIndex++
}

// Pasirenkame formą ir jai uždedame submit listenerį
document
  .getElementById("addTodoForm")
  .addEventListener("submit", onAddTodoFormSubmit)
