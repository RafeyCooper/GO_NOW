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

    // Add animation classes to cars with delays
    blackCar.classList.add('animated');

    setTimeout(() => {
        pinkCar.classList.add('animated');
    }, 100);

    setTimeout(() => {
        whiteCar.classList.add('animated');
    }, 200);
}

function resetCars() {
    const blackCar = document.querySelector('.car-black');
    const pinkCar = document.querySelector('.car-pink');
    const whiteCar = document.querySelector('.car-white');

    // Remove animation classes to reset cars for re-animation
    blackCar.classList.remove('animated');
    pinkCar.classList.remove('animated');
    whiteCar.classList.remove('animated');
}

function observeCarsSection() {
    const carsSection = document.querySelector('.car-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation when cars section is in view
                animateCars();
            } else {
                // Reset animations when cars section goes out of view
                resetCars();
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is in view
    });

    // Observe the cars section
    observer.observe(carsSection);
}

window.addEventListener('DOMContentLoaded', observeCarsSection);





function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animation-fadeup]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            if (entry.isIntersecting) {
                // Get animation properties from the element's data attributes
                const start = element.getAttribute('data-animation-fadeup') || '0px';
                const duration = element.getAttribute('data-animation-duration') || '1000ms';
                const delay = element.getAttribute('data-animation-delay') || '0ms';

                // Apply the custom CSS properties for the animation
                element.style.setProperty('--animation-fadeup', start);
                element.style.setProperty('--animation-duration', `${duration}ms`);

                // Trigger the animation after the specified delay
                setTimeout(() => {
                    element.classList.add('animated');
                }, parseInt(delay));  // Ensure delay is parsed as an integer

            } else {
                // Reset the element to allow re-animation when it scrolls back into view
                element.classList.remove('animated');
            }
        });
    }, {
        threshold: 0.5 // Adjust this to trigger the animation earlier or later
    });

    // Observe each element with the data-animation-fadeup attribute
    elements.forEach(element => {
        observer.observe(element);
    });
}

window.addEventListener('DOMContentLoaded', animateOnScroll);



function animateNumbersOnScroll() {
    // Select the elements you want to animate
    const elements = document.querySelectorAll('#cities-number, #clients-number, #captain-number, #employees-number, #ridescomplete-number, #fleetsize-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reset the spans' classes for re-animation
                const elementId = entry.target.id;
                const spans = $(`#${elementId}`).children("span");
                spans.removeClass("visible down").addClass("hidden");

                // Trigger the animation when the element comes into view
                setTimeout(() => {
                    animationNumber(`#${elementId}`);
                }, 900);
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
