const typedElement = document.getElementById('typedElement');
const strings = ['Drive Traffic,', 'Increase Conversions,', 'Maximize ROI,'];
let currentStringIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

function type() {
  if (isTyping) {
    const currentString = strings[currentStringIndex];
    const currentChar = currentString[currentCharIndex];

    typedElement.innerHTML += currentChar;

    currentCharIndex++;

    if (currentCharIndex >= currentString.length) {
      isTyping = false;
      setTimeout(deleteText, 1000); // Delay before deleting
    } else {
      setTimeout(type, 100); // Typing speed
    }
  }
}

function deleteText() {
  if (!isTyping) {
    const currentString = strings[currentStringIndex];

    typedElement.innerHTML = typedElement.innerHTML.slice(0, -1);

    currentCharIndex--;

    if (currentCharIndex <= 0) {
      currentStringIndex = (currentStringIndex + 1) % strings.length;
      currentCharIndex = 0;
      isTyping = true;
      setTimeout(type, 1000); // Delay before typing again
    } else {
      setTimeout(deleteText, 100); // Deleting speed
    }
  }
}

type();
