const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoFormLogin = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.innerHTML = `${username}'s TO DO LIST`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function submitLogin(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoFormLogin.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", submitLogin);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoFormLogin.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(savedUsername);
}
