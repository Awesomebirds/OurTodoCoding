const form = document.querySelector("form");
const input = document.querySelector("input");
const todo = document.querySelector(".todo");

function addTodoOnSubmit(value) {
  const myTag = document.createElement("li");
  myTag.textContent = value;
  todo.appendChild(myTag);
}

function saveTodo(value) {
  console.log(value);
  localStorage.setItem(Date.now(), value);
  addTodoOnSubmit(value);
}

function handleSubmit(event) {
  event.preventDefault();

  //저장하기
  saveTodo(input.value);

  //인풋 비우기
  input.value = "";
}

form.addEventListener("submit", handleSubmit);
