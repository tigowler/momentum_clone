const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const loginSubmit = document.querySelector("#login-form input:last-child");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//local storage에 저장된 username이 없고 login을 submit한 경우
function onLogrinSubmit(event) {
  //event가 일어나고 본 함수가 호출되면 첫번째 argument에 event와 관련된 정보(event object)가 자동 입력됨
  event.preventDefault(); //form이 submit되면 자동으로 새로고침되는 행동을 방지함, object는 preventDefault 함수를 기본적으로 갖고 있음
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginInput.classList.add(HIDDEN_CLASSNAME);
  loginSubmit.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetingsAndToDos(username);
}

//greeting 내용 출력
function paintGreetingsAndToDos(username) {
  greeting.innerText = `Hello ${username} 💙`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //최초 로그인 하는 경우
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  loginSubmit.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLogrinSubmit);
} else {
  //이미 저장된 username이 있는 경우
  paintGreetingsAndToDos(savedUsername);
}
