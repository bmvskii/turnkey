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
	    var techs = document.querySelector('.techs');

	    window.onresize = function () {
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
	        animateIn: 'slideInRight'
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
	        if (window.pageYOffset >= header.offsetHeight) {
	            header.classList.add('fixed');
	            headerBtn.classList.remove('btn-white');
	            headerBtn.classList.add('btn-blue');
	        } else {
	            header.classList.remove('fixed');
	            headerBtn.classList.remove('btn-blue');
	            headerBtn.classList.add('btn-white');
	        }

	        var hiddenText = [];
	        hiddenText.push(document.querySelectorAll('h1'));
	        hiddenText.push(document.querySelectorAll('h2'));
	        hiddenText.push(document.querySelectorAll('p'));

	        hiddenText.forEach(function (ht) {
	            ht.forEach(function (elem) {
	                if (!elem.classList.contains('s')) {
	                    if (window.pageYOffset + document.documentElement.clientHeight * 0.5 >= elem.offsetTop) {
	                        elem.classList.add('s');
	                    }
	                }
	            });
	        });
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

	            gtag_report_conversion();

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

	        //captcha deleted
	        var dataObj = {};

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

	            // if (!isMobile.any()) {
	            //     captcha.style.display = 'block';
	            //     captcha.classList.add('showed');
	            // } else {

	            $.ajax({
	                type: "post",
	                url: './index.php',
	                data: dataObj,
	                success: function success() {
	                    location.href = location.origin + "/success.html";
	                }
	            });

	            // }
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

	    function gtag_report_conversion(url) {
	        var callback = function callback() {
	            if (typeof url != 'undefined') {
	                window.location = url;
	            }
	        };
	        gtag('event', 'Click', { 'event_category': 'Form' });
	        gtag('event', 'conversion', {
	            'send_to': 'AW-859179477/zFhtCLfR04kBENWT2JkD',
	            'event_callback': callback
	        });
	        return false;
	    }
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDE1YTZkYWExNWM5ODYyYjI5YTI0Iiwid2VicGFjazovLy9mcm9udGVuZC9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE1YTZkYWExNWM5ODYyYjI5YTI0Iiwid2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2UgPSAkKCdodG1sLCBib2R5Jyk7XHJcbiAgICBjb25zdCBzY3JvbGxEb3duVHJpZ2dlciA9ICQoJy50b0Rvd24nKTtcclxuICAgIGNvbnN0IHNjcm9sbFRpbWVJbk1zID0gODAwO1xyXG5cclxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcG9zYWxzIC50YWInKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItd3JhcHBlciAuYnRuJyk7XHJcblxyXG4gICAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtd2luZG93Jyk7XHJcbiAgICBjb25zdCBtb2RhbFRyaWdnZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXRyaWdnZXInKTtcclxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWVsZW0nKTtcclxuICAgIGNvbnN0IGNhcHRjaGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FwdGNoYScpO1xyXG5cclxuICAgIC8vc3dhcCBsb2dvIGRlcGVuZHMgb24gZGV2aWNlXHJcbiAgICBsZXQgdGVjaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVjaHMnKTtcclxuXHJcbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDY1MCkge1xyXG4gICAgICAgICAgICB0ZWNocy5jbGFzc0xpc3QuYWRkKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgJCgnLnRvb2xzIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZG90c0VhY2g6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0ZWNocykudHJpZ2dlcignZGVzdHJveS5vd2wuY2Fyb3VzZWwnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vaW5pdCBvZiBhIHRoaXJkIHBhcnR5IGxpYnJhcmllc1xyXG4gICAgJCgnLmhlcm8gLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgIGRvdHNFYWNoOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVJbjogJ3NsaWRlSW5SaWdodCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucHJvcG9zYWxzIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyOCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjgsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDE0NDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyOFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3Njcm9sbCBhbmltYXRpb25cclxuICAgICQoc2Nyb2xsRG93blRyaWdnZXIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcCxcclxuICAgICAgICB9LCBzY3JvbGxUaW1lSW5Ncyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jaGFuZ2luZyB0YWJzIGFuZCBzbGlkZXJzXHJcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGFiUG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICBsZXQgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9wb3NhbHMgLnRhYicpO1xyXG4gICAgICAgICAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcG9zYWxzIC50YWItY29udGVudCA+IGRpdicpO1xyXG5cclxuICAgICAgICAgICAgLy9DaGFuZ2UgYWN0aXZlIHRhYnMgYW5kIHNsaWRlcnNcclxuICAgICAgICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vRmluZCBvdXQgYSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSB0YWIgXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIGlmICh0YWJzW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJQb3NpdGlvbiA9IGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXJkc1t0YWJQb3NpdGlvbl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2FwcGVhcmluZyBvZiBhIGhlYWRlciB3aGVuIGhhdmUgc2Nyb2xsZWQgLi4uIHB4c1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGhlYWRlci5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4td2hpdGUnKTtcclxuICAgICAgICAgICAgaGVhZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1ibHVlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYmx1ZScpO1xyXG4gICAgICAgICAgICBoZWFkZXJCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXdoaXRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGlkZGVuVGV4dCA9IFtdO1xyXG4gICAgICAgIGhpZGRlblRleHQucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMScpKTtcclxuICAgICAgICBoaWRkZW5UZXh0LnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDInKSk7XHJcbiAgICAgICAgaGlkZGVuVGV4dC5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKSk7XHJcblxyXG4gICAgICAgIGhpZGRlblRleHQuZm9yRWFjaChodCA9PiB7XHJcbiAgICAgICAgICAgIGh0LmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICsgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKiAwLjUpID49IGVsZW0ub2Zmc2V0VG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgncycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuc2Nyb2xsKCk7XHJcblxyXG4gICAgLy9hIGxvZ2ljIG9mIGEgbW9kYWwgd2luZG93XHJcbiAgICB2YXIgaXNNb2JpbGUgPSB7XHJcbiAgICAgICAgQW5kcm9pZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJsYWNrQmVycnk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpT1M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBPcGVyYTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFdpbmRvd3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW55OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoaXNNb2JpbGUuQW5kcm9pZCgpIHx8IGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fCBpc01vYmlsZS5pT1MoKSB8fCBpc01vYmlsZS5PcGVyYSgpIHx8IGlzTW9iaWxlLldpbmRvd3MoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBtb2RhbFRyaWdnZXJCdXR0b25zLmZvckVhY2gobXRiID0+IHtcclxuICAgICAgICBtdGIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBndGFnX3JlcG9ydF9jb252ZXJzaW9uKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbXNUb0hpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2lsbC1oaWRkZW4nKTtcclxuICAgICAgICAgICAgZWxlbXNUb0hpZGUuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykpXHJcbiAgICAgICAgICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtd2luZG93JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UnKSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbSA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgbGV0IHRyYW5zaXRpb25UaW1lID0gMjAwO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1zVG9IaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndpbGwtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtc1RvSGlkZS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybUVsZW1lbnRzLmZvckVhY2goZmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZS5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWFjdGl2YXRlRXJyb3JCb3goZmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYXB0Y2hhLmNsYXNzTGlzdC5jb250YWlucygnc2hvd2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0Y2hhLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRjaGEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIHRyYW5zaXRpb25UaW1lLCBlbGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3JtRWxlbWVudHMuZm9yRWFjaChmZSA9PiB7XHJcbiAgICAgICAgZmUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgICAgIGZlLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBmZS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlYWN0aXZhdGVFcnJvckJveChmZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZmUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZlLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGZlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vY2FwdGNoYSBkZWxldGVkXHJcbiAgICAgICAgdmFyIGRhdGFPYmogPSB7fTtcclxuXHJcbiAgICAgICAgZm9ybUVsZW1lbnRzLmZvckVhY2goZmUgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGZlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pc1ZhbGlkID0gc2V0RXJyb3JTdGF0ZShmZSwgXCJBIG5hbWUgaXMgZW1wdHkuXCIsIGlzRW1wdHlGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmoubmFtZSA9IGZlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclN0YXRlKGZlLCBcIkludmFsaWQgdHlwZSBvZiBlbWFpbC5cIiwgaXNJbnZhbGlkRW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGVtYWlsLlwiLCBpc0ludmFsaWRFbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9iai5lbWFpbCA9IGZlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclN0YXRlKGZlLCBcIkludmFsaWQgdHlwZSBvZiBhIHBob25lIG51bWJlci5cIiwgaXNJbnZhbGlkUGhvbmVOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiUGxlYXNlIGVudGVyIGEgY29ycmVjdCBlbWFpbC5cIiwgaXNJbnZhbGlkUGhvbmVOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmoucGhvbmUgPSBmZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21lc3NhZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzZXRFcnJvclN0YXRlKGZlLCBcIkEgbWVzc2FnZSBpcyBlbXB0eVwiLCBpc0VtcHR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiQSBtZXNzYWdlIGlzIGVtcHR5XCIsIGlzRW1wdHlGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9iai5tZXNzYWdlID0gZmUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoIWlzTW9iaWxlLmFueSgpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjYXB0Y2hhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAvLyAgICAgY2FwdGNoYS5jbGFzc0xpc3QuYWRkKCdzaG93ZWQnKTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgIHVybDogJy4vaW5kZXgucGhwJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFPYmosXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbiArIFwiL3N1Y2Nlc3MuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUVycm9yQm94KGVsZW0pIHtcclxuICAgICAgICBsZXQgZXJyb3JCb3ggPSBlbGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWJveCcpO1xyXG4gICAgICAgIGVycm9yQm94LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGVycm9yQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlRXJyb3JCb3goZWxlbSwgbXNnKSB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ib3gnKS5pbm5lckhUTUwgPSBtc2c7XHJcbiAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ib3gnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFcnJvclN0YXRlKGVsZW0sIG1zZywgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2soZWxlbS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBhY3RpdmF0ZUVycm9yQm94KGVsZW0sIG1zZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGlzRW1wdHlGaWVsZCh2YWx1ZSkge1xyXG4gICAgLy8gICAgIHJldHVybiB2YWx1ZSA9PT0gXCJcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ludmFsaWRQaG9uZU51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZSA9IC9eWyvCsV0qWyhdezAsMX1bMC05XXsxLDN9WyldezAsMX1bLVxcc1xcLi8wLTldKiQvZ2k7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBcIlwiICYmICFyZS50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ludmFsaWRFbWFpbCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZSA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgICAgIHJldHVybiAhcmUudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ3RhZ19yZXBvcnRfY29udmVyc2lvbih1cmwpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHVybCkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ3RhZygnZXZlbnQnLCAnQ2xpY2snLCB7J2V2ZW50X2NhdGVnb3J5JzogJ0Zvcm0nfSk7XHJcbiAgICAgICAgZ3RhZygnZXZlbnQnLCAnY29udmVyc2lvbicsIHtcclxuICAgICAgICAgICAgJ3NlbmRfdG8nOiAnQVctODU5MTc5NDc3L3pGaHRDTGZSMDRrQkVOV1QySmtEJyxcclxuICAgICAgICAgICAgJ2V2ZW50X2NhbGxiYWNrJzogY2FsbGJhY2tcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2pzL3NjcmlwdC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBSEE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQ0E7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==