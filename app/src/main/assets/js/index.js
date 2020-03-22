// external js = https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/js/swiper.js

var mySwiper = new Swiper('.swiper-container', {
	loop: false,
	hashNavigation: true,
	spaceBetween: 100,
	navigation: {
		nextEl: '.swiper-btn-next',
		prevEl: '.swiper-btn-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	initialSlide: 0,
});

/* manipulate navbar */
$('.navbar #navBtns').on('click', function() {
	$('.section-btns').toggleClass('open');
	if ($('.navbar #navBtns').hasClass('fa-bars')) {
		$('.navbar #navBtns')
			.removeClass('fa-bars')
			.addClass('fa-close');
	} else {
		$('.navbar #navBtns')
			.removeClass('fa-close')
			.addClass('fa-bars');
	}
});
// Slide1 animation
function animSlide1() {
	const tl = new TimelineMax();
	tl.fromTo('.S01_02', 0.5, { opacity: 0, filter: 'blur(20px)' }, { opacity: 1, filter: 'blur(0px)' })
		.fromTo('.S01_03', 0.5, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
		.fromTo(
			'.S01_05',
			1.5,
			{ opacity: 0, clip: 'rect(0px, 0px, 400px, 1280px)' },
			{ opacity: 1, clip: 'rect(0px, 1280px, 400px, 0px)' }
		)
		.fromTo('.S01_04', 0.5, { opacity: 0, filter: 'blur(20px)' }, { opacity: 1, filter: 'blur(0px)' })
		.fromTo('.LEO_logo', 0.5, { opacity: 0, filter: 'blur(20px)' }, { opacity: 1, filter: 'blur(0px)' });
}
animSlide1();
// Slide2 animation
function animSlide2() {
	const tl = new TimelineMax();
	tl.fromTo('.S02_01', 1, { opacity: 0, x: -200 }, { opacity: 1, x: 0 })
		.fromTo('.S02_02', 0.5, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
		.fromTo('.S02_03', 0.5, { opacity: 0, x: -200 }, { opacity: 1, x: 0 })
		.fromTo('.S02_04', 0.5, { opacity: 0, x: 200 }, { opacity: 1, x: 0 })
		.fromTo('.S02_05', 1.5, { opacity: 0, scale: 2 }, { opacity: 1, scale: 1, ease: Back.easeInOut })
		.fromTo('.S02_06', 0.5, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 });
}
// animSlide2();
// Slide3 animation
function animSlide3() {
	const tl = new TimelineMax();
	tl.addPause()
		.fromTo(
			'.S03_01',
			0.5,
			{ opacity: 0, clip: 'rect(0px, 0px, 85px, 0px)' },
			{ opacity: 1, clip: 'rect(0px, 85px, 85px, 0px)' }
		)
		.fromTo('.S03_03', 0.5, { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: Back.easeInOut })
		.addPause()
		.fromTo(
			'.S03_02',
			0.5,
			{ opacity: 0, clip: 'rect(0px, 88px, 88px, 88px)' },
			{ opacity: 1, clip: 'rect(0px, 88px, 88px, 0px)', ease: Back.easeInOut }
		)
		.fromTo('.S03_04', 0.5, { opacity: 0, x: 100 }, { opacity: 1, x: 0, ease: Back.easeInOut });
	document.querySelector('#slide03').onclick = () => tl.play();
	const tl3 = new TimelineMax({ paused: true });
	tl3.fromTo(
		['.S03_05', '.ref_lens'],
		0.5,
		{ marginTop: -200, opacity: 0 },
		{ display: 'block', marginTop: 0, opacity: 1 }
	);
	$('#btn_ref3').on('click', function(e) {
		e.stopPropagation();
		tl3.play();
	});
	$('.S03_05').on('click', function(e) {
		e.stopPropagation();
		tl3.reverse();
	});
}
// animSlide3();
// Slide4 animation
function animSlide4() {
	const tl = new TimelineMax();
	tl.addPause()
		.fromTo('.S04_01', 0.5, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: Back.easeOut })
		.addPause()
		.fromTo('.S04_02', 0.5, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: Back.easeOut })
		.addPause()
		.fromTo('.S04_03', 0.5, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: Back.easeOut });
	document.querySelector('#slide04').onclick = () => tl.play();
	const tl4 = new TimelineMax({ paused: true });
	tl4.fromTo(
		['.S04_04', '.ref_lens'],
		0.5,
		{ marginTop: -200, opacity: 0 },
		{ display: 'block', marginTop: 0, opacity: 1 }
	);
	$('#btn_ref4').on('click', function(e) {
		e.stopPropagation();
		tl4.play();
	});
	$('.S04_04').on('click', function(e) {
		e.stopPropagation();
		tl4.reverse();
	});
}
// animSlide4();
// Slide5 animation
function animSlide5() {
	const tl = new TimelineMax();
	tl.addPause()
		.addPause()
		.fromTo(
			'.S05_04',
			0.5,
			{ opacity: 0, clip: 'rect(0px, 0px, 200px, 0px)' },
			{ opacity: 1, clip: 'rect(0px, 200px, 200px, 0px)' }
		)
		.addPause()
		.fromTo(
			'.S05_05',
			0.5,
			{ opacity: 0, clip: 'rect(0px, 0px, 100px, 0px)' },
			{ opacity: 1, clip: 'rect(0px, 200px, 100px, 0px)' }
		)
		.addPause()
		.fromTo(
			'.S05_06',
			0.5,
			{ opacity: 0, clip: 'rect(0px, 160px, 0px, 0px)' },
			{ opacity: 1, clip: 'rect(0px, 160px, 150px, 0px)' }
		)
		.fromTo(
			'.S05_07',
			0.5,
			{ opacity: 0, clip: 'rect(0px, 200px, 0px, 0px)' },
			{ opacity: 1, clip: 'rect(0px, 200px, 150px, 0px)' }
		);
	document.querySelector('#slide05').onclick = () => tl.play();
	const tl5 = new TimelineMax({ paused: true });
	tl5.fromTo(
		['.S05_08', '.ref_lens'],
		0.5,
		{ marginTop: -200, opacity: 0 },
		{ display: 'block', marginTop: 0, opacity: 1 }
	);
	$('#btn_ref5').on('click', function(e) {
		e.stopPropagation();
		tl5.play();
	});
	$('.S05_08').on('click', function(e) {
		e.stopPropagation();
		tl5.reverse();
	});

	const tl55 = new TimelineMax({ paused: true });
	tl55.fromTo(
		['.S05_09', '.ref_lens'],
		0.5,
		{ marginTop: -200, opacity: 0 },
		{ display: 'block', marginTop: 0, opacity: 1 }
	);
	$('#btn_sd5').on('click', function(e) {
		e.stopPropagation();
		tl55.play();
	});
	$('.S05_09').on('click', function(e) {
		e.stopPropagation();
		tl55.reverse();
	});
}
// animSlide5();
// Slide6 animation
function animSlide6() {
	const tl = new TimelineMax();
	tl.addPause()
		.fromTo(
			'.S06_01',
			0.5,
			{ opacity: 0, clip: 'rect(250px, 320px, 250px, 0px)' },
			{ opacity: 1, clip: 'rect(0px, 320px, 250px, 0px)' }
		)
		.addPause()
		.fromTo(
			'.S06_02',
			0.5,
			{ opacity: 0, clip: 'rect(250px, 320px, 250px, 0px)' },
			{ opacity: 1, clip: 'rect(0px, 320px, 250px, 0px)' }
		);
	document.querySelector('#slide06').onclick = () => tl.play();
	const tl6 = new TimelineMax({ paused: true });
	tl6.fromTo(
		['.S06_03', '.ref_lens'],
		0.5,
		{ marginTop: -200, opacity: 0 },
		{ display: 'block', marginTop: 0, opacity: 1 }
	);
	$('#btn_ref6').on('click', function(e) {
		e.stopPropagation();
		tl6.play();
	});
	$('.S06_03').on('click', function(e) {
		e.stopPropagation();
		tl6.reverse();
	});

	const tl66 = new TimelineMax({ paused: true });
	tl66.fromTo(
		['.S06_04', '.ref_lens'],
		0.5,
		{ marginTop: -200, opacity: 0 },
		{ display: 'block', marginTop: 0, opacity: 1 }
	);
	$('#btn_sd6').on('click', function(e) {
		e.stopPropagation();
		tl66.play();
	});
	$('.S06_04').on('click', function(e) {
		e.stopPropagation();
		tl66.reverse();
	});
}
// animSlide6();
// Slide7 animation
function animSlide7() {
	const tl = new TimelineMax();
	tl.fromTo(
		'.S07_01',
		0.5,
		{ opacity: 0, clip: 'rect(0px, 0px, 150px, 0px)' },
		{ opacity: 1, clip: 'rect(0px, 310px, 150px, 0px)' }
	)
		.addPause()
		.fromTo('.S07_01', 0.5, { clip: 'rect(0px, 310px, 150px, 0px)' }, { clip: 'rect(0px, 610px, 150px, 0px)' })
		.addPause()
		.fromTo('.S07_01', 0.5, { clip: 'rect(0px, 610px, 150px, 0px)' }, { clip: 'rect(0px, 920px, 150px, 0px)' });
	document.querySelector('#slide07').onclick = () => tl.play();
	const tl7 = new TimelineMax({ paused: true });
	tl7.fromTo(
		['.S07_02', '.ref_lens'],
		0.5,
		{ marginTop: -200, opacity: 0 },
		{ display: 'block', marginTop: 0, opacity: 1 }
	);
	$('#btn_ref7').on('click', function(e) {
		e.stopPropagation();
		tl7.play();
	});
	$('.S07_02').on('click', function(e) {
		e.stopPropagation();
		tl7.reverse();
	});
}
// animSlide7();
// Slide8 animation
function animSlide8() {
	const tl = new TimelineMax();
	tl.fromTo('.S08_01', 0.5, { opacity: 0, x: +200 }, { opacity: 1, x: 0 })
		.addPause()
		.fromTo('.S08_02', 0.5, { opacity: 0, x: +200 }, { opacity: 1, x: 0 })
		.addPause()
		.fromTo('.S08_03', 0.5, { opacity: 0, x: +200 }, { opacity: 1, x: 0 })
		.addPause()
		.fromTo('.S08_04', 0.5, { opacity: 0, x: +200 }, { opacity: 1, x: 0 });
	document.querySelector('#slide08').onclick = () => tl.play();
	const tl8 = new TimelineMax({ paused: true });
	tl8.fromTo(
		['.S08_05', '.ref_lens'],
		0.5,
		{ marginTop: -200, opacity: 0 },
		{ display: 'block', marginTop: 0, opacity: 1 }
	);
	$('#btn_ref8').on('click', function(e) {
		e.stopPropagation();
		tl8.play();
	});
	$('.S08_05').on('click', function(e) {
		e.stopPropagation();
		tl8.reverse();
	});
}
// animSlide8();
// Slide9 animation
function animSlide9() {
	const tl = new TimelineMax();
	tl.fromTo('.S09_01', 0.5, { opacity: 0, x: -200 }, { opacity: 1, x: 0 })
		.fromTo(
			'.S09_02',
			0.5,
			{ opacity: 0, clip: 'rect(0px, 900px, 0px, 0px)' },
			{ opacity: 1, clip: 'rect(0px, 900px, 500px, 0px)' }
		)
		.fromTo(
			'.S09_03',
			0.5,
			{ opacity: 0, clip: 'rect(0px, 0px, 100px, 0px)' },
			{ opacity: 1, clip: 'rect(0px, 900px, 100px, 0px)' }
		)
		.fromTo(
			'.S09_04',
			0.5,
			{ opacity: 0, clip: 'rect(0px, 900px, 100px, 900px)' },
			{ opacity: 1, clip: 'rect(0px, 900px, 100px, 0px)' }
		)
		.fromTo('.S09_06', 1.5, { opacity: 0, scale: -3 }, { opacity: 1, scale: 1, ease: Power4.easeInOut })
		.fromTo('.S09_05', 1.5, { opacity: 0, scale: -3 }, { opacity: 1, scale: 1, ease: Power4.easeInOut });
	const tl9 = new TimelineMax({ paused: true });
	tl9.fromTo(
		['.S03_05', '.ref_lens'],
		0.5,
		{ marginTop: -200, opacity: 0 },
		{ display: 'block', marginTop: 0, opacity: 1 }
	);
	$('#btn_ref9').on('click', function(e) {
		e.stopPropagation();
		tl9.play();
	});
	$('.S03_05').on('click', function(e) {
		e.stopPropagation();
		tl9.reverse();
	});
}
// animSlide9();

