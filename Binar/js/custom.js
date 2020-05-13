$(document).ready(function () {
	$('#header-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
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

	if (!!btnScrollDown) {
		btnScrollDown.addEventListener('click', scrollDown);
	};
	
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
//========================================================================================
// const noise = () => {
// 	let canvas, ctx;

// 	let wWidth, wHeight;

// 	let noiseData = [];
// 	let frame = 0;

// 	let loopTimeout;


// 	// Create Noise
// 	const createNoise = () => {
// 			const idata = ctx.createImageData(wWidth, wHeight);
// 			const buffer32 = new Uint32Array(idata.data.buffer);
// 			const len = buffer32.length;

// 			for (let i = 0; i < len; i++) {
// 					if (Math.random() < 0.5) {
// 							buffer32[i] = 0xff000000;
// 					}
// 			}

// 			noiseData.push(idata);
// 	};


// 	// Play Noise
// 	const paintNoise = () => {
// 			if (frame === 9) {
// 					frame = 0;
// 			} else {
// 					frame++;
// 			}

// 			ctx.putImageData(noiseData[frame], 0, 0);
// 	};


// 	// Loop
// 	const loop = () => {
// 			paintNoise(frame);

// 			loopTimeout = window.setTimeout(() => {
// 					window.requestAnimationFrame(loop);
// 			}, (1000 / 25));
// 	};


// 	// Setup
// 	const setup = () => {
// 			wWidth = window.innerWidth;
// 			wHeight = window.innerHeight;

// 			canvas.width = wWidth;
// 			canvas.height = wHeight;

// 			for (let i = 0; i < 10; i++) {
// 					createNoise();
// 			}

// 			loop();
// 	};


// 	// Reset
// 	let resizeThrottle;
// 	const reset = () => {
// 			window.addEventListener('resize', () => {
// 					window.clearTimeout(resizeThrottle);

// 					resizeThrottle = window.setTimeout(() => {
// 							window.clearTimeout(loopTimeout);
// 							setup();
// 					}, 200);
// 			}, false);
// 	};


// 	// Init
// 	const init = (() => {
// 			canvas = document.getElementById('noise');
// 			ctx = canvas.getContext('2d');

// 			setup();
// 	})();
// };

// noise();

// $('img.img-svg').each(function(){
//   var $img = $(this);
//   var imgClass = $img.attr('class');
//   var imgURL = $img.attr('src');
//   $.get(imgURL, function(data) {
//     var $svg = $(data).find('svg');
//     if(typeof imgClass !== 'undefined') {
//       $svg = $svg.attr('class', imgClass+' replaced-svg');
//     }
//     $svg = $svg.removeAttr('xmlns:a');
//     if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
//       $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
//     }
//     $img.replaceWith($svg);
//   }, 'xml');
// });
