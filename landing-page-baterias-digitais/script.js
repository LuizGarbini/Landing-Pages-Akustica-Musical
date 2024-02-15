document.addEventListener('DOMContentLoaded', function () {
  const openGalleryButton = document.getElementById('openGallery');
  const sliderContainer = document.getElementById('sliderContainer');
  const slider = document.querySelector('.slider');
  const dotsContainer = document.querySelector('.dots-container');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.getElementById('prevSlide');
  const nextButton = document.getElementById('nextSlide');
  const closeButton = document.getElementById('closeButton'); // Adicionado o botão de fechar
  let slideIndex = 0;

  // Show slider when "Ver Galeria" button is clicked
  openGalleryButton.addEventListener('click', function () {
    sliderContainer.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Aplica overflow:hidden apenas quando o slider está aberto
    showSlides(slideIndex);
    generateDots();
  });

  // Close slider when clicked on the close button
  closeButton.addEventListener('click', function () {
    sliderContainer.style.display = 'none';
    document.body.style.overflow = 'visible'; // Restaura overflow para visible quando o slider é fechado
  });

  // Previous slide button functionality
  prevButton.addEventListener('click', function () {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides(slideIndex);
  });

  // Next slide button functionality
  nextButton.addEventListener('click', function () {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides(slideIndex);
  });

  // Generate dots for each slide
  function generateDots() {
    dotsContainer.innerHTML = '';
    slides.forEach(function (_, index) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', function () {
        showSlides(index);
      });
      dotsContainer.appendChild(dot);
    });
    updateDots();
  }

  // Update active dot
  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(function (dot, index) {
      if (index === slideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Show specific slide
  function showSlides(index) {
    slides.forEach(function (slide) {
      slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
    slideIndex = index;
    updateDots();
  }

  // Swipe functionality for touch devices
  let startX;
  let endX;
  slider.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
  });

  slider.addEventListener('touchmove', function (event) {
    endX = event.touches[0].clientX;
  });

  slider.addEventListener('touchend', function () {
    if (startX - endX > 50) {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlides(slideIndex);
    } else if (endX - startX > 50) {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlides(slideIndex);
    }
  });
});
