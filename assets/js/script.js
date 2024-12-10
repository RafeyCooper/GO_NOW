AOS.init();

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: false,
    grabCursor: true,
    on: {
        init: function () {
            let slides = document.querySelectorAll('.swiper-slide');
            slides.forEach(slide => {
                slide.style.transform = 'scale(0.8)';
            });
            let activeSlide = document.querySelectorAll('.swiper-slide-active');
            activeSlide.forEach(slide => {
                slide.style.transform = 'scale(1)';
            });
            // activeSlide.style.transform = 'scale(1)';
        },
        slideChangeTransitionStart: function () {
            let slides = document.querySelectorAll('.swiper-slide');
            slides.forEach(slide => {
                slide.style.transform = 'scale(0.8)';
            });
            let activeSlide = document.querySelectorAll('.swiper-slide-active');
            activeSlide.forEach(slide => {
                slide.style.transform = 'scale(1)';
            });
        }
    }
});


$(document).ready(function() {
    // Open sidebar
    $('.hamburger-icon-box').on('click', function() {
        $('.sidebar-custom').addClass('show');
        $('.overlay').addClass('show'); // Show overlay
    });

    // Close sidebar when close button is clicked
    $('.close-btn').on('click', function() {
        $('.sidebar-custom').removeClass('show');
        $('.overlay').removeClass('show'); // Hide overlay
    });

    // Close sidebar when clicking outside (on overlay)
    $('.overlay').on('click', function() {
        $('.sidebar-custom').removeClass('show');
        $(this).removeClass('show'); // Hide overlay
    });
});


// Function to add the animation class with delay
function animateCars() {
    const blackCar = document.querySelector('.car-black');
    const pinkCar = document.querySelector('.car-pink');
    const whiteCar = document.querySelector('.car-white');
  
    // Add the 'animated' class to black car immediately
    blackCar.classList.add('animated');
  
    // Add the 'animated' class to pink car with a delay
    setTimeout(() => {
      pinkCar.classList.add('animated');
    }, 100); // 300ms delay
  
    // Add the 'animated' class to white car with another delay
    setTimeout(() => {
      whiteCar.classList.add('animated');
    }, 200); // 600ms delay
  }
  
  function checkScroll() {
    const carsSection = document.querySelector('.car-section'); // or any parent container of cars
    const position = carsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2; // Adjust this as needed
  
    if (position < screenPosition) {
      animateCars(); // Trigger the animation when the section is in view
      window.removeEventListener('scroll', checkScroll); // Remove scroll event after animation
    }
  }
  
  // Listen for the scroll event to trigger the animation when in view
  window.addEventListener('scroll', checkScroll);
  