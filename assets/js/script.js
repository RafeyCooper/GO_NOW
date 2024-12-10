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
    $('.hamburger-icon-box').on('click', function () {
        $('.sidebar-custom').addClass('show');
        $('.overlay').addClass('show');
    });

    $('.close-btn').on('click', function () {
        $('.sidebar-custom').removeClass('show');
        $('.overlay').removeClass('show'); 
    });

    $('.overlay').on('click', function () {
        $('.sidebar-custom').removeClass('show');
        $(this).removeClass('show');
    });
});


function animateCars() {
    const blackCar = document.querySelector('.car-black');
    const pinkCar = document.querySelector('.car-pink');
    const whiteCar = document.querySelector('.car-white');

    blackCar.classList.add('animated');

    setTimeout(() => {
        pinkCar.classList.add('animated');
    }, 100);

    setTimeout(() => {
        whiteCar.classList.add('animated');
    }, 200);
}

function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animation-fadeup]');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                const start = element.getAttribute('data-animation-fadeup') || '0px';
                const duration = element.getAttribute('data-animation-duration') || '1000ms';
                const delay = element.getAttribute('data-animation-delay') || '0ms';

                element.style.setProperty('--animation-fadeup', start);
                element.style.setProperty('--animation-duration', `${duration}ms`);
                
                setTimeout(() => {
                    element.classList.add('animated');
                }, delay);

                observer.unobserve(element);
            }
        });
    });

    // Observe each element with the data-animation-fadeup attribute
    elements.forEach(element => {
        observer.observe(element);
    });
}

window.addEventListener('DOMContentLoaded', animateOnScroll);


function checkScroll() {
    const carsSection = document.querySelector('.car-section');
    const position = carsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
        animateCars();
        window.removeEventListener('scroll', checkScroll);
    }
}

window.addEventListener('scroll', checkScroll);



// document.addEventListener('DOMContentLoaded', () => {
//     function animateNumbers() {
//         const citiesNumberElement = document.getElementById('cities-number');
//         const clientsNumberElement = document.getElementById('clients-number');

//         // Split the numbers into individual characters (for animation)
//         splitAndAnimateNumber(citiesNumberElement);
//         splitAndAnimateNumber(clientsNumberElement);
//     }

//     function splitAndAnimateNumber(element) {
//         const numberText = element.textContent.trim();
//         element.innerHTML = ''; // Clear the existing content

//         // Split number text into individual characters and wrap them in span
//         numberText.split('').forEach((char, index) => {
//             const span = document.createElement('span');
//             span.classList.add('number-char');
//             span.textContent = char;

//             // Apply animation delay to each number character
//             span.style.animationDelay = `${index * 0.5}s`;

//             element.appendChild(span);
//         });
//     }

//     // Call the function to start the animation
//     animateNumbers();
// });


const span = document.querySelector('.cities-number span');
if (span) {
    console.log("Element found, starting animation process.");

    let iterationCount = 0;
    const maxIterations = 4; // Number of times you want the dropIn animation to run
    const dropInDuration = 5000; // Duration of the dropIn animation (in ms)

    // Function to apply dropIn animation
    function applyDropInAnimation() {
        console.log("Applying dropIn animation...");
        span.style.animation = 'dropIn 5s ease-in-out'; // Apply the dropIn animation
    }

    // Function to apply finalDropIn animation
    function applyFinalDropInAnimation() {
        console.log("Switching to finalDropIn animation.");
        span.style.animation = 'finalDropIn 2s ease-in-out forwards'; // Apply final animation
    }

    // Run the animation cycle
    function runAnimationCycle() {
        if (iterationCount < maxIterations) {
            applyDropInAnimation(); // Apply dropIn animation
            iterationCount++;

            // After the animation ends, reset and apply dropIn again
            setTimeout(function() {
                span.style.animation = ''; // Remove animation
                runAnimationCycle(); // Run the animation again
            }, dropInDuration); // After 5 seconds (duration of dropIn)
        } else {
            // After 4 iterations, switch to finalDropIn
            applyFinalDropInAnimation();
        }
    }

    // Start the animation cycle
    runAnimationCycle();
} else {
    console.log("Element not found.");
}
