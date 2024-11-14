document.querySelectorAll('.accordion__btn').forEach(button => {
  button.addEventListener('click', function() {
    const accordionBox = this.closest('.faq__accordion');
    const panel = accordionBox.querySelector('.panel');
    const button = accordionBox.querySelector('.accordion__btn');

    document.querySelectorAll('.panel').forEach(p => {
      if (p !== panel) {
        p.style.display = 'none';
        const otherButton = p.closest('.faq__accordion').querySelector('.accordion__btn');
        if (otherButton) otherButton.textContent = "+";
        p.classList.remove('active');
      }
    });

    if (panel.classList.contains('active')) {
      panel.style.display = 'none';
      panel.classList.remove('active');
      button.textContent = "+";
    }

    else {
      panel.style.display = 'block';
      panel.classList.add('active');
      button.textContent = "-";
    }
  });
});





