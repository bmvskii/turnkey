document.addEventListener('DOMContentLoaded', () => {
  const page = $('html, body');
  const header = document.querySelector('.header__wrapper');

  const scrollDownTrigger = $('.nav a');
  const scrollTimeInMs = 800;

  //swap logo depends on device
  // if (window.innerWidth <= 650) {
  //   mobileLogo.style.display = "block";

  //   $('.tools .owl-carousel').owlCarousel({
  //     dots: true,
  //     dotsEach: true,
  //     items: 1,
  //     center: true,
  //     margin: 20
  //   });
  // } else {
  //   logo.style.display = "block";
  // }


  //init of a third party libraries
  // $('.hero .owl-carousel').owlCarousel({
  //   dots: true,
  //   items: 1,
  //   dotsEach: true,
  //   autoplay: true,
  //   rewind: true,
  //   animateIn: 'slideInLeft',
  //   center: true
  // });

  // $('.proposals .owl-carousel').owlCarousel({
  //   dots: true,
  //   responsiveClass: true,
  //   responsive: {
  //     0: {
  //       margin: 15,
  //       items: 1,
  //     },
  //     768: {
  //       margin: 28,
  //       items: 2,
  //     },
  //     1024: {
  //       items: 3,
  //       margin: 28,
  //     },
  //     1440: {
  //       items: 3,
  //       margin: 28
  //     },
  //   },
  // });

  $('.nav a, .header .button').click(function () {
    page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top,
    }, scrollTimeInMs);
    return false;
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= header.offsetHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});