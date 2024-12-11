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



function animateNumbersOnScroll() {
    // Select the elements you want to animate
    const elements = document.querySelectorAll('#cities-number, #clients-number');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger the animation when the element comes into view
                const elementId = entry.target.id;
                setTimeout(() => {
                    animationNumber(`#${elementId}`);
                }, 900);
                
                // Stop observing this element after the animation starts
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5  // Adjust this value to trigger when the element is 50% in view
    });

    // Observe each element
    elements.forEach(element => {
        observer.observe(element);
    });
}

window.addEventListener('DOMContentLoaded', animateNumbersOnScroll);

// The existing animationNumber function remains unchanged
function animationNumber(elementId) {
    const elements = $(elementId).children("span");

    function animateSingleElement(span, count) {
        if (count <= 0) {
            span.removeClass("hidden down").addClass("visible");
            return;
        }

        span.removeClass("hidden").addClass("down");

        setTimeout(function() {
            span.removeClass("down").addClass("hidden");

            setTimeout(function() {
                animateSingleElement(span, count - 1);
            }, 80); // Time for the hiding phase

        }, 80); // Time for the visible phase
    }

    // Loop through each span element and animate with increasing count
    elements.each(function(index, span) {
        const repeatCount = index + 1; // First element animates 1 time, second 2 times, etc.
        setTimeout(function() {
            animateSingleElement($(span), repeatCount);
        }, index * 40); // Delay each animation by 50ms per span
    });
}
