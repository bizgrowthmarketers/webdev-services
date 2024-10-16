const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
