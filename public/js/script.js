/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	window.onload = function () {
	    var page = $('html, body');
	    var scrollDownTrigger = $('.toDown');
	    var scrollTimeInMs = 800;

	    var tabs = document.querySelectorAll('.proposals .tab');

	    var header = document.querySelector('.header-wrapper');
	    var headerBtn = document.querySelector('.header-wrapper .btn');

	    var modalWindow = document.getElementById('modal-window');
	    var modalTriggerButtons = document.querySelectorAll('.modal-trigger');
	    var form = modalWindow.querySelector('form');
	    var formElements = form.querySelectorAll('.form-elem');
	    var captcha = document.getElementById('captcha');

	    //swap logo depends on device
	    var mobileLogo = header.querySelector('.mlogo-link');
	    var logo = header.querySelector('.logo-link');
	    var techs = document.querySelector('.techs');

	    if (window.innerWidth <= 650) {
	        logo.style.display = "none";
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
	                items: 1
	            },
	            768: {
	                margin: 28,
	                items: 2
	            },
	            1024: {
	                items: 3,
	                margin: 28
	            },
	            1440: {
	                items: 3,
	                margin: 28
	            }
	        }
	    });

	    //scroll animation
	    $(scrollDownTrigger).click(function () {
	        page.animate({
	            scrollTop: $($.attr(this, 'href')).offset().top
	        }, scrollTimeInMs);
	        return false;
	    });

	    //changing tabs and sliders
	    tabs.forEach(function (tab) {
	        tab.addEventListener('click', function (e) {
	            var tabPosition = 0;
	            var tabs = document.querySelectorAll('.proposals .tab');
	            var cards = document.querySelectorAll('.proposals .tab-content > div');

	            //Change active tabs and sliders
	            tabs.forEach(function (tab) {
	                if (tab.classList.contains('active')) {
	                    tab.classList.remove('active');
	                }
	            });

	            cards.forEach(function (card) {
	                if (card.classList.contains('active')) {
	                    card.classList.remove('active');
	                }
	            });

	            e.currentTarget.classList.add('active');

	            //Find out a current position of the tab 
	            for (var i = 0; i < tabs.length; i++) {
	                if (tabs[i].classList.contains('active')) {
	                    tabPosition = i;
	                }
	            }cards[tabPosition].classList.add('active');
	        });
	    });

	    //appearing of a header when have scrolled ... pxs
	    window.addEventListener('scroll', function () {
	        // let h1 = document.querySelectorAll('h1'),
	        //     h2 = document.querySelectorAll('h2'),
	        //     h3 = document.querySelectorAll('h3'),
	        //     h4 = document.querySelectorAll('h4');

	        // let text = [];

	        // h1.forEach(t => text.push(t));
	        // h2.forEach(t => text.push(t));
	        // h3.forEach(t => text.push(t));
	        // h4.forEach(t => text.push(t));

	        if (window.pageYOffset >= header.offsetHeight) {
	            header.classList.add('fixed');
	            headerBtn.classList.remove('btn-white');
	            headerBtn.classList.add('btn-blue');
	        } else {
	            header.classList.remove('fixed');
	            headerBtn.classList.remove('btn-blue');
	            headerBtn.classList.add('btn-white');
	        }

	        // text.forEach(t => {
	        //     console.log("Window " + (window.pageYOffset + document.documentElement.clientHeight) + " Elem " + t.innerHTML + " " + Math.abs(t.getBoundingClientRect().top));

	        //     if (window.pageYOffset + document.documentElement.clientHeight >= 
	        //         Math.abs(t.getBoundingClientRect().top) + (document.documentElement.clientHeight * 0.7))  {
	        //         t.classList.add('show');
	        //     } else {
	        //         t.classList.remove('show');
	        //     }
	        // });
	    });

	    window.scroll();

	    //a logic of a modal window

	    var isMobile = {
	        Android: function Android() {
	            return navigator.userAgent.match(/Android/i);
	        },
	        BlackBerry: function BlackBerry() {
	            return navigator.userAgent.match(/BlackBerry/i);
	        },
	        iOS: function iOS() {
	            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	        },
	        Opera: function Opera() {
	            return navigator.userAgent.match(/Opera Mini/i);
	        },
	        Windows: function Windows() {
	            return navigator.userAgent.match(/IEMobile/i);
	        },
	        any: function any() {
	            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	        }
	    };

	    modalTriggerButtons.forEach(function (mtb) {
	        mtb.addEventListener('click', function () {
	            var elemsToHide = document.querySelectorAll('.will-hidden');
	            elemsToHide.forEach(function (e) {
	                if (!e.classList.contains('modal')) e.classList.add('hidden');
	            });

	            document.getElementById('modal-window').classList.add('active');
	        });
	    });

	    modalWindow.addEventListener('click', function (e) {
	        if (e.target.classList.contains('close')) {
	            e.target.classList.add('clicked');

	            var elem = e.currentTarget;
	            var transitionTime = 200;

	            setTimeout(function (elem) {
	                e.target.classList.remove('clicked');

	                elem.classList.remove('active');

	                var elemsToHide = document.querySelectorAll('.will-hidden');
	                elemsToHide.forEach(function (e) {
	                    if (!e.classList.contains('modal')) {
	                        e.classList.remove('hidden');
	                    }
	                });

	                form.reset();

	                formElements.forEach(function (fe) {
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

	    formElements.forEach(function (fe) {
	        fe.addEventListener('focus', function () {
	            if (fe.classList.contains('error')) {
	                fe.classList.remove('error');
	                fe.value = '';

	                deactivateErrorBox(fe);
	            }
	            fe.nextElementSibling.classList.add('focused');
	        });

	        fe.addEventListener('blur', function () {
	            if (fe.value == "") {
	                fe.nextElementSibling.classList.remove('focused');
	            };
	        });
	    });

	    form.addEventListener('submit', function (e) {
	        e.preventDefault();

	        var isValid = true;

	        formElements.forEach(function (fe) {
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
	            if (!isMobile.any()) {
	                captcha.style.display = 'block';
	                captcha.classList.add('showed');
	            } else {
	                $.ajax({
	                    type: "post",
	                    url: './index.php',
	                    data: dataObj,
	                    success: function success() {
	                        location.href = location.origin + "/success.html";
	                    }
	                });
	            }
	        };
	    });

	    function deactivateErrorBox(elem) {
	        var errorBox = elem.parentElement.querySelector('.error-box');
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
	        var re = /^[+±]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/gi;
	        return value !== "" && !re.test(value);
	    }

	    function isInvalidEmail(value) {
	        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	        return !re.test(value);
	    }
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGIzODBlYzI4ZmI2ZTdkYWE1ZGIzIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIzODBlYzI4ZmI2ZTdkYWE1ZGIzIiwid2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2UgPSAkKCdodG1sLCBib2R5Jyk7XHJcbiAgICBjb25zdCBzY3JvbGxEb3duVHJpZ2dlciA9ICQoJy50b0Rvd24nKTtcclxuICAgIGNvbnN0IHNjcm9sbFRpbWVJbk1zID0gODAwO1xyXG5cclxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcG9zYWxzIC50YWInKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItd3JhcHBlciAuYnRuJyk7XHJcblxyXG4gICAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtd2luZG93Jyk7XHJcbiAgICBjb25zdCBtb2RhbFRyaWdnZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXRyaWdnZXInKTtcclxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWVsZW0nKTtcclxuICAgIGNvbnN0IGNhcHRjaGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FwdGNoYScpO1xyXG5cclxuICAgIC8vc3dhcCBsb2dvIGRlcGVuZHMgb24gZGV2aWNlXHJcbiAgICBsZXQgbW9iaWxlTG9nbyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcubWxvZ28tbGluaycpO1xyXG4gICAgbGV0IGxvZ28gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmxvZ28tbGluaycpO1xyXG4gICAgbGV0IHRlY2hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlY2hzJyk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDY1MCkge1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIG1vYmlsZUxvZ28uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB0ZWNocy5jbGFzc0xpc3QuYWRkKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAkKCcudG9vbHMgLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90c0VhY2g6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGVjaHMuY2xhc3NMaXN0LnJlbW92ZSgnb3dsLWNhcm91c2VsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbml0IG9mIGEgdGhpcmQgcGFydHkgbGlicmFyaWVzXHJcbiAgICAkKCcuaGVybyAub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgZG90c0VhY2g6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgcmV3aW5kOiB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVJbjogJ3NsaWRlSW5MZWZ0JyxcclxuICAgICAgICBjZW50ZXI6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wcm9wb3NhbHMgLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI4LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTQ0MDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2Nyb2xsIGFuaW1hdGlvblxyXG4gICAgJChzY3JvbGxEb3duVHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBhZ2UuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgIH0sIHNjcm9sbFRpbWVJbk1zKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NoYW5naW5nIHRhYnMgYW5kIHNsaWRlcnNcclxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YWJQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3Bvc2FscyAudGFiJyk7XHJcbiAgICAgICAgICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9wb3NhbHMgLnRhYi1jb250ZW50ID4gZGl2Jyk7XHJcblxyXG4gICAgICAgICAgICAvL0NoYW5nZSBhY3RpdmUgdGFicyBhbmQgc2xpZGVyc1xyXG4gICAgICAgICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgLy9GaW5kIG91dCBhIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHRhYiBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhYnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYlBvc2l0aW9uID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhcmRzW3RhYlBvc2l0aW9uXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vYXBwZWFyaW5nIG9mIGEgaGVhZGVyIHdoZW4gaGF2ZSBzY3JvbGxlZCAuLi4gcHhzXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIGxldCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gxJyksXHJcbiAgICAgICAgLy8gICAgIGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDInKSxcclxuICAgICAgICAvLyAgICAgaDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMycpLFxyXG4gICAgICAgIC8vICAgICBoNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2g0Jyk7XHJcblxyXG4gICAgICAgIC8vIGxldCB0ZXh0ID0gW107XHJcblxyXG4gICAgICAgIC8vIGgxLmZvckVhY2godCA9PiB0ZXh0LnB1c2godCkpO1xyXG4gICAgICAgIC8vIGgyLmZvckVhY2godCA9PiB0ZXh0LnB1c2godCkpO1xyXG4gICAgICAgIC8vIGgzLmZvckVhY2godCA9PiB0ZXh0LnB1c2godCkpO1xyXG4gICAgICAgIC8vIGg0LmZvckVhY2godCA9PiB0ZXh0LnB1c2godCkpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGhlYWRlci5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4td2hpdGUnKTtcclxuICAgICAgICAgICAgaGVhZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1ibHVlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYmx1ZScpO1xyXG4gICAgICAgICAgICBoZWFkZXJCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXdoaXRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0ZXh0LmZvckVhY2godCA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiV2luZG93IFwiICsgKHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgXCIgRWxlbSBcIiArIHQuaW5uZXJIVE1MICsgXCIgXCIgKyBNYXRoLmFicyh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkpO1xyXG5cclxuICAgICAgICAvLyAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPj0gXHJcbiAgICAgICAgLy8gICAgICAgICBNYXRoLmFicyh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkgKyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAqIDAuNykpICB7XHJcbiAgICAgICAgLy8gICAgICAgICB0LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuc2Nyb2xsKCk7XHJcblxyXG4gICAgLy9hIGxvZ2ljIG9mIGEgbW9kYWwgd2luZG93XHJcblxyXG4gICAgdmFyIGlzTW9iaWxlID0ge1xyXG4gICAgICAgIEFuZHJvaWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCbGFja0JlcnJ5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaU9TOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgT3BlcmE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL09wZXJhIE1pbmkvaSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBXaW5kb3dzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFueTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGlzTW9iaWxlLkFuZHJvaWQoKSB8fCBpc01vYmlsZS5CbGFja0JlcnJ5KCkgfHwgaXNNb2JpbGUuaU9TKCkgfHwgaXNNb2JpbGUuT3BlcmEoKSB8fCBpc01vYmlsZS5XaW5kb3dzKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbW9kYWxUcmlnZ2VyQnV0dG9ucy5mb3JFYWNoKG10YiA9PiB7XHJcbiAgICAgICAgbXRiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgIGxldCBlbGVtc1RvSGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aWxsLWhpZGRlbicpO1xyXG4gICAgICAgICAgIGVsZW1zVG9IaWRlLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgIGlmICghZS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykpXHJcbiAgICAgICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXdpbmRvdycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kYWxXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2l0aW9uVGltZSA9IDIwMDtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtc1RvSGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aWxsLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgZWxlbXNUb0hpZGUuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVhY3RpdmF0ZUVycm9yQm94KGZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGNhcHRjaGEuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRjaGEuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGNoYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSwgdHJhbnNpdGlvblRpbWUsIGVsZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZlID0+IHtcclxuICAgICAgICBmZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZlLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICAgZmUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGZlLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZUVycm9yQm94KGZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmUudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgZmUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9ybUVsZW1lbnRzLmZvckVhY2goZmUgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGZlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pc1ZhbGlkID0gc2V0RXJyb3JTdGF0ZShmZSwgXCJBIG5hbWUgaXMgZW1wdHkuXCIsIGlzRW1wdHlGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmoubmFtZSA9IGZlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclN0YXRlKGZlLCBcIkludmFsaWQgdHlwZSBvZiBlbWFpbC5cIiwgaXNJbnZhbGlkRW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGVtYWlsLlwiLCBpc0ludmFsaWRFbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9iai5lbWFpbCA9IGZlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclN0YXRlKGZlLCBcIkludmFsaWQgdHlwZSBvZiBhIHBob25lIG51bWJlci5cIiwgaXNJbnZhbGlkUGhvbmVOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiUGxlYXNlIGVudGVyIGEgY29ycmVjdCBlbWFpbC5cIiwgaXNJbnZhbGlkUGhvbmVOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmoucGhvbmUgPSBmZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21lc3NhZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzZXRFcnJvclN0YXRlKGZlLCBcIkEgbWVzc2FnZSBpcyBlbXB0eVwiLCBpc0VtcHR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiQSBtZXNzYWdlIGlzIGVtcHR5XCIsIGlzRW1wdHlGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9iai5tZXNzYWdlID0gZmUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUuYW55KCkpIHtcclxuICAgICAgICAgICAgICAgIGNhcHRjaGEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBjYXB0Y2hhLmNsYXNzTGlzdC5hZGQoJ3Nob3dlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2luZGV4LnBocCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YU9iaixcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4gKyBcIi9zdWNjZXNzLmh0bWxcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWFjdGl2YXRlRXJyb3JCb3goZWxlbSkge1xyXG4gICAgICAgIGxldCBlcnJvckJveCA9IGVsZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItYm94Jyk7XHJcbiAgICAgICAgZXJyb3JCb3guaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZXJyb3JCb3guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVFcnJvckJveChlbGVtLCBtc2cpIHtcclxuICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWJveCcpLmlubmVySFRNTCA9IG1zZztcclxuICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWJveCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEVycm9yU3RhdGUoZWxlbSwgbXNnLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjayhlbGVtLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlRXJyb3JCb3goZWxlbSwgbXNnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gaXNFbXB0eUZpZWxkKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHZhbHVlID09PSBcIlwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW52YWxpZFBob25lTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlID0gL15bK8KxXSpbKF17MCwxfVswLTldezEsM31bKV17MCwxfVstXFxzXFwuLzAtOV0qJC9naTtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IFwiXCIgJiYgIXJlLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW52YWxpZEVtYWlsKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XHJcbiAgICAgICAgcmV0dXJuICFyZS50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvanMvc2NyaXB0LmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQUhBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==