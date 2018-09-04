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
	    var page = $('html, body');
	    var scrollDownTrigger = $('.toDown');
	    var scrollTimeInMs = 800;
	    $(scrollDownTrigger).click(function () {
	        page.animate({
	            scrollTop: $($.attr(this, 'href')).offset().top
	        }, scrollTimeInMs);
	        return false;
	    });

	    //changing tabs and sliders
	    var tabs = document.querySelectorAll('.proposals .tab');
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
	    var header = document.querySelector('.header-wrapper');
	    var headerBtn = document.querySelector('.header-wrapper .btn');
	    var hero = document.querySelector('.hero-wrapper');

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
	    var modalWindow = document.getElementById('modal-window');
	    var modalTriggerButtons = document.querySelectorAll('.modal-trigger');
	    var form = modalWindow.querySelector('form');
	    var formElements = form.querySelectorAll('.form-elem');

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
	                });
	            }, transitionTime, elem);
	        }
	    });

	    formElements.forEach(function (fe) {
	        fe.addEventListener('focus', function () {
	            fe.nextElementSibling.classList.add('focused');
	        });

	        fe.addEventListener('blur', function () {
	            if (fe.value == "") {
	                fe.nextElementSibling.classList.remove('focused');
	            };
	        });
	    });

	    form.addEventListener('submit', function () {
	        var isValid = true;
	        formElements.forEach(function (fe) {
	            switch (fe.name) {
	                case 'name':
	                    {
	                        if (fe.value === '') {
	                            isValid = false;
	                        }

	                        fe.classList.add('error');

	                        fe.parentElement.querySelector('.error-box').innerHTML = "Empty name";
	                        break;
	                    };
	                case 'email':
	                    {
	                        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	                        isValid = re.test(fe.value.toLowerCase());
	                        fe.classList.add('error');

	                        fe.parentElement.querySelector('.error-box').innerHTML = "Invalid email";
	                        break;
	                    };
	                case 'phone':
	                    {
	                        if (fe.value === '') {
	                            isValid = false;
	                        }

	                        fe.classList.add('error');
	                        fe.parentElement.querySelector('.error-box').innerHTML = "Empty phone";
	                        break;
	                    };
	                case 'message':
	                    {
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
	    var mobileLogo = header.querySelector('.logo-mobile');
	    var logo = header.querySelector('.logo');

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDVkMjhkNWMyN2EzNWVlMTQ5ZTVlIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVkMjhkNWMyN2EzNWVlMTQ5ZTVlIiwid2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIC8vaW5pdCBvZiBhIHRoaXJkIHBhcnR5IGxpYnJhcmllc1xyXG4gICAgJCgnLmhlcm8gLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgIGRvdHNFYWNoOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIHJld2luZDogdHJ1ZSxcclxuICAgICAgICBhbmltYXRlSW46ICdzbGlkZUluTGVmdCcsXHJcbiAgICAgICAgY2VudGVyOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucHJvcG9zYWxzIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyOCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjgsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDE0NDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyOFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy9zY3JvbGwgYW5pbWF0aW9uXHJcbiAgICBjb25zdCBwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gICAgY29uc3Qgc2Nyb2xsRG93blRyaWdnZXIgPSAkKCcudG9Eb3duJyk7XHJcbiAgICBjb25zdCBzY3JvbGxUaW1lSW5NcyA9IDgwMDtcclxuICAgICQoc2Nyb2xsRG93blRyaWdnZXIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHBhZ2UuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgIH0sIHNjcm9sbFRpbWVJbk1zKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NoYW5naW5nIHRhYnMgYW5kIHNsaWRlcnNcclxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcG9zYWxzIC50YWInKTtcclxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YWJQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3Bvc2FscyAudGFiJyk7XHJcbiAgICAgICAgICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9wb3NhbHMgLnRhYi1jb250ZW50ID4gZGl2Jyk7XHJcblxyXG4gICAgICAgICAgICAvL0NoYW5nZSBhY3RpdmUgdGFicyBhbmQgc2xpZGVyc1xyXG4gICAgICAgICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9GaW5kIG91dCBhIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHRhYiBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhYnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYlBvc2l0aW9uID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhcmRzW3RhYlBvc2l0aW9uXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvL2FwcGVhcmluZyBvZiBhIGhlYWRlciB3aGVuIGhhdmUgc2Nyb2xsZWQgLi4uIHB4c1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXdyYXBwZXIgLmJ0bicpO1xyXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXdyYXBwZXInKTtcclxuICAgIFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGhlYWRlci5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4td2hpdGUnKTtcclxuICAgICAgICAgICAgaGVhZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1ibHVlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYmx1ZScpO1xyXG4gICAgICAgICAgICBoZWFkZXJCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXdoaXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vYSBsb2dpYyBvZiBhIG1vZGFsIHdpbmRvd1xyXG4gICAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtd2luZG93Jyk7XHJcbiAgICBjb25zdCBtb2RhbFRyaWdnZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXRyaWdnZXInKTtcclxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWVsZW0nKVxyXG5cclxuICAgIG1vZGFsVHJpZ2dlckJ1dHRvbnMuZm9yRWFjaChtdGIgPT4ge1xyXG4gICAgICAgIG10Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXdpbmRvdycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kYWxXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGVsZW0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2l0aW9uVGltZSA9IDUwMDtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3JtRWxlbWVudHMuZm9yRWFjaChmZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCB0cmFuc2l0aW9uVGltZSwgZWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybUVsZW1lbnRzLmZvckVhY2goZmUgPT4ge1xyXG4gICAgICAgIGZlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBmZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmZS52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBmZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZlID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChmZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICduYW1lJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmZS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmUuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBmZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ib3gnKS5pbm5lckhUTUwgPSBcIkVtcHR5IG5hbWVcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmUgPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gcmUudGVzdChmZS52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBmZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ib3gnKS5pbm5lckhUTUwgPSBcIkludmFsaWQgZW1haWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwaG9uZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmUudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZmUuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBmZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ib3gnKS5pbm5lckhUTUwgPSBcIkVtcHR5IHBob25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWVzc2FnZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmUudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmUuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBmZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ib3gnKS5pbm5lckhUTUwgPSBcIkVtcHR5IG1lc3NhZ2VcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zd2FwIGxvZ28gZGVwZW5kcyBvbiBkZXZpY2VcclxuICAgIGxldCBtb2JpbGVMb2dvID0gICBoZWFkZXIucXVlcnlTZWxlY3RvcignLmxvZ28tbW9iaWxlJyk7XHJcbiAgICBsZXQgbG9nbyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG5cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA2NTApIHtcclxuICAgICAgICBsb2dvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgJCgnLnRvb2xzIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHNFYWNoOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46IDIwICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vYmlsZUxvZ28uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9qcy9zY3JpcHQuanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFIQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=