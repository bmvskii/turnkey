window.onload = () => {
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
    let techs = document.querySelector('.techs');

    window.onresize = () => {
        if (window.innerWidth <= 650) {
            techs.classList.add('owl-carousel');
            $('.tools .owl-carousel').owlCarousel({
                dots: true,
                dotsEach: true,
                items: 1,
                center: true,
                margin: 20
            });
        } else {
            $(techs).trigger('destroy.owl.carousel');
        }
    };

    //init of a third party libraries
    $('.hero .owl-carousel').owlCarousel({
        dots: true,
        items: 1,
        dotsEach: true,
        autoplay: true,
        animateIn: 'slideInRight',
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
    $(scrollDownTrigger).click(function () {
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

    window.scroll();

    //a logic of a modal window
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    modalTriggerButtons.forEach(mtb => {
        mtb.addEventListener('click', () => {
            // gtag_report_conversion();

            let elemsToHide = document.querySelectorAll('.will-hidden');
            elemsToHide.forEach(e => {
                if (!e.classList.contains('modal'))
                    e.classList.add('hidden');
            });

            document.getElementById('modal-window').classList.add('active');
        });
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            e.target.classList.add('clicked');

            let elem = e.currentTarget;
            let transitionTime = 200;

            setTimeout((elem) => {
                e.target.classList.remove('clicked');

                elem.classList.remove('active');

                let elemsToHide = document.querySelectorAll('.will-hidden');
                elemsToHide.forEach(e => {
                    if (!e.classList.contains('modal')) {
                        e.classList.remove('hidden');
                    }
                });

                form.reset();

                formElements.forEach(fe => {
                    fe.nextElementSibling.classList.remove('focused');
                    if (fe.classList.contains('error')) {
                        fe.classList.remove('error');
                        deactivateErrorBox(fe);
                    }
                });

                if (captcha.classList.contains('showed')) {
                    captcha.classList.remove('showed');
                    captcha.style.display = 'none';
                }

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

        //captcha deleted
        var dataObj = {};

        formElements.forEach(fe => {
            switch (fe.name) {
                case 'name':
                    {
                        //isValid = setErrorState(fe, "A name is empty.", isEmptyField);
                        dataObj.name = fe.value;
                        break;
                    };
                case 'email':
                    {
                        if (!isValid) {
                            setErrorState(fe, "Invalid type of email.", isInvalidEmail);
                        } else {
                            isValid = setErrorState(fe, "Invalid type of email.", isInvalidEmail);
                        }
                        dataObj.email = fe.value;
                        break;
                    };
                case 'phone':
                    {
                        if (!isValid) {
                            setErrorState(fe, "Invalid type of a phone number.", isInvalidPhoneNumber);
                        } else {
                            isValid = setErrorState(fe, "Please enter a correct email.", isInvalidPhoneNumber);
                        }
                        dataObj.phone = fe.value;
                        break;
                    };
                case 'message':
                    {
                        // if (!isValid) {
                        //     setErrorState(fe, "A message is empty", isEmptyField);
                        // } else {
                        //     isValid = setErrorState(fe, "A message is empty", isEmptyField);
                        // }
                        dataObj.message = fe.value;
                        break;
                    };
            };
        });

        if (isValid) {

            // if (!isMobile.any()) {
            //     captcha.style.display = 'block';
            //     captcha.classList.add('showed');
            // } else {

            $.ajax({
                type: "post",
                url: './index.php',
                data: dataObj,
                success: () => {
                    location.href = location.origin + "/success.html";
                }
            });

            // }
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

    // function isEmptyField(value) {
    //     return value === "";
    // }

    function isInvalidPhoneNumber(value) {
        let re = /^[+±]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/gi;
        return value !== "" && !re.test(value);
    }

    function isInvalidEmail(value) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !re.test(value);
    }

    // <!-- Event snippet for click_CTA conversion page
    // In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
    function gtag_report_conversion(url) {
        var callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-859179477/zFhtCLfR04kBENWT2JkD',
            'event_callback': callback
        });
        return false;
    }
};