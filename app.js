let btn = document.querySelector("button");
let todoList = document.getElementById("todo-list");
let input = document.querySelector("input");

let todos = [];

btn.addEventListener("click", () => {
  todos.push(input.value);
  addTodo(input.value);
  input.value = "";
  //   console.log(todos);
});
input.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.keyCode === 13) {
    addTodo(input.value);
    input.value = "";
  }
});

function addTodo(todo) {
  let para = document.createElement("p");
  para.innerHTML = todo;
  // console.log(para);
  todoList.appendChild(para);
  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    removeTodo();
  });
  para.addEventListener("dblclick", () => {
    todoList.removeChild(para);
    removeTodo();
  });
}

function removeTodo(todo) {
  let remove = todos.indexOf(todo);
  // if (remove > -1) todos.splice(remove, 1);
}
