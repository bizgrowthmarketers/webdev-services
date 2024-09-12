// Function to initiate the counter animation using a worker
function startCounterWorker(element, start, end, duration) {
  // Function to handle the worker lifecycle
  let worker;
  function startWorker() {
    // Terminate any existing worker
    if (worker) {
      worker.terminate();
    }
    worker = new Worker('./js/counterWorker.js');
    worker.onmessage = function (event) {
      const { value, done } = event.data;
      element.textContent = value;
      if (done) {
        element.textContent += '+';
        // Clear any existing timeout to avoid multiple resets
        clearTimeout(restartTimeout);
        // Reset the counter after 5 seconds
        restartTimeout = setTimeout(() => {
          element.textContent = '0';
          // Restart the animation
          startWorker();
        }, 5000);
      }
    };
    // Start the worker with the animation parameters
    worker.postMessage({ start, end, duration });
  }
  let restartTimeout;
  startWorker(); // Start the initial animation
}
// Select all counter elements
const counters = document.querySelectorAll('.counter-container');

counters.forEach((counter) => {
  const endValue = parseInt(counter.textContent.replace(/\D/g, ''), 10);
  startCounterWorker(counter, 0, endValue, 3000);
});
