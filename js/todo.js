const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//===const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//JSON.stringify() --> object및 array등 모든 변수를 string으로 변환
//JSON.parse() --> string으로 쓰인 object및 array등 변수를 다시 원래대로 변환
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); //화면에서 항목 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //array에서 항목 삭제
  saveToDos(); //특정 항목을 삭제하고 만든 새로운 toDos를 localstorage에 저장
}

//ul(list), li(list의 element)
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span_icon = document.createElement("span");
  span_icon.innerText = "●";
  const span_todo = document.createElement("span");
  span_todo.innerText = `${newToDo.text}`;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); //버튼을 눌렀을 때 항목 지우기
  li.appendChild(span_icon);
  li.appendChild(span_todo); //span을 li안에 위치시키기
  li.appendChild(button); //button을 li안에 위치시키기
  toDoList.appendChild(li); //li를 ul안에 위치시키기
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ""; //입력창 비우기
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); //항목을 출력하기 전에 array에 저장
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

//앞서 저장된 값이 있을 경우
if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  //eventListener에서 직전에 실행된 event에 대한 정보를 주듯이, foreach또한 첫 argument로 정보를 받을 수 있음
  //item(첫번째 argument) --> 현재 함수를 실행하고 있는 array의 item
  parseToDos.forEach(paintToDo); //array의 모든 요소들에 대해 함수를 한 번씩 실행하게 함.
}

//특정 item을 array에서 지우는 것이 아니라
//그 item을 제외한 다른 item만으로 구성된 새 array을 만듦
