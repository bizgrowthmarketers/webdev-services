document.addEventListener('DOMContentLoaded', function () {
  const typedElement = document.getElementById('typedElement');
  // Create a new worker
  const worker = new Worker('./js/typedWorker.js');
  // Listen to messages from the worker
  worker.onmessage = function (event) {
    if (event.data.action === 'type') {
      // Append the character
      typedElement.innerHTML += event.data.char;
    } else if (event.data.action === 'delete') {
      // Delete the last character
      typedElement.innerHTML = typedElement.innerHTML.slice(0, -1);
    }
  };
  // Start the typing process by sending an initial message to the worker
  worker.postMessage('start');
});
