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

function resetCars() {
    const blackCar = document.querySelector('.car-black');
    const pinkCar = document.querySelector('.car-pink');
    const whiteCar = document.querySelector('.car-white');

    blackCar.classList.remove('animated');
    pinkCar.classList.remove('animated');
    whiteCar.classList.remove('animated');
}

function checkToAnimateCars() {
    const elements = document.querySelectorAll('.car-section');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.top >= 0) {
            animateCars()
            console.log(`${element.id} is at the top or moving towards the bottom!`);
        } else if (rect.top < 0) {
            console.log(`${element.id} is above the viewport (top side)!`);
        } else if (rect.top > window.innerHeight) {
            resetCars()
            console.log(`${element.id} is below the viewport (bottom side)!`);
        }
    });
}

window.addEventListener('scroll', checkToAnimateCars);

var alreadyAnimated = false;

function animateNumbersOnScroll() {
    // Select the elements you want to animate
    const elements = document.querySelectorAll('#cities-number, #clients-number, #captain-number, #employees-number, #ridescomplete-number, #fleetsize-number');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.top >= 0) {
            animationNumber(element); // Pass the element directly, no need for '#' here
            setTimeout(() => {
                alreadyAnimated = true;
            }, 500);
            console.log(`${element.id} is at the top or moving towards the bottom!`);
        } else if (rect.top < 0) {
            
            console.log(`${element.id} is above the viewport (top side)!`);
        } else if (rect.top > window.innerHeight) {
            // Using vanilla JS to find child spans
            alreadyAnimated = false;
            const spans = element.querySelectorAll("span");
            spans.forEach(span => {
                span.classList.remove("visible", "down");
                span.classList.add("hidden");
            });
            console.log(`${element.id} is below the viewport (bottom side)!`);
        }
    });
}



window.addEventListener('scroll', animateNumbersOnScroll);

// The existing animationNumber function remains unchanged
function animationNumber(elementId) {
    console.log(alreadyAnimated)
    if(!alreadyAnimated){
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
}


