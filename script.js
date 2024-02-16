const numbers = document.querySelectorAll('.number');
const carouselItems = document.querySelectorAll('.carousel-item');
const paragraph = document.getElementById('paragraph');
let currentIndex = 0;

function showItem(index) {
  carouselItems.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
  });
}

function updateParagraph(index) {
  const text = `Este é um parágrafo abaixo do carrossel para o Texto ${index + 1}.`;
  paragraph.textContent = text;
}

numbers.forEach((number, index) => {
  number.addEventListener('click', () => {
    currentIndex = index;
    showItem(currentIndex);
    updateParagraph(currentIndex);
    highlightNumber(index);
  });
});

function highlightNumber(index) {
  numbers.forEach((number, i) => {
    number.classList.remove('active');
    if (i === index) {
      number.classList.add('active');
    }
  });
}

showItem(currentIndex);
updateParagraph(currentIndex);
