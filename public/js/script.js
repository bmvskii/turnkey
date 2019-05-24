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

	document.addEventListener('DOMContentLoaded', function () {
	  var page = $('html, body');
	  var header = document.querySelector('.header__wrapper');

	  var scrollDownTrigger = $('.nav a');
	  var scrollTimeInMs = 800;

	  //swap logo depends on device
	  // if (window.innerWidth <= 650) {
	  //   mobileLogo.style.display = "block";

	  //   $('.tools .owl-carousel').owlCarousel({
	  //     dots: true,
	  //     dotsEach: true,
	  //     items: 1,
	  //     center: true,
	  //     margin: 20
	  //   });
	  // } else {
	  //   logo.style.display = "block";
	  // }


	  //init of a third party libraries
	  // $('.hero .owl-carousel').owlCarousel({
	  //   dots: true,
	  //   items: 1,
	  //   dotsEach: true,
	  //   autoplay: true,
	  //   rewind: true,
	  //   animateIn: 'slideInLeft',
	  //   center: true
	  // });

	  // $('.proposals .owl-carousel').owlCarousel({
	  //   dots: true,
	  //   responsiveClass: true,
	  //   responsive: {
	  //     0: {
	  //       margin: 15,
	  //       items: 1,
	  //     },
	  //     768: {
	  //       margin: 28,
	  //       items: 2,
	  //     },
	  //     1024: {
	  //       items: 3,
	  //       margin: 28,
	  //     },
	  //     1440: {
	  //       items: 3,
	  //       margin: 28
	  //     },
	  //   },
	  // });

	  $('.nav a, .header .button').click(function () {
	    page.animate({
	      scrollTop: $($.attr(this, 'href')).offset().top
	    }, scrollTimeInMs);
	    return false;
	  });

	  window.addEventListener('scroll', function () {
	    if (window.pageYOffset >= header.offsetHeight) {
	      header.classList.add('scrolled');
	    } else {
	      header.classList.remove('scrolled');
	    }
	  });
		});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGI1NzkwMzRiNDA5NjQ3MTVlMjI4Iiwid2VicGFjazovLy9mcm9udGVuZC9zY3JpcHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI1NzkwMzRiNDA5NjQ3MTVlMjI4IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3dyYXBwZXInKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsRG93blRyaWdnZXIgPSAkKCcubmF2IGEnKTtcclxuICBjb25zdCBzY3JvbGxUaW1lSW5NcyA9IDgwMDtcclxuXHJcbiAgLy9zd2FwIGxvZ28gZGVwZW5kcyBvbiBkZXZpY2VcclxuICAvLyBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNjUwKSB7XHJcbiAgLy8gICBtb2JpbGVMb2dvLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gIC8vICAgJCgnLnRvb2xzIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgLy8gICAgIGRvdHM6IHRydWUsXHJcbiAgLy8gICAgIGRvdHNFYWNoOiB0cnVlLFxyXG4gIC8vICAgICBpdGVtczogMSxcclxuICAvLyAgICAgY2VudGVyOiB0cnVlLFxyXG4gIC8vICAgICBtYXJnaW46IDIwXHJcbiAgLy8gICB9KTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgbG9nby5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIC8vIH1cclxuXHJcblxyXG4gIC8vaW5pdCBvZiBhIHRoaXJkIHBhcnR5IGxpYnJhcmllc1xyXG4gIC8vICQoJy5oZXJvIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgLy8gICBkb3RzOiB0cnVlLFxyXG4gIC8vICAgaXRlbXM6IDEsXHJcbiAgLy8gICBkb3RzRWFjaDogdHJ1ZSxcclxuICAvLyAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gIC8vICAgcmV3aW5kOiB0cnVlLFxyXG4gIC8vICAgYW5pbWF0ZUluOiAnc2xpZGVJbkxlZnQnLFxyXG4gIC8vICAgY2VudGVyOiB0cnVlXHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vICQoJy5wcm9wb3NhbHMgLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAvLyAgIGRvdHM6IHRydWUsXHJcbiAgLy8gICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcbiAgLy8gICByZXNwb25zaXZlOiB7XHJcbiAgLy8gICAgIDA6IHtcclxuICAvLyAgICAgICBtYXJnaW46IDE1LFxyXG4gIC8vICAgICAgIGl0ZW1zOiAxLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICA3Njg6IHtcclxuICAvLyAgICAgICBtYXJnaW46IDI4LFxyXG4gIC8vICAgICAgIGl0ZW1zOiAyLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICAxMDI0OiB7XHJcbiAgLy8gICAgICAgaXRlbXM6IDMsXHJcbiAgLy8gICAgICAgbWFyZ2luOiAyOCxcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgMTQ0MDoge1xyXG4gIC8vICAgICAgIGl0ZW1zOiAzLFxyXG4gIC8vICAgICAgIG1hcmdpbjogMjhcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0sXHJcbiAgLy8gfSk7XHJcbiAgXHJcbiAgJCgnLm5hdiBhLCAuaGVhZGVyIC5idXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBwYWdlLmFuaW1hdGUoe1xyXG4gICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcCxcclxuICAgIH0sIHNjcm9sbFRpbWVJbk1zKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gaGVhZGVyLm9mZnNldEhlaWdodCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3NjcmlwdC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==