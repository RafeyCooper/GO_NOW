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
        console.log("hmaburger clicked !")
        $('.sidebar-custom').toggleClass('show');
        // $('.overlay').addClass('show');
        $('#nav-icon4').toggleClass('open');
    });

    // $('.close-btn').on('click', function () {
    //     $('.sidebar-custom').removeClass('show');
    //     $('.overlay').removeClass('show'); 
    // });

    // $('.overlay').on('click', function () {
    //     $('.sidebar-custom').removeClass('show');
    //     $(this).removeClass('show');
    // });
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
            // console.log(`${element.id} is at the top or moving towards the bottom!`);
        } else if (rect.top < 0) {
            // console.log(`${element.id} is above the viewport (top side)!`);
        } else if (rect.top > window.innerHeight) {
            resetCars()
            // console.log(`${element.id} is below the viewport (bottom side)!`);
        }
    });
}

window.addEventListener('scroll', checkToAnimateCars);

// Object to store the animation state for each element
let animationFlags = {
    citiesNumber: false,
    clientsNumber: false,
    captainNumber: false,
    employeesNumber: false,
    ridesCompleteNumber: false,
    fleetSizeNumber: false,
    contentCard1: false
};

function animateNumbersOnScroll() {
    // Select the elements you want to animate
    const elements = document.querySelectorAll('#cities-number, #clients-number, #captain-number, #employees-number, #ridescomplete-number, #fleetsize-number, #content-card-1, #content-card-2, #content-card-3, #content-card-4');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementId = element.id;

        if (rect.top <= window.innerHeight && rect.top >= 0) {
            if (!animationFlags[elementId]) {
                animationNumber(element); // Pass the element directly, no need for '#' here
                animationFlags[elementId] = true; // Mark the element as animated
            }
            // console.log(`${elementId} is at the top or moving towards the bottom!`);
        } else if (rect.top < 0) {
            // console.log(`${elementId} is above the viewport (top side)!`);
        } else if (rect.top > window.innerHeight) {
            // Using vanilla JS to find child spans
            animationFlags[elementId] = false; // Reset the flag for the element
            const spans = element.querySelectorAll("span");
            spans.forEach(span => {
                span.classList.remove("visible", "down");
                span.classList.add("hidden");
            });
            // console.log(`${elementId} is below the viewport (bottom side)!`);
        }
    });
}

window.addEventListener('scroll', animateNumbersOnScroll);

// The existing animationNumber function remains unchanged
function animationNumber(element) {
    const elementId = element.id;
    console.log(animationFlags[elementId]);

    const elements = $(element).children("span");

    function animateSingleElement(span, count) {
        if (count <= 0) {
            span.removeClass("hidden down").addClass("visible");
            return;
        }

        span.removeClass("hidden").addClass("down");

        setTimeout(function () {
            span.removeClass("down").addClass("hidden");

            setTimeout(function () {
                animateSingleElement(span, count - 1);
            }, 80); // Time for the hiding phase

        }, 80); // Time for the visible phase
    }

    // Loop through each span element and animate with increasing count
    elements.each(function (index, span) {
        const repeatCount = index + 1; // First element animates 1 time, second 2 times, etc.
        setTimeout(function () {
            animateSingleElement($(span), repeatCount);
        }, index * 40); // Delay each animation by 50ms per span
    });
}



function detectPlatform() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detect iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
    }

    // Detect Android
    if (/android/i.test(userAgent)) {
        return 'Android';
    }

    return 'Other';
}

