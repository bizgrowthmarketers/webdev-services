function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent += "+"; // Add the "+" sign when the animation is complete

      // Restart the counter after 1 second
      setTimeout(() => {
        element.textContent = "0"; // Reset the counter to 0
        animateCounter(element, 0, end, duration); // Start the animation again
      }, 2000); // 1 second delay before restarting
    }
  };
  window.requestAnimationFrame(step);
}

// Select all elements with the counter-container class
const counters = document.querySelectorAll(".counter-container");
counters.forEach((counter) => {
  const endValue = parseInt(counter.textContent.replace(/\D/g, ""), 10);
  animateCounter(counter, 0, endValue, 15500);
});
