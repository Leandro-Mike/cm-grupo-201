console.log("hola");


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: { // tablet
      slidesPerView: 2,
       slidesPerGroup: 3,  
      spaceBetween: 15,
    },
    1024: { // desktop
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },


   autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  

  // If we need pagination

  

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  
});