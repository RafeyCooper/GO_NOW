document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function () {
        document.querySelectorAll('.box').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    });
});

const phoneInput = document.getElementById('phoneInput');

phoneInput.addEventListener('focus', function () {
    if (this.value === '') {
        this.value = 5;
    }
});

phoneInput.addEventListener('blur', function () {
    console.log('Input lost focus!');
    if (this.value === 5) {
        this.value = '';
    }
});

phoneInput.addEventListener('input', function () {
    const value = this.value;

    if (value.charAt(0) !== '5') {
        this.value = '5' + value.replace(/[^0-9]/g, '').slice(0, 8);
    } else {
        this.value = '5' + value.slice(1).replace(/[^0-9]/g, '').slice(0, 8);
    }

});

phoneInput.addEventListener('keydown', function (e) {
    if (this.selectionStart === 0 && this.selectionEnd === 0 && e.key === 'Backspace') {
        e.preventDefault();
    }
});

phoneInput.addEventListener('blur', function () {
    const value = this.value;

    if (!/^5\d{8}$/.test(value)) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
});

window.onload = function () {
    const initailinput = document.querySelector('#name');
    initailinput.focus();
    initailinput.click();
};


function submitForm() {
    const name = $("#name").val();
    const phone = $("#phoneInput").val();
    const selectedBoxValue = $(".box.selected").data("value");

    console.log("Name ", name);
    console.log("phone ", phone);
    console.log("Selected Box ", selectedBoxValue)
}

$("#formBox").on('submit', function (e) {
    e.preventDefault();
    submitForm();
});


// const swiperForm = new Swiper('.swiper-container-form', {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     centeredSlides: true,
//     pagination: {
//         el: '.swiper-pagination-form',
//         clickable: true,
//     },
//     loop: false,
//     grabCursor: true,
//     on: {
//         init: function () {
//             let slides = document.querySelectorAll('.swiper-slide');
//             slides.forEach(slide => {
//                 slide.style.transform = 'scale(0.8)';
//             });
//             let activeSlide = document.querySelectorAll('.swiper-slide-active');
//             activeSlide.forEach(slide => {
//                 slide.style.transform = 'scale(1)';
//             });
//         },
//         slideChangeTransitionStart: function () {
//             let slides = document.querySelectorAll('.swiper-slide');
//             slides.forEach(slide => {
//                 slide.style.transform = 'scale(0.8)';
//             });
//             let activeSlide = document.querySelectorAll('.swiper-slide-active');
//             activeSlide.forEach(slide => {
//                 slide.style.transform = 'scale(1)';
//             });
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelector('.boxes');
    const animation = document.querySelector('.animation');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Boxes section is in the viewport!");

                setTimeout(() => {
                    animation.classList.add('fade-out');
                    boxes.classList.add('no-overlay');
                }, 2000);

                setTimeout(() => {
                    animation.classList.add('no-display');
                    boxes.classList.add('no-display');
                }, 2300);

            } else {
                console.log("Boxes section is out of the viewport!");
            }
        });
    }, { threshold: 0.1 });

    observer.observe(boxes);
});
