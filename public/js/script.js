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
	        techs.classList.remove('owl-carousel');
	    }

	    //init of a third party libraries
	    $('.hero .owl-carousel').owlCarousel({
	        dots: true,
	        items: 1,
	        dotsEach: true,
	        autoplay: true,
	        animateIn: 'slideInLeft'
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
	            // gtag_report_conversion();

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

	    // <!-- Event snippet for click_CTA conversion page
	    // In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
	    function gtag_report_conversion(url) {
	        var callback = function callback() {
	            if (typeof url != 'undefined') {
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDYxZjgyZTQwNzFjMTc3ZTFmZGVmIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYxZjgyZTQwNzFjMTc3ZTFmZGVmIiwid2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2UgPSAkKCdodG1sLCBib2R5Jyk7XHJcbiAgICBjb25zdCBzY3JvbGxEb3duVHJpZ2dlciA9ICQoJy50b0Rvd24nKTtcclxuICAgIGNvbnN0IHNjcm9sbFRpbWVJbk1zID0gODAwO1xyXG5cclxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcG9zYWxzIC50YWInKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItd3JhcHBlciAuYnRuJyk7XHJcblxyXG4gICAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtd2luZG93Jyk7XHJcbiAgICBjb25zdCBtb2RhbFRyaWdnZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXRyaWdnZXInKTtcclxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWVsZW0nKTtcclxuICAgIGNvbnN0IGNhcHRjaGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FwdGNoYScpO1xyXG5cclxuICAgIC8vc3dhcCBsb2dvIGRlcGVuZHMgb24gZGV2aWNlXHJcbiAgICBsZXQgdGVjaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVjaHMnKTtcclxuXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNjUwKSB7XHJcbiAgICAgICAgdGVjaHMuY2xhc3NMaXN0LmFkZCgnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgJCgnLnRvb2xzIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHNFYWNoOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46IDIwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRlY2hzLmNsYXNzTGlzdC5yZW1vdmUoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaW5pdCBvZiBhIHRoaXJkIHBhcnR5IGxpYnJhcmllc1xyXG4gICAgJCgnLmhlcm8gLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgIGRvdHNFYWNoOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVJbjogJ3NsaWRlSW5MZWZ0JyxcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wcm9wb3NhbHMgLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI4LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTQ0MDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2Nyb2xsIGFuaW1hdGlvblxyXG4gICAgJChzY3JvbGxEb3duVHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBhZ2UuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgIH0sIHNjcm9sbFRpbWVJbk1zKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NoYW5naW5nIHRhYnMgYW5kIHNsaWRlcnNcclxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YWJQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3Bvc2FscyAudGFiJyk7XHJcbiAgICAgICAgICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9wb3NhbHMgLnRhYi1jb250ZW50ID4gZGl2Jyk7XHJcblxyXG4gICAgICAgICAgICAvL0NoYW5nZSBhY3RpdmUgdGFicyBhbmQgc2xpZGVyc1xyXG4gICAgICAgICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgLy9GaW5kIG91dCBhIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHRhYiBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhYnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYlBvc2l0aW9uID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhcmRzW3RhYlBvc2l0aW9uXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vYXBwZWFyaW5nIG9mIGEgaGVhZGVyIHdoZW4gaGF2ZSBzY3JvbGxlZCAuLi4gcHhzXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gaGVhZGVyLm9mZnNldEhlaWdodCkge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuICAgICAgICAgICAgaGVhZGVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi13aGl0ZScpO1xyXG4gICAgICAgICAgICBoZWFkZXJCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLWJsdWUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuICAgICAgICAgICAgaGVhZGVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1ibHVlJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckJ0bi5jbGFzc0xpc3QuYWRkKCdidG4td2hpdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuc2Nyb2xsKCk7XHJcblxyXG4gICAgLy9hIGxvZ2ljIG9mIGEgbW9kYWwgd2luZG93XHJcbiAgICB2YXIgaXNNb2JpbGUgPSB7XHJcbiAgICAgICAgQW5kcm9pZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJsYWNrQmVycnk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpT1M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBPcGVyYTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFdpbmRvd3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW55OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoaXNNb2JpbGUuQW5kcm9pZCgpIHx8IGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fCBpc01vYmlsZS5pT1MoKSB8fCBpc01vYmlsZS5PcGVyYSgpIHx8IGlzTW9iaWxlLldpbmRvd3MoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBtb2RhbFRyaWdnZXJCdXR0b25zLmZvckVhY2gobXRiID0+IHtcclxuICAgICAgICBtdGIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGd0YWdfcmVwb3J0X2NvbnZlcnNpb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBlbGVtc1RvSGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aWxsLWhpZGRlbicpO1xyXG4gICAgICAgICAgICBlbGVtc1RvSGlkZS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSlcclxuICAgICAgICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC13aW5kb3cnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZScpKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgdHJhbnNpdGlvblRpbWUgPSAyMDA7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbXNUb0hpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2lsbC1oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIGVsZW1zVG9IaWRlLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3JtRWxlbWVudHMuZm9yRWFjaChmZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlcnJvcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYWN0aXZhdGVFcnJvckJveChmZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhcHRjaGEuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRjaGEuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGNoYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSwgdHJhbnNpdGlvblRpbWUsIGVsZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZlID0+IHtcclxuICAgICAgICBmZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZlLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICAgZmUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGZlLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZUVycm9yQm94KGZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmUudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgZmUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy9jYXB0Y2hhIGRlbGV0ZWRcclxuICAgICAgICB2YXIgZGF0YU9iaiA9IHt9O1xyXG5cclxuICAgICAgICBmb3JtRWxlbWVudHMuZm9yRWFjaChmZSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZmUubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbmFtZSc6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lzVmFsaWQgPSBzZXRFcnJvclN0YXRlKGZlLCBcIkEgbmFtZSBpcyBlbXB0eS5cIiwgaXNFbXB0eUZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9iai5uYW1lID0gZmUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGVtYWlsLlwiLCBpc0ludmFsaWRFbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gc2V0RXJyb3JTdGF0ZShmZSwgXCJJbnZhbGlkIHR5cGUgb2YgZW1haWwuXCIsIGlzSW52YWxpZEVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhT2JqLmVtYWlsID0gZmUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGEgcGhvbmUgbnVtYmVyLlwiLCBpc0ludmFsaWRQaG9uZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gc2V0RXJyb3JTdGF0ZShmZSwgXCJQbGVhc2UgZW50ZXIgYSBjb3JyZWN0IGVtYWlsLlwiLCBpc0ludmFsaWRQaG9uZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9iai5waG9uZSA9IGZlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWVzc2FnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNldEVycm9yU3RhdGUoZmUsIFwiQSBtZXNzYWdlIGlzIGVtcHR5XCIsIGlzRW1wdHlGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpc1ZhbGlkID0gc2V0RXJyb3JTdGF0ZShmZSwgXCJBIG1lc3NhZ2UgaXMgZW1wdHlcIiwgaXNFbXB0eUZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhT2JqLm1lc3NhZ2UgPSBmZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICghaXNNb2JpbGUuYW55KCkpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNhcHRjaGEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIC8vICAgICBjYXB0Y2hhLmNsYXNzTGlzdC5hZGQoJ3Nob3dlZCcpO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi9pbmRleC5waHAnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YU9iaixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luICsgXCIvc3VjY2Vzcy5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWFjdGl2YXRlRXJyb3JCb3goZWxlbSkge1xyXG4gICAgICAgIGxldCBlcnJvckJveCA9IGVsZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItYm94Jyk7XHJcbiAgICAgICAgZXJyb3JCb3guaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZXJyb3JCb3guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVFcnJvckJveChlbGVtLCBtc2cpIHtcclxuICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWJveCcpLmlubmVySFRNTCA9IG1zZztcclxuICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWJveCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEVycm9yU3RhdGUoZWxlbSwgbXNnLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjayhlbGVtLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlRXJyb3JCb3goZWxlbSwgbXNnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gaXNFbXB0eUZpZWxkKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHZhbHVlID09PSBcIlwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW52YWxpZFBob25lTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlID0gL15bK8KxXSpbKF17MCwxfVswLTldezEsM31bKV17MCwxfVstXFxzXFwuLzAtOV0qJC9naTtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IFwiXCIgJiYgIXJlLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW52YWxpZEVtYWlsKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XHJcbiAgICAgICAgcmV0dXJuICFyZS50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA8IS0tIEV2ZW50IHNuaXBwZXQgZm9yIGNsaWNrX0NUQSBjb252ZXJzaW9uIHBhZ2VcclxuICAgIC8vIEluIHlvdXIgaHRtbCBwYWdlLCBhZGQgdGhlIHNuaXBwZXQgYW5kIGNhbGwgZ3RhZ19yZXBvcnRfY29udmVyc2lvbiB3aGVuIHNvbWVvbmUgY2xpY2tzIG9uIHRoZSBjaG9zZW4gbGluayBvciBidXR0b24uIC0tPlxyXG4gICAgZnVuY3Rpb24gZ3RhZ19yZXBvcnRfY29udmVyc2lvbih1cmwpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHVybCkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ3RhZygnZXZlbnQnLCAnY29udmVyc2lvbicsIHtcclxuICAgICAgICAgICAgJ3NlbmRfdG8nOiAnQVctODU5MTc5NDc3L3pGaHRDTGZSMDRrQkVOV1QySmtEJyxcclxuICAgICAgICAgICAgJ2V2ZW50X2NhbGxiYWNrJzogY2FsbGJhY2tcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2pzL3NjcmlwdC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFIQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQ0E7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9