function runAinmations() {
	const pageNum = mySwiper.realIndex + 1;
	if (pageNum == 1) {
		animSlide1();
	} else if (pageNum == 2) {
		animSlide2();
	} else if (pageNum == 3) {
		animSlide3();
	} else if (pageNum == 4) {
		animSlide4();
	} else if (pageNum == 5) {
		animSlide5();
	} else if (pageNum == 6) {
		animSlide6();
	} else if (pageNum == 7) {
		animSlide7();
	} else if (pageNum == 8) {
		animSlide8();
	} else if (pageNum == 9) {
		animSlide9();
	}
}
runAinmations();

mySwiper.on('slideChangeTransitionStart', function() {
	runAinmations();
});

$('#home').on('click', function() {
	mySwiper.slideTo(0, 400, true);
});

$('#showIndex').on('click', function() {
	TweenMax.to('.slidesLens', 0.4, { top: 0 });
	TweenMax.to(['.indexContainer'], 0.4, { bottom: 0 });
	$('.navbar button:nth-of-type(6)')
		.addClass('active')
		.siblings()
		.removeClass('active');
});
$('#closeIndex, .slidesLens').on('click', function() {
	TweenMax.to('.slidesLens', 0.4, { top: 1000 });
	TweenMax.to('.indexContainer', 0.4, { bottom: '-120%' });
});

