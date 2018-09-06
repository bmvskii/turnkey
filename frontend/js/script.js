window.onload = () => {
    document.querySelector('.preloader').classList.remove('active');
    
    const page = $('html, body');
    const scrollDownTrigger = $('.toDown');
    const scrollTimeInMs = 800;
    
    const tabs = document.querySelectorAll('.proposals .tab');

    const header = document.querySelector('.header-wrapper');
    const headerBtn = document.querySelector('.header-wrapper .btn');

    const modalWindow = document.getElementById('modal-window');
    const modalTriggerButtons = document.querySelectorAll('.modal-trigger');
    const form = modalWindow.querySelector('form');
    const formElements = form.querySelectorAll('.form-elem');
    const captcha = document.getElementById('captcha');

    //swap logo depends on device
    let mobileLogo =   header.querySelector('.mlogo-link');
    let logo = header.querySelector('.logo-link');
    let techs = document.querySelector('.techs');

    if (window.innerWidth <= 650) {
        mobileLogo.style.display = "block";    
        techs.classList.add('owl-carousel');
        $('.tools .owl-carousel').owlCarousel({
            dots: true,
            dotsEach: true,
            items: 1,
            center: true,
            margin: 20   
        });
    } else {
        logo.style.display = "block";
        techs.classList.remove('owl-carousel');
    }

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
    $(scrollDownTrigger).click(function() {
        page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top,
        }, scrollTimeInMs);
        return false;
    });

    //changing tabs and sliders
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
                    if (fe.classList.contains('error')) {
                        fe.classList.remove('error');
                        deactivateErrorBox(fe);
                    }
                });
            }, transitionTime, elem);
        }
    });

    formElements.forEach(fe => {
        fe.addEventListener('focus', () => {
            if (fe.classList.contains('error')) {
                fe.classList.remove('error');
                fe.value = '';

                deactivateErrorBox(fe);
            }
            fe.nextElementSibling.classList.add('focused');

        });
        
        fe.addEventListener('blur', () => {
            if (fe.value == "") {
                fe.nextElementSibling.classList.remove('focused');
            };
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        formElements.forEach(fe => {
            switch (fe.name) {
                case 'name': {
                    isValid = setErrorState(fe, "A name is empty.", isEmptyField);
                    dataObj.name = fe.value;
                    break;
                };
                case 'email': {
                    if (!isValid) {
                       setErrorState(fe, "Invalid type of email.", isInvalidEmail);
                    } else {                    
                       isValid = setErrorState(fe, "Invalid type of email.", isInvalidEmail);
                    }
                    
                    dataObj.email = fe.value;
                    break;
                };
                case 'phone': {
                    if (!isValid) {
                        setErrorState(fe, "Invalid type of a phone number.", isInvalidPhoneNumber);
                    } else {
                        isValid = setErrorState(fe, "Invalid type of a phone number.", isInvalidPhoneNumber);
                    }
                    
                    dataObj.phone = fe.value;
                    break;
                };
                case 'message': {
                    if (!isValid) {
                        setErrorState(fe, "A message is empty", isEmptyField);
                    } else {
                        isValid = setErrorState(fe, "A message is empty", isEmptyField);
                    }
                    
                    dataObj.message = fe.value;
                    break;
                };
            };
        });

        if (isValid) {
            captcha.hidden = false;
            captcha.classList.add('showed');
        };
    });
        
    function deactivateErrorBox(elem) {
        let errorBox = elem.parentElement.querySelector('.error-box');
        errorBox.innerHTML = '';
        errorBox.classList.remove('active');
    }

    function activateErrorBox(elem, msg) {
        elem.parentElement.querySelector('.error-box').innerHTML = msg;
        elem.parentElement.querySelector('.error-box').classList.add('active');
    }

    function setErrorState(elem, msg, callback) {
        if (callback(elem.value)) {
            elem.classList.add('error');
            activateErrorBox(elem, msg);
            return false;
        };
        return true;
    }

    function isEmptyField(value) {
        return value === "";
    }

    function isInvalidPhoneNumber(value) {
        let re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/gi;
        return !re.test(value);
    }

    function isInvalidEmail(value) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !re.test(value);
    }
};