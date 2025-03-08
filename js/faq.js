document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    const answer = parent.querySelector('.faq-answer');
    if (parent.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      void answer.offsetHeight;
      answer.style.maxHeight = "0px";
      parent.classList.remove('active');
    } else {
      parent.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === 'max-height') {
          answer.style.maxHeight = 'none';
        }
        answer.removeEventListener('transitionend', handler);
      });
    }
  });
});
