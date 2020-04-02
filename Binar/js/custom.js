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