$('.indexContainer ul li').on('click', function(e) {
	console.log($(this).index());
	mySwiper.slideTo($(this).index(), 400, true);
});

$('body').on('keydown', function(event) {
	var k = event.key,
		kc = event.keyCode;
	if (k === 'PageUp' || kc === 33) {
		console.log('key is: ' + k + ' | key code is: ' + kc);
		document.querySelector('.swiper-btn-next').click();
		runAinmations();
	}
	if (k == 'PageDown' || kc === 34) {
		console.log('key is: ' + k + ' | key code is: ' + kc);
		document.querySelector('.swiper-btn-prev').click();
		runAinmations();
	}
});

$(function() {
	if (mySwiper.realIndex == 0 || mySwiper.realIndex == 8 || mySwiper.realIndex == 10 || mySwiper.realIndex == 11) {
		document.querySelector('.REFs_text_ol').innerHTML = '';
		document.querySelector('#showrefs').style.display = 'none';
	} else {
		document.querySelector('#showrefs').style.display = 'block';
	}
});

document.querySelector('#sec1').onclick = () => mySwiper.slideTo(1, 400, true);
document.querySelector('#sec2').onclick = () => mySwiper.slideTo(3, 400, true);
document.querySelector('#sec3').onclick = () => mySwiper.slideTo(4, 400, true);
document.querySelector('#sec4').onclick = () => mySwiper.slideTo(5, 400, true);
document.querySelector('#sec5').onclick = () => mySwiper.slideTo(7, 400, true);
document.querySelector('#sec6').onclick = () => mySwiper.slideTo(8, 400, true);
