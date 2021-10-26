const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//append: 가장 뒤에, prepend:가장 앞에, insertBefore(a, b): a요소를 앞에 위치
document.body.appendChild(bgImage);
document.body.insertBefore(bgImage, document.querySelector("#weather"));
