$(document).ready(function () {
	$('#header-slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnFocus: false,
		pauseOnHover: false,
		speed: 2000,
		swipe: false,
	});
});
//========================================================================================
$(window).scroll(function () {
	parallax();
})

function parallax() {
	var wScroll = $(window).scrollTop()
	$('.parallax--bg').css('background-position', 'center ' + (wScroll * 0.75) + 'px');
}
//========================================================================================
(function () {
	'use strict';

	var btnScrollDown = document.querySelector('#scroll_down');

	function scrollDown() {
		let windowCoords = document.documentElement.clientHeight;
		(function scroll() {
			if (window.pageYOffset < windowCoords) {
				window.scrollBy(0, 7);
				setTimeout(scroll, 0);
			}
			if (window.pageYOffset > windowCoords) {
				window.scrollTo(0, windowCoords);
			}
		})();
	}

	btnScrollDown.addEventListener('click', scrollDown);
})();
//======================================================================================
$('.menu-burger').on('click', function () {
	$('#mobile-menu').fadeIn('fast');
});

$('.cross').on('click', function () {
	$('#mobile-menu').fadeOut('fast');
});
//========================================================================================
$(window).scroll(function () {

	let pageTopOffset = window.pageYOffset;
	let browserWindowHeight = window.innerHeight;
	let positionWhenStickiHeaderNeedToBeShown = browserWindowHeight * 0.90;

	if (pageTopOffset > positionWhenStickiHeaderNeedToBeShown) {
		$('.sticky-header').addClass('active');
	} else {
		$('.sticky-header').removeClass('active');
	}

});