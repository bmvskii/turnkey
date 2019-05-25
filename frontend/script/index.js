document.addEventListener('DOMContentLoaded', () => {
  const page = $('html, body');
  const header = document.querySelector('.header__wrapper');

  const scrollDownTrigger = $('.nav a');
  const scrollTimeInMs = 800;

  window.onresize = () => {
    if (window.innerWidth > 1024 || window.innerWidth <= 650) {
      $('.solutions .owl-carousel').trigger('destroy.owl.carousel');
      $('.showcase .owl-carousel').trigger('destroy.owl.carousel');
    } else {
      if (window.innerWidth <= 1024) {
        const solutionsCards = $('.solutions .owl-carousel');
        const showcaseCards = $('.showcase .owl-carousel');

        solutionsCards.owlCarousel({
          dots: true,
          items: 2,
          margin: 20,
        });

        showcaseCards.owlCarousel({
          dots: true,
          items: 2,
          margin: 20,
        });
      }
    }
  }

  window.dispatchEvent(new Event('resize'));

  //init of a third party libraries
  $('.testis .owl-carousel').owlCarousel({
    dots: true,
    items: 3,
    margin: 20,
    autoplay: true,
    rewind: true,
    animateIn: 'slideInLeft',
    responsive: {
      0: {
        margin: 0,
        items: 1,
      },
      768: {
        items: 2,
        margin: 20,
      },
      1200: {
        items: 3,
        margin: 20
      },
    },
  });

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

  const initAccordeons = () => {
    const cards = document.querySelectorAll('.solutions .card');

    cards.forEach(card => card.addEventListener('click', (e) => {
      const { target, currentTarget } = e;

      if (target.classList.contains('card__button--toggle')) {
        currentTarget.classList.toggle('hidden');
        target.innerHTML === 'Learn more'
          ? target.innerHTML = 'Hide'
          : target.innerHTML = 'Learn more';
      }
    }));
  };

  initAccordeons();
});