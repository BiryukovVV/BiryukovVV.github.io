// scrollAnchor();      // скрол у якоря
rating();            // рейтинг компании
slideReviews();
sliderPost()
slideSpecialists()

function slideReviews() {
    var swiper = new Swiper('.swiper-container-reviews', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination-reviews',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}



function sliderPost() {
    var swiper = new Swiper('.swiper-container-post', {
        pagination: {
            el: '.swiper-pagination-post',
        },
    });
}

function slideSpecialists() {
    var swiper = new Swiper('.about-specialists__swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination-specialists',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}














function scrollAnchor() {
    let anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

var hamburger = document.getElementsByClassName("hamburger")[0],
    menuModal = document.getElementsByClassName("menu-mobile")[0];

hamburger.onclick = function () {
    menuModal.classList.toggle("menu-mobile-open-js");
    document.body.classList.toggle("open-menu")
}

function rating() {
    var star,
        quantity = 0,
        checkClickStars = false,
        star_1 = document.getElementsByClassName("footer__star")[0],
        star_2 = document.getElementsByClassName("footer__star")[1],
        star_3 = document.getElementsByClassName("footer__star")[2],
        star_4 = document.getElementsByClassName("footer__star")[3],
        star_5 = document.getElementsByClassName("footer__star")[4];



    star_1.onclick = function () {
        if (!checkClickStars) {
            quantity = 1;
            checkClickStars = true;
            ratingCompany(quantity);
        }
    }
    star_2.onclick = function () {
        if (!checkClickStars) {
            quantity = 2;
            checkClickStars = true;
            ratingCompany(quantity);
        }
    }
    star_3.onclick = function () {
        if (!checkClickStars) {
            quantity = 3;
            checkClickStars = true;
            ratingCompany(quantity);
        }
    }
    star_4.onclick = function () {
        if (!checkClickStars) {
            quantity = 4;
            checkClickStars = true;
            ratingCompany(quantity);
        }
    }
    star_5.onclick = function () {
        if (!checkClickStars) {
            quantity = 5;
            checkClickStars = true;
            ratingCompany(quantity);
        }
    }

    function ratingCompany(quantity) {
        for (var i = 0; i < quantity; i++) {
            star = document.getElementsByClassName("footer__star")[i];
            if (!star.classList.contains("footer__star-activ-js")) {
                star.classList.add("footer__star-activ-js");
            }
        }
    }

    star_1.onmouseover = function () {
        if (!checkClickStars) {
            quantity = 1;
            removeStar()
            targetStar(quantity)
        }
    }
    star_2.onmouseover = function () {
        if (!checkClickStars) {
            quantity = 2;
            removeStar()
            targetStar(quantity)
        }
    }
    star_3.onmouseover = function () {
        if (!checkClickStars) {
            quantity = 3;
            removeStar()
            targetStar(quantity)
        }
    }
    star_4.onmouseover = function () {
        if (!checkClickStars) {
            quantity = 4;
            removeStar()
            targetStar(quantity)
        }
    }
    star_5.onmouseover = function () {
        if (!checkClickStars) {
            quantity = 5;
            removeStar()
            targetStar(quantity)
        }
    }

    function targetStar() {
        for (var i = 0; i < quantity; i++) {
            star = document.getElementsByClassName("footer__star")[i];
            if (!star.classList.contains("footer__star-activ-js")) {
                star.classList.add("footer__star-activ-js");
            }
        }
    }

    function removeStar() {
        for (var i = 0; i < 5; i++) {
            star = document.getElementsByClassName("footer__star")[i];
            if (!!star.classList.contains("footer__star-activ-js")) {
                star.classList.remove("footer__star-activ-js");
            }
        }
    }
}



