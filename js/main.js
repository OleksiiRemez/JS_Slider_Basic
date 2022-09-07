const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const pauseBtn = document.querySelector("#pause");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let currentSlide = 0;
let isPlaying = true;
let timerID = null;
let interval = 1000;

const SLIDES_LENGTH = slides.length;

function gotoNth(n) {
  console.log(n);
  slides[currentSlide].classList.toggle("active");
  indicators[currentSlide].classList.toggle("active");
  currentSlide = (n + SLIDES_LENGTH) % SLIDES_LENGTH;
  slides[currentSlide].classList.toggle("active");
  indicators[currentSlide].classList.toggle("active");
}

function gotoPrev() {
  gotoNth(currentSlide - 1);
}
function gotoNext() {
  gotoNth(currentSlide + 1);
}

function pause() {
  clearInterval(timerID);
  isPlaying = false;
  pauseBtn.innerHTML = "Play";
}

function play() {
  timerID = setInterval(gotoNext, interval);
  isPlaying = true;
  pauseBtn.innerHTML = "Pause";
}

const pausePlay = () => (isPlaying ? pause() : play());

function prev() {
  gotoPrev();
  pause();
}

function next() {
  gotoNext();
  pause();
}

function indicate() {
  console.log(this);
}

pauseBtn.addEventListener("click", pausePlay);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

timerID = setInterval(gotoNext, interval);

indicators.forEach((el) => {
  el.addEventListener("click", indicate);
});
