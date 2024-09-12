let startTimestamp = null;

self.onmessage = function (event) {
  const { start, end, duration } = event.data;

  startTimestamp = null; // Reset startTimestamp for each new animation

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;

    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentCount = Math.floor(progress * (end - start) + start);

    self.postMessage({ value: currentCount, done: progress >= 1 });

    if (progress < 1) {
      self.requestAnimationFrame(step);
    }
  };

  self.requestAnimationFrame(step);
};
