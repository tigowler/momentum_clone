//interval 특정 시간마다 매번 일어나야 하는 것, mili-sec 단위(5000==5초)
//timeout 특정 시간이 지난 뒤에 단 한 번만 호출
const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //시작과 동시에 호출 후, 매 1초마다 재호출
setInterval(getClock, 1000);
