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
