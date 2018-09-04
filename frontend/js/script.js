window.onload = () => {
    //init of a third party libraries
    $('.hero .owl-carousel').owlCarousel({
        dots: true,
        items: 1,
        dotsEach: true,
        autoplay: true,
        rewind: true,
        animateIn: 'slideInLeft',
        center: true
    });

    $('.proposals .owl-carousel').owlCarousel({
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                margin: 15,
                items: 1,
            },
            768: {
                margin: 28,
                items: 2,
            },
            1024: {
                items: 3,
                margin: 28,
            },
            1440: {
                items: 3,
                margin: 28
            },
        },
    });
    
    //scroll animation
    const page = $('html, body');
    const scrollDownTrigger = $('.toDown');
    const scrollTimeInMs = 800;
    $(scrollDownTrigger).click(function() {
        page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top,
        }, scrollTimeInMs);
        return false;
    });

    //changing tabs and sliders
    const tabs = document.querySelectorAll('.proposals .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            let tabPosition = 0;
            let tabs = document.querySelectorAll('.proposals .tab');
            let cards = document.querySelectorAll('.proposals .tab-content > div');

            //Change active tabs and sliders
            tabs.forEach(tab => {
                if (tab.classList.contains('active')) {
                    tab.classList.remove('active');
                }
            });

            cards.forEach(card => {
                if (card.classList.contains('active')) {
                    card.classList.remove('active');
                }
            });

            e.currentTarget.classList.add('active');
            
            //Find out a current position of the tab 
            for (let i = 0; i < tabs.length; i++)
                if (tabs[i].classList.contains('active')) {
                    tabPosition = i;
                }
            
            cards[tabPosition].classList.add('active');
        });
    });
    
    //appearing of a header when have scrolled ... pxs
    const header = document.querySelector('.header-wrapper');
    const headerBtn = document.querySelector('.header-wrapper .btn');
    const hero = document.querySelector('.hero-wrapper');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= header.offsetHeight) {
            header.classList.add('fixed');
            headerBtn.classList.remove('btn-white');
            headerBtn.classList.add('btn-blue');
        } else {
            header.classList.remove('fixed');
            headerBtn.classList.remove('btn-blue');
            headerBtn.classList.add('btn-white');
        }
    });


    //a logic of a modal window
    const modalWindow = document.getElementById('modal-window');
    const modalTriggerButtons = document.querySelectorAll('.modal-trigger');
    const form = modalWindow.querySelector('form');
    const formElements = form.querySelectorAll('.form-elem')

    modalTriggerButtons.forEach(mtb => {
        mtb.addEventListener('click', () => {
            document.getElementById('modal-window').classList.add('active');
        });
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            e.target.classList.add('clicked');
            
            let elem = e.currentTarget;
            let transitionTime = 500;

            setTimeout((elem) => {
                e.target.classList.remove('clicked');
                elem.classList.remove('active');

                form.reset();
                
                formElements.forEach(fe => {
                    fe.nextElementSibling.classList.remove('focused');
                });
            }, transitionTime, elem);
        }
    });

    formElements.forEach(fe => {
        fe.addEventListener('focus', () => {
            fe.nextElementSibling.classList.add('focused');
        });
        
        fe.addEventListener('blur', () => {
            if (fe.value == "") {
                fe.nextElementSibling.classList.remove('focused');
            };
        });
    });

    form.addEventListener('submit', () => {
        let isValid = true;
        formElements.forEach(fe => {
            switch (fe.name) {
                case 'name': {
                    if (fe.value === '') {
                        isValid = false;
                    }

                    fe.classList.add('error');
                    
                    fe.parentElement.querySelector('.error-box').innerHTML = "Empty name";
                    break;
                };
                case 'email': {
                    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    isValid = re.test(fe.value.toLowerCase());
                    fe.classList.add('error');

                    fe.parentElement.querySelector('.error-box').innerHTML = "Invalid email";
                    break;
                };
                case 'phone': {
                    if (fe.value === '') {
                        isValid = false;
                    }
                    
                    fe.classList.add('error');
                    fe.parentElement.querySelector('.error-box').innerHTML = "Empty phone";
                    break;
                };
                case 'message': {
                    if (fe.value === '') {
                        isValid = false;
                    }
                    fe.classList.add('error');
                    
                    fe.parentElement.querySelector('.error-box').innerHTML = "Empty message";
                    break;
                };
            };
        });
        return false;
    });

    //swap logo depends on device
    let mobileLogo =   header.querySelector('.logo-mobile');
    let logo = header.querySelector('.logo');

    if (window.innerWidth <= 650) {
        logo.style.display = "none";

        $('.tools .owl-carousel').owlCarousel({
            dots: true,
            dotsEach: true,
            items: 1,
            center: true,
            margin: 20   
        });
    } else {
        mobileLogo.style.display = "none";
    }
};