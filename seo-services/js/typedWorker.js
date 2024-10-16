let strings = ['Traffic,', 'Leads,', 'Sales,', 'Ranking,'];
let currentStringIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

function type() {
  if (isTyping) {
    const currentString = strings[currentStringIndex];
    const currentChar = currentString[currentCharIndex];

    postMessage({ action: 'type', char: currentChar });

    currentCharIndex++;

    if (currentCharIndex >= currentString.length) {
      isTyping = false;
      setTimeout(deleteText, 1000); // Delay before deleting
    } else {
      setTimeout(type, 100); // Adjust typing speed as needed
    }
  }
}
function deleteText() {
  if (!isTyping) {
    const currentString = strings[currentStringIndex];

    postMessage({ action: 'delete' });

    currentCharIndex--;

    if (currentCharIndex <= 0) {
      currentStringIndex = (currentStringIndex + 1) % strings.length;
      currentCharIndex = 0;
      isTyping = true;
      setTimeout(type, 1000); // Delay before typing again
    } else {
      setTimeout(deleteText, 100); // Adjust deleting speed as needed
    }
  }
}
// Handle start typing from the main thread
onmessage = function () {
  type();
};
