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
	    if (window.innerWidth > 1024 || window.innerWidth <= 650) {
	      $('.solutions .owl-carousel').trigger('destroy.owl.carousel');
	      $('.showcase .owl-carousel').trigger('destroy.owl.carousel');
	    } else {
	      if (window.innerWidth <= 1024) {
	        var solutionsCards = $('.solutions .owl-carousel');
	        var showcaseCards = $('.showcase .owl-carousel');

	        solutionsCards.owlCarousel({
	          dots: true,
	          items: 2,
	          margin: 20
	        });

	        showcaseCards.owlCarousel({
	          dots: true,
	          items: 2,
	          margin: 20
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

	  var initAccordeons = function initAccordeons() {
	    var cards = document.querySelectorAll('.solutions .card');

	    cards.forEach(function (card) {
	      return card.addEventListener('click', function (e) {
	        var target = e.target,
	            currentTarget = e.currentTarget;


	        if (target.classList.contains('card__button--toggle')) {
	          currentTarget.classList.toggle('hidden');
	          target.innerHTML === 'Learn more' ? target.innerHTML = 'Hide' : target.innerHTML = 'Learn more';
	        }
	      });
	    });
	  };

	  initAccordeons();
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDU2NGEyZTg0YTkyMDI4YTFjMjM5Iiwid2VicGFjazovLy9mcm9udGVuZC9zY3JpcHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU2NGEyZTg0YTkyMDI4YTFjMjM5IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3dyYXBwZXInKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsRG93blRyaWdnZXIgPSAkKCcubmF2IGEnKTtcclxuICBjb25zdCBzY3JvbGxUaW1lSW5NcyA9IDgwMDtcclxuXHJcbiAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8PSA2NTApIHtcclxuICAgICAgJCgnLnNvbHV0aW9ucyAub3dsLWNhcm91c2VsJykudHJpZ2dlcignZGVzdHJveS5vd2wuY2Fyb3VzZWwnKTtcclxuICAgICAgJCgnLnNob3djYXNlIC5vd2wtY2Fyb3VzZWwnKS50cmlnZ2VyKCdkZXN0cm95Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjQpIHtcclxuICAgICAgICBjb25zdCBzb2x1dGlvbnNDYXJkcyA9ICQoJy5zb2x1dGlvbnMgLm93bC1jYXJvdXNlbCcpO1xyXG4gICAgICAgIGNvbnN0IHNob3djYXNlQ2FyZHMgPSAkKCcuc2hvd2Nhc2UgLm93bC1jYXJvdXNlbCcpO1xyXG5cclxuICAgICAgICBzb2x1dGlvbnNDYXJkcy5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgICBtYXJnaW46IDIwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzaG93Y2FzZUNhcmRzLm93bENhcm91c2VsKHtcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xyXG5cclxuICAvL2luaXQgb2YgYSB0aGlyZCBwYXJ0eSBsaWJyYXJpZXNcclxuICAkKCcudGVzdGlzIC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICByZXdpbmQ6IHRydWUsXHJcbiAgICBhbmltYXRlSW46ICdzbGlkZUluTGVmdCcsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgIDA6IHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEyMDA6IHtcclxuICAgICAgICBpdGVtczogMyxcclxuICAgICAgICBtYXJnaW46IDIwXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAkKCcubmF2IGEsIC5oZWFkZXIgLmJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIHBhZ2UuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wLFxyXG4gICAgfSwgc2Nyb2xsVGltZUluTXMpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBoZWFkZXIub2Zmc2V0SGVpZ2h0KSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGluaXRBY2NvcmRlb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc29sdXRpb25zIC5jYXJkJyk7XHJcblxyXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IHRhcmdldCwgY3VycmVudFRhcmdldCB9ID0gZTtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkX19idXR0b24tLXRvZ2dsZScpKSB7XHJcbiAgICAgICAgY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID09PSAnTGVhcm4gbW9yZSdcclxuICAgICAgICAgID8gdGFyZ2V0LmlubmVySFRNTCA9ICdIaWRlJ1xyXG4gICAgICAgICAgOiB0YXJnZXQuaW5uZXJIVE1MID0gJ0xlYXJuIG1vcmUnO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgaW5pdEFjY29yZGVvbnMoKTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3NjcmlwdC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBUEE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBVEE7QUFVQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9