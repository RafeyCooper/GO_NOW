AOS.init();
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 15,
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
            let activeSlide = document.querySelector('.swiper-slide-active');
            activeSlide.style.transform = 'scale(1)';
        },
        slideChangeTransitionStart: function () {
            let slides = document.querySelectorAll('.swiper-slide');
            slides.forEach(slide => {
                slide.style.transform = 'scale(0.8)';
            });
            let activeSlide = document.querySelector('.swiper-slide-active');
            activeSlide.style.transform = 'scale(1)';
        }
    }
});


$(document).ready(function() {
    $('.hamburger-icon-box').on('click', function() {
        $('.dropdown-menu-custom').stop(true, true).slideToggle(300); // Smooth toggle
    });
});
