const API_KEY = "ef93de5246f6f6979fe833729d46c6ca";

//eventHandler에서 주는 event에 대한 기본 정보처럼, 첫번째 argument에 position정보를 줌.
function onGeoOk(position) {
  const lat = position.coords.latitude; //위도 경도 찾기
  const lon = position.coords.longitude;
  //&unit=metric을 이용하여 화씨로 표현된 온도를 섭씨로 변경함
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //fetch===promise: 서버의 응답과 같이 특정한 기다림 이후 동작할 수 있음
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}˚C`;
    }); //url로 이동해서 정보 가져오기
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
