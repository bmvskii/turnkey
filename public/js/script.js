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

	  window.onresize = function () {
	    if (window.innerWidth > 1024) {
	      $('.solutions .owl-carousel').trigger('destroy.owl.carousel');
	      $('.showcase .owl-carousel').trigger('destroy.owl.carousel');
	    } else {
	      if (window.innerWidth <= 1024) {
	        var solutionsCards = $('.solutions .owl-carousel');
	        var showcaseCards = $('.showcase .owl-carousel');

	        solutionsCards.owlCarousel({
	          dots: true,
	          items: 2,
	          margin: 20,
	          animateIn: 'slideInLeft',
	          responsive: {
	            0: {
	              margin: 0,
	              items: 1
	            },
	            651: {
	              items: 2,
	              margin: 20
	            }
	          }
	        });

	        showcaseCards.owlCarousel({
	          dots: true,
	          items: 2,
	          margin: 20,
	          animateIn: 'slideInLeft',
	          responsive: {
	            0: {
	              margin: 0,
	              items: 1
	            },
	            651: {
	              items: 2,
	              margin: 20
	            }
	          }
	        });
	      }
	    }
	  };

	  window.dispatchEvent(new Event('resize'));

	  //init of a third party libraries
	  $('.testis .owl-carousel').owlCarousel({
	    dots: true,
	    items: 3,
	    margin: 20,
	    autoplay: true,
	    rewind: true,
	    animateIn: 'slideInLeft',
	    responsive: {
	      0: {
	        margin: 0,
	        items: 1
	      },
	      768: {
	        items: 2,
	        margin: 20
	      },
	      1200: {
	        items: 3,
	        margin: 20
	      }
	    }
	  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDUzZjE5MGQ3NTFhNTMwYTMzMzVmIiwid2VicGFjazovLy9mcm9udGVuZC9zY3JpcHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUzZjE5MGQ3NTFhNTMwYTMzMzVmIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3dyYXBwZXInKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsRG93blRyaWdnZXIgPSAkKCcubmF2IGEnKTtcclxuICBjb25zdCBzY3JvbGxUaW1lSW5NcyA9IDgwMDtcclxuXHJcbiAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNCkge1xyXG4gICAgICAkKCcuc29sdXRpb25zIC5vd2wtY2Fyb3VzZWwnKS50cmlnZ2VyKCdkZXN0cm95Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAkKCcuc2hvd2Nhc2UgLm93bC1jYXJvdXNlbCcpLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gMTAyNCkge1xyXG4gICAgICAgIGNvbnN0IHNvbHV0aW9uc0NhcmRzID0gJCgnLnNvbHV0aW9ucyAub3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgY29uc3Qgc2hvd2Nhc2VDYXJkcyA9ICQoJy5zaG93Y2FzZSAub3dsLWNhcm91c2VsJyk7XHJcblxyXG4gICAgICAgIHNvbHV0aW9uc0NhcmRzLm93bENhcm91c2VsKHtcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgICBhbmltYXRlSW46ICdzbGlkZUluTGVmdCcsXHJcbiAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDY1MToge1xyXG4gICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzaG93Y2FzZUNhcmRzLm93bENhcm91c2VsKHtcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgICBhbmltYXRlSW46ICdzbGlkZUluTGVmdCcsXHJcbiAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDY1MToge1xyXG4gICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuXHJcbiAgLy9pbml0IG9mIGEgdGhpcmQgcGFydHkgbGlicmFyaWVzXHJcbiAgJCgnLnRlc3RpcyAub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgcmV3aW5kOiB0cnVlLFxyXG4gICAgYW5pbWF0ZUluOiAnc2xpZGVJbkxlZnQnLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAwOiB7XHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBpdGVtczogMixcclxuICAgICAgICBtYXJnaW46IDIwLFxyXG4gICAgICB9LFxyXG4gICAgICAxMjAwOiB7XHJcbiAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgbWFyZ2luOiAyMFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgJCgnLm5hdiBhLCAuaGVhZGVyIC5idXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBwYWdlLmFuaW1hdGUoe1xyXG4gICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcCxcclxuICAgIH0sIHNjcm9sbFRpbWVJbk1zKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gaGVhZGVyLm9mZnNldEhlaWdodCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvc2NyaXB0L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFMQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQUxBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBUEE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==