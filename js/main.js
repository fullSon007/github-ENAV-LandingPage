
let currentSlide = 0;
const slides = document.querySelectorAll('.service__slide');
const orders = document.querySelectorAll('.slide-item')
// console.log(slides);

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  }
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });

  orders.forEach((order, index) => {
    if(index === currentSlide) {
      order.classList.add('slide-item--active');
    }
    else order.classList.remove('slide-item--active');
  })
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

showSlide(currentSlide);
