const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav');
// Toggle the modal when clicking the hamburger
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
// Close modal when clicking outside of the nav
document.addEventListener('click', function (event) {
  // Check if the click is outside the modal (nav)
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});
// Close modal when pressing the Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    // If 'Esc' key is pressed
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});
