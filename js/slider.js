const swiper=new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }

  ,

  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prew',
  }

  ,
});


