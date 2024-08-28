function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent += "+";

      setTimeout(() => {
        element.textContent = "0";
        animateCounter(element, 0, end, duration);
      }, 5000);
    }
  };
  window.requestAnimationFrame(step);
}

const counters = document.querySelectorAll(".counter-container");
counters.forEach((counter) => {
  const endValue = parseInt(counter.textContent.replace(/\D/g, ""), 10);
  animateCounter(counter, 0, endValue, 3000);
});
