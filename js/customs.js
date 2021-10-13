// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	jQuery(".fancybox").fancybox();

	
	let slid = jQuery('#carousel-reviews');
		
	slid.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['', ''],
		dots: true,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 1,
				mouseDrag: true,
				dots: true
			},
			767:{
				items: 1,
				mouseDrag: true,
				dots: true
			},
			991:{
				items: 1,
				mouseDrag: true,
				dots: true
			},
			1099:{
				items: 1,
				mouseDrag: true,
				dots: true
			}
		}
	});

	

	});


	jQuery(document).ready(function($) {
		$('.header__burger').click(function(){
			$('.header').toggleClass('open-menu');
			$('.header__burger').toggleClass('open-menu');
			$('.nav-menu').toggleClass('open-menu');
			$('body').toggleClass('fixed-page');
		});





		let elem = $('.header, .separator');
		let doc = $(document);
		function scrolled() {
			let threshold = doc.scrollTop() > 50;
			elem.toggleClass('scrolled', threshold);
   		}
		$(window).on({ scroll: scrolled });





		$(".menu").on("click","a", function (event) {
			event.preventDefault();
			let id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 100}, 600);
			console.log(top)
		});
	});
	 