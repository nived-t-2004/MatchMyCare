let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {  // Capitalize "Swiper"
    loop: true,
    grabCursor: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
