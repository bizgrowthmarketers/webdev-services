// Select all accordion toggle buttons
document.querySelectorAll('.accordion-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    const accordionAnswer = button.nextElementSibling;
    const isActive = accordionItem.classList.contains('active');
    // Toggle the active class
    accordionItem.classList.toggle('active');
    // Adjust the height of the accordion answer
    if (isActive) {
      accordionAnswer.style.maxHeight = null;
    } else {
      accordionAnswer.style.maxHeight = accordionAnswer.scrollHeight + "px";
    }
  });
});