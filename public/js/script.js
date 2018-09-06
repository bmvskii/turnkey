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
	    document.querySelector('.preloader').classList.remove('active');

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
	    modalTriggerButtons.forEach(function (mtb) {
	        mtb.addEventListener('click', function () {
	            document.getElementById('modal-window').classList.add('active');
	        });
	    });

	    modalWindow.addEventListener('click', function (e) {
	        if (e.target.classList.contains('close')) {
	            e.target.classList.add('clicked');

	            var elem = e.currentTarget;
	            var transitionTime = 500;

	            setTimeout(function (elem) {
	                e.target.classList.remove('clicked');
	                elem.classList.remove('active');

	                form.reset();

	                formElements.forEach(function (fe) {
	                    fe.nextElementSibling.classList.remove('focused');
	                    if (fe.classList.contains('error')) {
	                        fe.classList.remove('error');
	                        deactivateErrorBox(fe);
	                    }
	                });
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
	                        isValid = setErrorState(fe, "A name is empty.", isEmptyField);
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
	                            isValid = setErrorState(fe, "Invalid type of a phone number.", isInvalidPhoneNumber);
	                        }

	                        dataObj.phone = fe.value;
	                        break;
	                    };
	                case 'message':
	                    {
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
	            captcha.style.display = 'block';
	            captcha.classList.add('showed');
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

	    function isEmptyField(value) {
	        return value === "";
	    }

	    function isInvalidPhoneNumber(value) {
	        var re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/gi;
	        return !re.test(value);
	    }

	    function isInvalidEmail(value) {
	        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	        return !re.test(value);
	    }
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDQ2Y2E4ZWU4NDljMzBjYjlmNDRiIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ2Y2E4ZWU4NDljMzBjYjlmNDRiIiwid2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIFxyXG4gICAgY29uc3QgcGFnZSA9ICQoJ2h0bWwsIGJvZHknKTtcclxuICAgIGNvbnN0IHNjcm9sbERvd25UcmlnZ2VyID0gJCgnLnRvRG93bicpO1xyXG4gICAgY29uc3Qgc2Nyb2xsVGltZUluTXMgPSA4MDA7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcG9zYWxzIC50YWInKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItd3JhcHBlciAuYnRuJyk7XHJcblxyXG4gICAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtd2luZG93Jyk7XHJcbiAgICBjb25zdCBtb2RhbFRyaWdnZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXRyaWdnZXInKTtcclxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWVsZW0nKTtcclxuICAgIGNvbnN0IGNhcHRjaGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FwdGNoYScpO1xyXG5cclxuICAgIC8vc3dhcCBsb2dvIGRlcGVuZHMgb24gZGV2aWNlXHJcbiAgICBsZXQgbW9iaWxlTG9nbyA9ICAgaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5tbG9nby1saW5rJyk7XHJcbiAgICBsZXQgbG9nbyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcubG9nby1saW5rJyk7XHJcbiAgICBsZXQgdGVjaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVjaHMnKTtcclxuXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNjUwKSB7XHJcbiAgICAgICAgbW9iaWxlTG9nby5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgICBcclxuICAgICAgICB0ZWNocy5jbGFzc0xpc3QuYWRkKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAkKCcudG9vbHMgLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90c0VhY2g6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMjAgICBcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9nby5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHRlY2hzLmNsYXNzTGlzdC5yZW1vdmUoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaW5pdCBvZiBhIHRoaXJkIHBhcnR5IGxpYnJhcmllc1xyXG4gICAgJCgnLmhlcm8gLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgIGRvdHNFYWNoOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIHJld2luZDogdHJ1ZSxcclxuICAgICAgICBhbmltYXRlSW46ICdzbGlkZUluTGVmdCcsXHJcbiAgICAgICAgY2VudGVyOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucHJvcG9zYWxzIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyOCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjgsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDE0NDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyOFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy9zY3JvbGwgYW5pbWF0aW9uXHJcbiAgICAkKHNjcm9sbERvd25UcmlnZ2VyKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcCxcclxuICAgICAgICB9LCBzY3JvbGxUaW1lSW5Ncyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jaGFuZ2luZyB0YWJzIGFuZCBzbGlkZXJzXHJcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGFiUG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICBsZXQgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9wb3NhbHMgLnRhYicpO1xyXG4gICAgICAgICAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcG9zYWxzIC50YWItY29udGVudCA+IGRpdicpO1xyXG5cclxuICAgICAgICAgICAgLy9DaGFuZ2UgYWN0aXZlIHRhYnMgYW5kIHNsaWRlcnNcclxuICAgICAgICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vRmluZCBvdXQgYSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSB0YWIgXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIGlmICh0YWJzW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJQb3NpdGlvbiA9IGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXJkc1t0YWJQb3NpdGlvbl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy9hcHBlYXJpbmcgb2YgYSBoZWFkZXIgd2hlbiBoYXZlIHNjcm9sbGVkIC4uLiBweHNcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDEnKSxcclxuICAgICAgICAvLyAgICAgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMicpLFxyXG4gICAgICAgIC8vICAgICBoMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gzJyksXHJcbiAgICAgICAgLy8gICAgIGg0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDQnKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHRleHQgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaDEuZm9yRWFjaCh0ID0+IHRleHQucHVzaCh0KSk7XHJcbiAgICAgICAgLy8gaDIuZm9yRWFjaCh0ID0+IHRleHQucHVzaCh0KSk7XHJcbiAgICAgICAgLy8gaDMuZm9yRWFjaCh0ID0+IHRleHQucHVzaCh0KSk7XHJcbiAgICAgICAgLy8gaDQuZm9yRWFjaCh0ID0+IHRleHQucHVzaCh0KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBoZWFkZXIub2Zmc2V0SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICBoZWFkZXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXdoaXRlJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tYmx1ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICBoZWFkZXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWJsdWUnKTtcclxuICAgICAgICAgICAgaGVhZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi13aGl0ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGV4dC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIldpbmRvdyBcIiArICh3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIFwiIEVsZW0gXCIgKyB0LmlubmVySFRNTCArIFwiIFwiICsgTWF0aC5hYnModC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID49IFxyXG4gICAgICAgIC8vICAgICAgICAgTWF0aC5hYnModC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApICsgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKiAwLjcpKSAge1xyXG4gICAgICAgIC8vICAgICAgICAgdC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LnNjcm9sbCgpO1xyXG5cclxuICAgIC8vYSBsb2dpYyBvZiBhIG1vZGFsIHdpbmRvd1xyXG4gICAgbW9kYWxUcmlnZ2VyQnV0dG9ucy5mb3JFYWNoKG10YiA9PiB7XHJcbiAgICAgICAgbXRiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtd2luZG93JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UnKSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZWxlbSA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgbGV0IHRyYW5zaXRpb25UaW1lID0gNTAwO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVhY3RpdmF0ZUVycm9yQm94KGZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgdHJhbnNpdGlvblRpbWUsIGVsZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZlID0+IHtcclxuICAgICAgICBmZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZlLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICAgZmUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGZlLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZUVycm9yQm94KGZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBmZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmUudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgZmUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9ybUVsZW1lbnRzLmZvckVhY2goZmUgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGZlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiQSBuYW1lIGlzIGVtcHR5LlwiLCBpc0VtcHR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFPYmoubmFtZSA9IGZlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGVtYWlsLlwiLCBpc0ludmFsaWRFbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBzZXRFcnJvclN0YXRlKGZlLCBcIkludmFsaWQgdHlwZSBvZiBlbWFpbC5cIiwgaXNJbnZhbGlkRW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhT2JqLmVtYWlsID0gZmUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncGhvbmUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGEgcGhvbmUgbnVtYmVyLlwiLCBpc0ludmFsaWRQaG9uZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGEgcGhvbmUgbnVtYmVyLlwiLCBpc0ludmFsaWRQaG9uZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFPYmoucGhvbmUgPSBmZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtZXNzYWdlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclN0YXRlKGZlLCBcIkEgbWVzc2FnZSBpcyBlbXB0eVwiLCBpc0VtcHR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBzZXRFcnJvclN0YXRlKGZlLCBcIkEgbWVzc2FnZSBpcyBlbXB0eVwiLCBpc0VtcHR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhT2JqLm1lc3NhZ2UgPSBmZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNhcHRjaGEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGNhcHRjaGEuY2xhc3NMaXN0LmFkZCgnc2hvd2VkJyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUVycm9yQm94KGVsZW0pIHtcclxuICAgICAgICBsZXQgZXJyb3JCb3ggPSBlbGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWJveCcpO1xyXG4gICAgICAgIGVycm9yQm94LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGVycm9yQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlRXJyb3JCb3goZWxlbSwgbXNnKSB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ib3gnKS5pbm5lckhUTUwgPSBtc2c7XHJcbiAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ib3gnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFcnJvclN0YXRlKGVsZW0sIG1zZywgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2soZWxlbS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBhY3RpdmF0ZUVycm9yQm94KGVsZW0sIG1zZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRW1wdHlGaWVsZCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ludmFsaWRQaG9uZU51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZSA9IC9eWytdKlsoXXswLDF9WzAtOV17MSwzfVspXXswLDF9Wy1cXHNcXC4vMC05XSokL2dpO1xyXG4gICAgICAgIHJldHVybiAhcmUudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJbnZhbGlkRW1haWwodmFsdWUpIHtcclxuICAgICAgICBsZXQgcmUgPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcclxuICAgICAgICByZXR1cm4gIXJlLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9qcy9zY3JpcHQuanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQUhBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=