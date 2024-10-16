let currentIndex = 0;
const slides = document.querySelectorAll('.fds');
const slider = document.querySelector('.fd-slider');
const totalSlides = slides.length;
document.querySelector('.arrow.left').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
  updateSlidePosition();
});
document.querySelector('.arrow.right').addEventListener('click', () => {
  currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
  updateSlidePosition();
});
function updateSlidePosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}