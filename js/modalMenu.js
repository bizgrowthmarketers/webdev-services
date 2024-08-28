const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
});

