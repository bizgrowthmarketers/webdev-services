// document.querySelectorAll('.faq-question').forEach(item => {
//     item.addEventListener('click', event => {
//     const faqItem = event.currentTarget.parentElement;
//     faqItem.classList.toggle('open');
//     });
// });

// document.querySelectorAll('.faq-accordion-item').forEach(button => {
//     button.addEventListener('click', function () {
//       const faqItem = this.closest('.faq-item'); // Get the closest faq-item
//       faqItem.classList.toggle('open'); // Toggle the 'open' class on faq-item
//     });
//   });
  

// Select all accordion questions to make the entire question area clickable
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const faqItem = question.closest('.faq-item');
      const answer = faqItem.querySelector('.faq-answer');
      const isActive = faqItem.classList.contains('open');
      
      // Toggle open/close state
      if (isActive) {
        faqItem.classList.remove('open');
        answer.style.display = 'none';
      } else {
        faqItem.classList.add('open');
        answer.style.display = 'block';
      }
      
      // Toggle icon rotation
      const icon = question.querySelector('i');
      if (icon) {
        icon.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });
});



