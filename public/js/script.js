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
	    //    document.querySelector('.preloader').classList.remove('active');

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
	            if (!isMobile) {
	                captcha.style.display = 'block';
	                captcha.classList.add('showed');
	            } else {
	                $.ajax({
	                    type: "post",
	                    url: './index.php',
	                    data: dataObj,
	                    success: function success() {
	                        document.getElementById('modal-window').querySelector('.close').click();

	                        var popup = document.querySelector('.popup');
	                        setTimeout(function () {
	                            popup.classList.add('active');
	                        }, 600);

	                        setTimeout(function () {
	                            popup.classList.remove('active');
	                        }, 2100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDNhNzM5ZjcyMGFhYjQzN2E4YTIxIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNhNzM5ZjcyMGFhYjQzN2E4YTIxIiwid2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIC8vICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBjb25zdCBwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gICAgY29uc3Qgc2Nyb2xsRG93blRyaWdnZXIgPSAkKCcudG9Eb3duJyk7XHJcbiAgICBjb25zdCBzY3JvbGxUaW1lSW5NcyA9IDgwMDtcclxuXHJcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3Bvc2FscyAudGFiJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXdyYXBwZXIgLmJ0bicpO1xyXG5cclxuICAgIGNvbnN0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXdpbmRvdycpO1xyXG4gICAgY29uc3QgbW9kYWxUcmlnZ2VyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC10cmlnZ2VyJyk7XHJcbiAgICBjb25zdCBmb3JtID0gbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1lbGVtJyk7XHJcbiAgICBjb25zdCBjYXB0Y2hhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcHRjaGEnKTtcclxuXHJcbiAgICAvL3N3YXAgbG9nbyBkZXBlbmRzIG9uIGRldmljZVxyXG4gICAgbGV0IG1vYmlsZUxvZ28gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLm1sb2dvLWxpbmsnKTtcclxuICAgIGxldCBsb2dvID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWxpbmsnKTtcclxuICAgIGxldCB0ZWNocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWNocycpO1xyXG5cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA2NTApIHtcclxuICAgICAgICBtb2JpbGVMb2dvLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgdGVjaHMuY2xhc3NMaXN0LmFkZCgnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgJCgnLnRvb2xzIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHNFYWNoOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46IDIwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB0ZWNocy5jbGFzc0xpc3QucmVtb3ZlKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2luaXQgb2YgYSB0aGlyZCBwYXJ0eSBsaWJyYXJpZXNcclxuICAgICQoJy5oZXJvIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBkb3RzRWFjaDogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICByZXdpbmQ6IHRydWUsXHJcbiAgICAgICAgYW5pbWF0ZUluOiAnc2xpZGVJbkxlZnQnLFxyXG4gICAgICAgIGNlbnRlcjogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnByb3Bvc2FscyAub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjgsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI4LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxNDQwOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zY3JvbGwgYW5pbWF0aW9uXHJcbiAgICAkKHNjcm9sbERvd25UcmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcGFnZS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgfSwgc2Nyb2xsVGltZUluTXMpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY2hhbmdpbmcgdGFicyBhbmQgc2xpZGVyc1xyXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRhYlBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcG9zYWxzIC50YWInKTtcclxuICAgICAgICAgICAgbGV0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3Bvc2FscyAudGFiLWNvbnRlbnQgPiBkaXYnKTtcclxuXHJcbiAgICAgICAgICAgIC8vQ2hhbmdlIGFjdGl2ZSB0YWJzIGFuZCBzbGlkZXJzXHJcbiAgICAgICAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAvL0ZpbmQgb3V0IGEgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgdGFiIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICBpZiAodGFic1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiUG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FyZHNbdGFiUG9zaXRpb25dLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9hcHBlYXJpbmcgb2YgYSBoZWFkZXIgd2hlbiBoYXZlIHNjcm9sbGVkIC4uLiBweHNcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDEnKSxcclxuICAgICAgICAvLyAgICAgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMicpLFxyXG4gICAgICAgIC8vICAgICBoMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gzJyksXHJcbiAgICAgICAgLy8gICAgIGg0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDQnKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHRleHQgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaDEuZm9yRWFjaCh0ID0+IHRleHQucHVzaCh0KSk7XHJcbiAgICAgICAgLy8gaDIuZm9yRWFjaCh0ID0+IHRleHQucHVzaCh0KSk7XHJcbiAgICAgICAgLy8gaDMuZm9yRWFjaCh0ID0+IHRleHQucHVzaCh0KSk7XHJcbiAgICAgICAgLy8gaDQuZm9yRWFjaCh0ID0+IHRleHQucHVzaCh0KSk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gaGVhZGVyLm9mZnNldEhlaWdodCkge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuICAgICAgICAgICAgaGVhZGVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi13aGl0ZScpO1xyXG4gICAgICAgICAgICBoZWFkZXJCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLWJsdWUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuICAgICAgICAgICAgaGVhZGVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1ibHVlJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckJ0bi5jbGFzc0xpc3QuYWRkKCdidG4td2hpdGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRleHQuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJXaW5kb3cgXCIgKyAod2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyBcIiBFbGVtIFwiICsgdC5pbm5lckhUTUwgKyBcIiBcIiArIE1hdGguYWJzKHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSk7XHJcblxyXG4gICAgICAgIC8vICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+PSBcclxuICAgICAgICAvLyAgICAgICAgIE1hdGguYWJzKHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSArIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICogMC43KSkgIHtcclxuICAgICAgICAvLyAgICAgICAgIHQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5zY3JvbGwoKTtcclxuXHJcbiAgICAvL2EgbG9naWMgb2YgYSBtb2RhbCB3aW5kb3dcclxuXHJcbiAgICB2YXIgaXNNb2JpbGUgPSB7XHJcbiAgICAgICAgQW5kcm9pZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJsYWNrQmVycnk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpT1M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBPcGVyYTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFdpbmRvd3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW55OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoaXNNb2JpbGUuQW5kcm9pZCgpIHx8IGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fCBpc01vYmlsZS5pT1MoKSB8fCBpc01vYmlsZS5PcGVyYSgpIHx8IGlzTW9iaWxlLldpbmRvd3MoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG1vZGFsVHJpZ2dlckJ1dHRvbnMuZm9yRWFjaChtdGIgPT4ge1xyXG4gICAgICAgIG10Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXdpbmRvdycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kYWxXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGVsZW0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2l0aW9uVGltZSA9IDUwMDtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVhY3RpdmF0ZUVycm9yQm94KGZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgdHJhbnNpdGlvblRpbWUsIGVsZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZlID0+IHtcclxuICAgICAgICBmZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZlLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICAgZmUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGZlLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZUVycm9yQm94KGZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZmUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZlLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGZlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZlID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChmZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICduYW1lJzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBzZXRFcnJvclN0YXRlKGZlLCBcIkEgbmFtZSBpcyBlbXB0eS5cIiwgaXNFbXB0eUZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9iai5uYW1lID0gZmUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGVtYWlsLlwiLCBpc0ludmFsaWRFbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gc2V0RXJyb3JTdGF0ZShmZSwgXCJJbnZhbGlkIHR5cGUgb2YgZW1haWwuXCIsIGlzSW52YWxpZEVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9iai5lbWFpbCA9IGZlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclN0YXRlKGZlLCBcIkludmFsaWQgdHlwZSBvZiBhIHBob25lIG51bWJlci5cIiwgaXNJbnZhbGlkUGhvbmVOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGEgcGhvbmUgbnVtYmVyLlwiLCBpc0ludmFsaWRQaG9uZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmoucGhvbmUgPSBmZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21lc3NhZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclN0YXRlKGZlLCBcIkEgbWVzc2FnZSBpcyBlbXB0eVwiLCBpc0VtcHR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiQSBtZXNzYWdlIGlzIGVtcHR5XCIsIGlzRW1wdHlGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmoubWVzc2FnZSA9IGZlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXB0Y2hhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgY2FwdGNoYS5jbGFzc0xpc3QuYWRkKCdzaG93ZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9pbmRleC5waHAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFPYmosXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtd2luZG93JykucXVlcnlTZWxlY3RvcignLmNsb3NlJykuY2xpY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUVycm9yQm94KGVsZW0pIHtcclxuICAgICAgICBsZXQgZXJyb3JCb3ggPSBlbGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWJveCcpO1xyXG4gICAgICAgIGVycm9yQm94LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGVycm9yQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlRXJyb3JCb3goZWxlbSwgbXNnKSB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ib3gnKS5pbm5lckhUTUwgPSBtc2c7XHJcbiAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ib3gnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFcnJvclN0YXRlKGVsZW0sIG1zZywgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2soZWxlbS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBhY3RpdmF0ZUVycm9yQm94KGVsZW0sIG1zZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRW1wdHlGaWVsZCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ludmFsaWRQaG9uZU51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZSA9IC9eWytdKlsoXXswLDF9WzAtOV17MSwzfVspXXswLDF9Wy1cXHNcXC4vMC05XSokL2dpO1xyXG4gICAgICAgIHJldHVybiAhcmUudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJbnZhbGlkRW1haWwodmFsdWUpIHtcclxuICAgICAgICBsZXQgcmUgPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcclxuICAgICAgICByZXR1cm4gIXJlLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9qcy9zY3JpcHQuanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQUhBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9