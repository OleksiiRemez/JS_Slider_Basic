const slides = document.querySelectorAll(".slide");
const pauseButton = document.querySelectorAll("#pause");

let currentSlide = 0;
let isPlaying = true;
let timerID = null;
const interval = 1000;
const slidesLenght = slides.length;

function nextSlide() {
  slides[currentSlide].classList.toggle("active");
  currentSlide = (currentSlide + 1) % slidesLenght;
  slides[currentSlide].classList.toggle("active");
}

timerID = setInterval(nextSlide, interval);

function pauseHandler() {
  if (isPlaying) {
    clearInterval(timerID);
    isPlaying = false;
    pauseButton.innerHTML = "Play";
  } else {
    timerID = setInterval(nextSlide, interval);
    isPlaying = true;
    pauseButton.innerHTML = "Pause";
  }
}

pauseButton.addEventListener("click", pauseHandler);
