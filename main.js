// scrollAnchor();      // скрол у якоря
chechURL();
headerFidex();// фиксация header при скроле
slideReviews();
sliderPost();
slideSpecialists();
rating();            // рейтинг компании
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

const burger = document.getElementsByClassName("header__burger_js")[0];
const menuModal = document.getElementsByClassName("menu-mobile")[0];
const lineBurge1 = document.getElementsByClassName("header__burger-line")[0];
const lineBurge2 = document.getElementsByClassName("header__burger-line")[1];
const lineBurge3 = document.getElementsByClassName("header__burger-line")[2];
const lineBurge4 = document.getElementsByClassName("header__burger-line")[3];

// header__burger-line_active

burger.onclick = function () {
   menuModal.classList.toggle("menu-mobile-open-js");
   document.body.classList.toggle("open-menu")
   lineBurge1.classList.toggle("header__burger-line_active");
   lineBurge2.classList.toggle("header__burger-line_active");
   lineBurge3.classList.toggle("header__burger-line_active");
   lineBurge4.classList.toggle("header__burger-line_active");
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
         removeStar();
         targetStar(quantity);
      }
   }
   star_2.onmouseover = function () {
      if (!checkClickStars) {
         quantity = 2;
         removeStar();
         targetStar(quantity);
      }
   }
   star_3.onmouseover = function () {
      if (!checkClickStars) {
         quantity = 3;
         removeStar();
         targetStar(quantity);
      }
   }
   star_4.onmouseover = function () {
      if (!checkClickStars) {
         quantity = 4;
         removeStar();
         targetStar(quantity);
      }
   }
   star_5.onmouseover = function () {
      if (!checkClickStars) {
         quantity = 5;
         removeStar();
         targetStar(quantity);
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





function headerFidex() {
   const header = document.getElementsByClassName("header_js")[0];
   window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 180) {
         header.classList.add("header_fixed");
      }
      else {
         header.classList.remove("header_fixed");
      }

   })
   152
}


function chechURL() {
   const linkHeader = document.querySelectorAll(".header__link_js");
   const linkMobileMenu = document.querySelectorAll(".menu-mobile__link_js");
   const linkFooter = document.querySelectorAll(".footer__link_js");

   function colorlinkActive(number) {
      linkHeader[number].classList.add("link_nav_active");
      linkMobileMenu[number].classList.add("link_nav_active");
      linkFooter[number].classList.add("link_nav_active");
   }

   if (window.location.pathname == "/who-we-are.html") colorlinkActive(0);
   else if (window.location.pathname == "/what-we-do.html") colorlinkActive(1);
   else if (window.location.pathname == "/patenting-process.html") colorlinkActive(2);
   else if (window.location.pathname == "/fee-structure.html") colorlinkActive(4);
   else if (window.location.pathname == "/contact.html") colorlinkActive(5);
   else if (window.location.pathname == "/blog.html") colorlinkActive(6);
}




function preloader(params) {
   const preloader = document.getElementsByClassName("preloader_js")[0]
   window.onload = () => {
      console.log(preloader);
      preloader.style.display = "none"
   }
}
preloader()