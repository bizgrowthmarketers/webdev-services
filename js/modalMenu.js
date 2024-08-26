const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
});

const modal = document.getElementById("modal");
const toggleButton = document.getElementById("hamburger");

toggleButton.addEventListener("click", () => {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    hamburger.classList.remove("active");
  }
};
