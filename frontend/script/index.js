document.addEventListener('DOMContentLoaded', () => {
  const page = $('html, body');
  const header = document.querySelector('.header__wrapper');
  const scrollTimeInMs = 800;
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
    submitHandler: function (form) {
      form.submit();
    }
  };

  window.onresize = () => {
    const solutionsCards = $('.solutions .owl-carousel');
    const showcaseCards = $('.showcase .owl-carousel');
    const testimonialsCards = $('.testis .owl-carousel');

    if (window.innerWidth > 1024 || window.innerWidth <= 650) {
      solutionsCards.trigger('destroy.owl.carousel');
      showcaseCards.trigger('destroy.owl.carousel');
    } else if (window.innerWidth <= 1024) {
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

      testimonialsCards.owlCarousel({
        dots: true,
        items: 3,
        margin: 20,
        responsive: {
          0: {
            margin: 0,
            items: 1,
          },
          768: {
            items: 2,
            margin: 20,
          }
        }
      });
    }

    if (window.innerWidth > 1024) {
      testimonialsCards.trigger('destroy.owl.carousel');
    }

    if (window.innerWidth <= 650 ||
       (window.innerWidth <= 768 && window.innerHeight < 1024)) {
      setPaddingOnShowcaseSection();
    }
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= header.offsetHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const scrollToAnchor = function () {
    const isButton = $(this).hasClass('button');
    const additionalOffset = isButton ? document.querySelector('.header').offsetHeight : 0;

    page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top + additionalOffset,
    }, scrollTimeInMs);
    return false;
  };

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

  const setPaddingOnShowcaseSection = () => {
    const heroRightSectionOffset = document.querySelector('.hero__right').offsetTop;
    const heroFormHeight = document.querySelector('.hero .form').offsetHeight;
    const heroSectionHeight = document.querySelector('.hero').offsetHeight;
    const showcaseSection = document.querySelector('.showcase');

    const paddingTopValue = 100;
    const showcasePadding = heroFormHeight - (heroSectionHeight - heroRightSectionOffset) + paddingTopValue;

    showcaseSection.style.paddingTop = `${showcasePadding}px`;
  };

  $("#form").validate(options);
  $(".contact-us__form").validate(options);

  $('.nav a').click(scrollToAnchor);
  $('.header .button a').click(scrollToAnchor);
  $('.header .logo, .header .mobile-logo').click(scrollToAnchor);

  initAccordeons();

  window.dispatchEvent(new Event('resize'));
});