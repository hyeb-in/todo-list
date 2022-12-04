const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = []; //중요

function saveToDosInLocal() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //object or array t0 string
}

function paintToDoList(newToDo) {
  const li = document.createElement("li");
  toDoList.appendChild(li);
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerHTML = `${newToDo.text}`;
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerHTML = `✕`;
  li.appendChild(button);
  button.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
  const delLi = event.target.parentElement;
  delLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(delLi.id));
  saveToDosInLocal();
}

function submitToDo(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDoList(newToDoObj);
  saveToDosInLocal();
}

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedToDos) {
  toDos = savedToDos;
  savedToDos.forEach(paintToDoList);
}
toDoForm.addEventListener("submit", submitToDo);
