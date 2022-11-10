let lastTodoIndex = 1
let newTodoText = "Todo Text"
const todos = document.getElementById("todos")

const newTodo = `
<div class="todo">
  <input type="checkbox" id="todo-item-${lastTodoIndex}">
  <span class="todo-text" id="todo-text-${lastTodoIndex}">${newTodoText}</span>
</div>
`

todos.innerHTML += newTodo
const newTodoInput = document.getElementById("todo-item-" + lastTodoIndex)

function onTodoCheckboxChange(event, todoItemIndex) {
  const todoText = document.getElementById("todo-text-" + todoItemIndex)
  if (event.target.checked) {
    todoText.style.textDecoration = "line-through"
  } else {
    todoText.style.textDecoration = ""
  }
}

newTodoInput.addEventListener("change", e =>
  onTodoCheckboxChange(e, lastTodoIndex)
)
