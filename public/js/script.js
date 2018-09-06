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
	        var dataObj = {};

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
	            $.ajax({
	                type: "GET",
	                url: './index.php',
	                data: dataObj,
	                success: function success() {
	                    modalWindow.querySelector('.close').click();

	                    var popup = document.querySelector('.popup');
	                    setTimeout(function () {
	                        popup.classList.add('active');
	                    }, 600);

	                    setTimeout(function () {
	                        popup.classList.remove('active');
	                    }, 1600);
	                }
	            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDY3NjA1ZjQ2NGQxZWRjMDIyNWJjIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY3NjA1ZjQ2NGQxZWRjMDIyNWJjIiwid2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIFxyXG4gICAgY29uc3QgcGFnZSA9ICQoJ2h0bWwsIGJvZHknKTtcclxuICAgIGNvbnN0IHNjcm9sbERvd25UcmlnZ2VyID0gJCgnLnRvRG93bicpO1xyXG4gICAgY29uc3Qgc2Nyb2xsVGltZUluTXMgPSA4MDA7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcG9zYWxzIC50YWInKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItd3JhcHBlciAuYnRuJyk7XHJcblxyXG4gICAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtd2luZG93Jyk7XHJcbiAgICBjb25zdCBtb2RhbFRyaWdnZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXRyaWdnZXInKTtcclxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWVsZW0nKTtcclxuXHJcbiAgICAvL3N3YXAgbG9nbyBkZXBlbmRzIG9uIGRldmljZVxyXG4gICAgbGV0IG1vYmlsZUxvZ28gPSAgIGhlYWRlci5xdWVyeVNlbGVjdG9yKCcubWxvZ28tbGluaycpO1xyXG4gICAgbGV0IGxvZ28gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmxvZ28tbGluaycpO1xyXG4gICAgbGV0IHRlY2hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlY2hzJyk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDY1MCkge1xyXG4gICAgICAgIG1vYmlsZUxvZ28uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgICAgXHJcbiAgICAgICAgdGVjaHMuY2xhc3NMaXN0LmFkZCgnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgJCgnLnRvb2xzIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHNFYWNoOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46IDIwICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB0ZWNocy5jbGFzc0xpc3QucmVtb3ZlKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2luaXQgb2YgYSB0aGlyZCBwYXJ0eSBsaWJyYXJpZXNcclxuICAgICQoJy5oZXJvIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBkb3RzRWFjaDogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICByZXdpbmQ6IHRydWUsXHJcbiAgICAgICAgYW5pbWF0ZUluOiAnc2xpZGVJbkxlZnQnLFxyXG4gICAgICAgIGNlbnRlcjogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnByb3Bvc2FscyAub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjgsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI4LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxNDQwOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vc2Nyb2xsIGFuaW1hdGlvblxyXG4gICAgJChzY3JvbGxEb3duVHJpZ2dlcikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcGFnZS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgfSwgc2Nyb2xsVGltZUluTXMpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY2hhbmdpbmcgdGFicyBhbmQgc2xpZGVyc1xyXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRhYlBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcG9zYWxzIC50YWInKTtcclxuICAgICAgICAgICAgbGV0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3Bvc2FscyAudGFiLWNvbnRlbnQgPiBkaXYnKTtcclxuXHJcbiAgICAgICAgICAgIC8vQ2hhbmdlIGFjdGl2ZSB0YWJzIGFuZCBzbGlkZXJzXHJcbiAgICAgICAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL0ZpbmQgb3V0IGEgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgdGFiIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICBpZiAodGFic1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiUG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FyZHNbdGFiUG9zaXRpb25dLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vYXBwZWFyaW5nIG9mIGEgaGVhZGVyIHdoZW4gaGF2ZSBzY3JvbGxlZCAuLi4gcHhzXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gaGVhZGVyLm9mZnNldEhlaWdodCkge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuICAgICAgICAgICAgaGVhZGVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi13aGl0ZScpO1xyXG4gICAgICAgICAgICBoZWFkZXJCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLWJsdWUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuICAgICAgICAgICAgaGVhZGVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1ibHVlJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckJ0bi5jbGFzc0xpc3QuYWRkKCdidG4td2hpdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2EgbG9naWMgb2YgYSBtb2RhbCB3aW5kb3dcclxuICAgIG1vZGFsVHJpZ2dlckJ1dHRvbnMuZm9yRWFjaChtdGIgPT4ge1xyXG4gICAgICAgIG10Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXdpbmRvdycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kYWxXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGVsZW0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2l0aW9uVGltZSA9IDUwMDtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3JtRWxlbWVudHMuZm9yRWFjaChmZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlcnJvcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYWN0aXZhdGVFcnJvckJveChmZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHRyYW5zaXRpb25UaW1lLCBlbGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3JtRWxlbWVudHMuZm9yRWFjaChmZSA9PiB7XHJcbiAgICAgICAgZmUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgICAgIGZlLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBmZS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlYWN0aXZhdGVFcnJvckJveChmZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZlLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGZlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGRhdGFPYmogPSB7fTtcclxuXHJcbiAgICAgICAgZm9ybUVsZW1lbnRzLmZvckVhY2goZmUgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGZlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiQSBuYW1lIGlzIGVtcHR5LlwiLCBpc0VtcHR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFPYmoubmFtZSA9IGZlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGVtYWlsLlwiLCBpc0ludmFsaWRFbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBzZXRFcnJvclN0YXRlKGZlLCBcIkludmFsaWQgdHlwZSBvZiBlbWFpbC5cIiwgaXNJbnZhbGlkRW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhT2JqLmVtYWlsID0gZmUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncGhvbmUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGEgcGhvbmUgbnVtYmVyLlwiLCBpc0ludmFsaWRQaG9uZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHNldEVycm9yU3RhdGUoZmUsIFwiSW52YWxpZCB0eXBlIG9mIGEgcGhvbmUgbnVtYmVyLlwiLCBpc0ludmFsaWRQaG9uZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFPYmoucGhvbmUgPSBmZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtZXNzYWdlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclN0YXRlKGZlLCBcIkEgbWVzc2FnZSBpcyBlbXB0eVwiLCBpc0VtcHR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBzZXRFcnJvclN0YXRlKGZlLCBcIkEgbWVzc2FnZSBpcyBlbXB0eVwiLCBpc0VtcHR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhT2JqLm1lc3NhZ2UgPSBmZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuL2luZGV4LnBocCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhT2JqLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpLmNsaWNrKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTYwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWFjdGl2YXRlRXJyb3JCb3goZWxlbSkge1xyXG4gICAgICAgIGxldCBlcnJvckJveCA9IGVsZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItYm94Jyk7XHJcbiAgICAgICAgZXJyb3JCb3guaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZXJyb3JCb3guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVFcnJvckJveChlbGVtLCBtc2cpIHtcclxuICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWJveCcpLmlubmVySFRNTCA9IG1zZztcclxuICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWJveCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEVycm9yU3RhdGUoZWxlbSwgbXNnLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjayhlbGVtLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlRXJyb3JCb3goZWxlbSwgbXNnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNFbXB0eUZpZWxkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW52YWxpZFBob25lTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlID0gL15bK10qWyhdezAsMX1bMC05XXsxLDN9WyldezAsMX1bLVxcc1xcLi8wLTldKiQvZ2k7XHJcbiAgICAgICAgcmV0dXJuICFyZS50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ludmFsaWRFbWFpbCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZSA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgICAgIHJldHVybiAhcmUudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9qcy9zY3JpcHQuanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFIQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkNBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=