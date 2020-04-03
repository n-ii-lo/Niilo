$(document).ready(function () {
	$('#header-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnFocus: false,
		pauseOnHover: false,
		speed: 1000,
		swipe: false,
		fade: true
	});
});

$(window).scroll(function () {
	parallax();
})

function parallax() {
	var wScroll = $(window).scrollTop()
	$('.parallax--bg').css('background-position', 'center ' + (wScroll * 0.75) + 'px');
}

(function () {
	'use strict';

	var btnScrollDown = document.querySelector('#scroll_down');

	function scrollDown() {
		let windowCoords = document.documentElement.clientHeight;
		(function scroll() {
			if (window.pageYOffset < windowCoords) {
				window.scrollBy(0, 4);
				setTimeout(scroll, 0);
			}
			if (window.pageYOffset > windowCoords) {
				window.scrollTo(0, windowCoords);
			}
		})();
	}

	btnScrollDown.addEventListener('click', scrollDown);
})();
