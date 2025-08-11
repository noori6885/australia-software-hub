let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === slideIndex) {
      slide.classList.add('active');
    }
  });

  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000);
}

document.addEventListener('DOMContentLoaded', showSlides);

