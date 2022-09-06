const slides = document.querySelectorAll(".slide");
const pauseButton = document.querySelector("#pause");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let currentSlide = 0;
let isPlaying = true;
let timerID = null;
const interval = 1000;
const slidesLenght = slides.length;

function goToSlide(n) {
  console.log(n);
  slides[currentSlide].classList.toggle("active");
  currentSlide = (currentSlide + 1) % slidesLenght;
  slides[currentSlide].classList.toggle("active");
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}
function nextSlide() {
  goToSlide(currentSlide + 1);
}

timerID = setInterval(nextSlide, interval);

function pauseSlideShow() {
  clearInterval(timerID);
  isPlaying = false;
  pauseButton.innerHTML = "Play";
}

function playSlideShow() {
  timerID = setInterval(nextSlide, interval);
  isPlaying = true;
  pauseButton.innerHTML = "Pause";
}

function pauseHandler() {
  if (isPlaying) {
    pauseSlideShow();
  } else {
    playSlideShow();
  }
}

pauseButton.addEventListener("click", pauseHandler);
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
