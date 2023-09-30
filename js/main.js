
// slide navi
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
    if (index === currentSlide) {
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

// scrolltoTop

// Lắng nghe sự kiện cuộn trang
window.onscroll = function () {
  scrollFunction();
};

// Hiển thị hoặc ẩn nút quay về đầu trang
function scrollFunction() {
  const toTopBtn = document.getElementsByClassName('toTopBtn')[0];
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

// Khi người dùng nhấp vào nút, cuộn trang lên đầu
document.getElementsByClassName('toTopBtn')[0].addEventListener("click", function () {
  document.body.scrollTop = 0; // Đối với Safari
  document.documentElement.scrollTop = 0; // Đối với Chrome, Firefox, IE, và Opera
});


// Menu Mobile

const header = document.getElementById('header');
// const introEle = 
// console.log(header)

const menu = document.getElementById('menu-mobile');
const currentHeight = header.clientHeight;
menu.onclick = function() {
  var isClosed = header.clientHeight === currentHeight;
  if (isClosed) {
    header.style.height = 'auto';}
  else {
    header.style.height = null;
  }
}

document.getElementById('introduction').addEventListener("click", function(){
    header.style.height = null;
});