window.onload = function () {
    var platform = detectPlatform();

    var button1 = document.getElementById('download_button_one');
    var button2 = document.getElementById('download_button_two');
    var button3 = document.getElementById('download_button_three');
    var captain_button_1 = document.getElementById('captain_download_button_one');
    var captain_button_2 = document.getElementById('captain_download_button_three');
    var captain_button_captain = document.getElementById('captain_button_captain');
    var home_captain_button = document.getElementById('home_captain_button');
    var home_captain_button_2 = document.getElementById('home_captain_button_2');

    if (platform === 'iOS') {
        if (button1) {
            button1.onclick = function () {
                window.location.href = 'https://apps.apple.com/sa/app/%D9%84%D9%8A%D8%AA%D8%B3-%D9%82%D9%88-%D9%85%D8%B4%D9%88%D8%A7%D8%B1-%D8%A3%D9%88%D9%81%D8%B1-%D9%84%D9%83%D9%84-%D9%8A%D9%88%D9%85/id6477761982?l=ar';
            };
        }
        if (button2) {
            button2.onclick = function () {
                window.location.href = 'https://apps.apple.com/sa/app/%D9%84%D9%8A%D8%AA%D8%B3-%D9%82%D9%88-%D9%85%D8%B4%D9%88%D8%A7%D8%B1-%D8%A3%D9%88%D9%81%D8%B1-%D9%84%D9%83%D9%84-%D9%8A%D9%88%D9%85/id6477761982?l=ar';
            };
        }
        if (button3) {
            button3.onclick = function () {
                window.location.href = 'https://apps.apple.com/sa/app/%D9%84%D9%8A%D8%AA%D8%B3-%D9%82%D9%88-%D9%85%D8%B4%D9%88%D8%A7%D8%B1-%D8%A3%D9%88%D9%81%D8%B1-%D9%84%D9%83%D9%84-%D9%8A%D9%88%D9%85/id6477761982?l=ar';
            };
        }

        // Captain Links

        if (captain_button_1) {
            captain_button_1.onclick = function () {
                window.location.href = 'https://apps.apple.com/sa/app/go-now-captain/id6477761421?l=ar';
            };
        }

        if (captain_button_2) {
            captain_button_2.onclick = function () {
                window.location.href = 'https://apps.apple.com/sa/app/go-now-captain/id6477761421?l=ar';
            };
        }

        if (home_captain_button) {
            home_captain_button.onclick = function () {
                window.location.href = 'https://apps.apple.com/sa/app/go-now-captain/id6477761421?l=ar';
            };
        }
        if (home_captain_button_2) {
            home_captain_button_2.onclick = function () {
                window.location.href = 'https://apps.apple.com/sa/app/go-now-captain/id6477761421?l=ar';
            };
        }
        if (captain_button_captain) {
            captain_button_captain.onclick = function () {
                window.location.href = 'https://apps.apple.com/sa/app/go-now-captain/id6477761421?l=ar';
            };
        }


    } else if (platform === 'Android') {
        if (button1) {
            button1.onclick = function () {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.let_s_go.client&pcampaignid=web_share';
            };
        }
        if (button2) {
            button2.onclick = function () {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.let_s_go.client&pcampaignid=web_share';
            };
        }
        if (button3) {
            button3.onclick = function () {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.let_s_go.client&pcampaignid=web_share';
            };
        }

        // Captain Links

        if (captain_button_1) {
            captain_button_1.onclick = function () {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.let_s_go.captain&pcampaignid=web_share';
            };
        }

        if (captain_button_2) {
            captain_button_2.onclick = function () {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.let_s_go.captain&pcampaignid=web_share';
            };
        }
        if (home_captain_button) {
            home_captain_button.onclick = function () {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.let_s_go.captain&pcampaignid=web_share';
            };
        }
        if (home_captain_button_2) {
            home_captain_button_2.onclick = function () {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.let_s_go.captain&pcampaignid=web_share';
            };
        }
        if (captain_button_captain) {
            captain_button_captain.onclick = function () {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.let_s_go.captain&pcampaignid=web_share';
            };
        }
    }
};


// document.addEventListener("DOMContentLoaded", function () {
//     const downloadButtons = document.getElementsByClassName('download_button_for_overlay');
//     const overlayButtonBox = document.getElementById('over_lay_button_box');

//     if (downloadButtons.length > 0 && overlayButtonBox) {
//         const downloadButton = downloadButtons[0];

//         const stickyNavbarHeight = 100;

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     overlayButtonBox.style.transform = 'translateY(100px)';
//                 } else {
//                     overlayButtonBox.style.transform = 'translateY(0px)';
//                 }
//             });
//         }, {
//             root: null,
//             rootMargin: `-${stickyNavbarHeight}px 0px 0px 0px`
//         });

//         observer.observe(downloadButton);
//     } else {
//         console.error("Either the download button or the overlay button was not found.");
//     }
// });




// document.addEventListener("DOMContentLoaded", function () {
//     const downloadButton = document.getElementById('download_button_one');
//     const overlayButtonBox = document.getElementById('over_lay_button_box');
//     const downloadSection = document.querySelector('.main-top-section');

//     if (downloadButton && overlayButtonBox && downloadSection) {
//         const stickyNavbarHeight = 0; // Adjust as per your navbar height

//         const buttonObserver = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     // Main download button is in view, hide the overlay button
//                     overlayButtonBox.style.transform = 'translateY(100px)';
//                 } else {
//                     // Main download button is out of view, show the overlay button if section is in view
//                     checkSectionInView();
//                 }
//             });
//         }, {
//             root: null,
//             threshold: 0
//         });

//         const sectionObserver = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     // Section is in view, check if button is out of view
//                     checkButtonOutOfView();
//                 } else {
//                     // Section is out of view, hide the overlay button
//                     overlayButtonBox.style.transform = 'translateY(100px)';
//                 }
//             });
//         }, {
//             root: null,
//             rootMargin: `-${stickyNavbarHeight}px 0px 0px 0px`,
//             threshold: 0
//         });

//         const checkButtonOutOfView = () => {
//             const buttonRect = downloadButton.getBoundingClientRect();
//             if (buttonRect.bottom < stickyNavbarHeight || buttonRect.top > window.innerHeight) {
//                 // Button is out of view, show overlay if section is still in view
//                 overlayButtonBox.style.transform = 'translateY(0px)';
//             } else {
//                 overlayButtonBox.style.transform = 'translateY(100px)';
//             }
//         };

//         const checkSectionInView = () => {
//             const sectionRect = downloadSection.getBoundingClientRect();
//             if (sectionRect.top < window.innerHeight && sectionRect.bottom > stickyNavbarHeight) {
//                 // Section is in view, check if button is out of view
//                 checkButtonOutOfView();
//             } else {
//                 overlayButtonBox.style.transform = 'translateY(100px)';
//             }
//         };

//         buttonObserver.observe(downloadButton);
//         sectionObserver.observe(downloadSection);
//     } else {
//         console.error("Required elements not found.");
//     }
// });


