document.addEventListener('DOMContentLoaded', () => {
  const page = $('html, body');
  const header = document.querySelector('.header__wrapper');
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

  const scrollToAnchor = function () {
    page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top,
    }, scrollTimeInMs);
    return false;
  };

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

  $('.nav a').click(scrollToAnchor);
  $('.header .button a').click(scrollToAnchor);
  $('.header .logo, .header .mobile-logo').click(scrollToAnchor);

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
  window.dispatchEvent(new Event('resize'));

  const options = {
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      first_name: "required",
      last_name: "required",
      business_email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      phone_number: {
        required: true,
        minlength: 10,
        digits: true,
      },
      company_name: "required",
    },
    // Specify validation error messages
    messages: {
      first_name: "Please enter your firstname",
      last_name: "Please enter your lastname",
      phone_number: {
        required: "Please provide a phone-number",
        minlength: "Your password must be at least 10 characters long",
        digits: "Phone number should consist only from digits"
      },
      business_email: "Please enter a valid email address",
      company_name: "Please enter a company name",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  };

  $("#form").validate(options);
  $(".contact-us__form").validate(options);
});