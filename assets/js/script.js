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


$(document).ready(function () {
    // Open sidebar
    $('.hamburger-icon-box').on('click', function () {
        $('.sidebar-custom').addClass('show');
        $('.overlay').addClass('show'); // Show overlay
    });

    // Close sidebar when close button is clicked
    $('.close-btn').on('click', function () {
        $('.sidebar-custom').removeClass('show');
        $('.overlay').removeClass('show'); // Hide overlay
    });

    // Close sidebar when clicking outside (on overlay)
    $('.overlay').on('click', function () {
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

// Function to apply the animation when elements are in the viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animation-fadeup]');

    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                const start = element.getAttribute('data-animation-fadeup') || '0px';
                const duration = element.getAttribute('data-animation-duration') || '1000ms';
                const delay = element.getAttribute('data-animation-delay') || '0ms';

                // Set custom properties based on the data attributes
                element.style.setProperty('--animation-fadeup', start);
                element.style.setProperty('--animation-duration', `${duration}ms`);
                
                // Apply the animation class after the delay
                setTimeout(() => {
                    element.classList.add('animated');
                }, delay);

                // Unobserve the element after the animation has been applied
                observer.unobserve(element);
            }
        });
    });

    // Observe each element with the data-animation-fadeup attribute
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Trigger the scroll-based animation
window.addEventListener('DOMContentLoaded', animateOnScroll);


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



document.addEventListener('DOMContentLoaded', () => {
    function animateNumbers() {
        const citiesNumberElement = document.getElementById('cities-number');
        const clientsNumberElement = document.getElementById('clients-number');

        // Split the numbers into individual characters (for animation)
        splitAndAnimateNumber(citiesNumberElement);
        splitAndAnimateNumber(clientsNumberElement);
    }

    function splitAndAnimateNumber(element) {
        const numberText = element.textContent.trim();
        element.innerHTML = ''; // Clear the existing content

        // Split number text into individual characters and wrap them in span
        numberText.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.classList.add('number-char');
            span.textContent = char;

            // Apply animation delay to each number character
            span.style.animationDelay = `${index * 0.5}s`;

            element.appendChild(span);
        });
    }

    // Call the function to start the animation
    animateNumbers();
});
