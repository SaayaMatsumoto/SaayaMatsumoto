// JavaScript Document

//--- sns-link-show ---//
jQuery(function($){
	// execute when scrolling and loading
	$(window).on('scroll load', function(){
		$('live').each( function() {
			var this_pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ( scroll > this_pos - windowHeight ) {
				$('.sns-link').css({
					visibility: visible,
					// opacity: 'translate(0)'
				});
			}
		});
	});
});

//--- FADE-IN---//
jQuery(function($){
	// execute when scrolling and loading
	$(window).on('scroll load', function(){
		$('.fade-in').each( function() {
			var this_pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ( scroll > this_pos - windowHeight ) {
				$(this).css({
					opacity: 1,
					transform: 'translate(0)'
				});
			}
		});
	});
});

//--- FADE-IN FROM LEFT ---//
jQuery(function($){
	// execute when scrolling and loading
	$(window).on('scroll load', function(){
		$('.fade-left').each( function() {
			var this_pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ( scroll > this_pos - windowHeight ) {
				$(this).css({
					opacity: 1,
					transform: 'translate(0)'
				});
			}
		});
	});
});

//--- FADE-IN FROM RIGHT ---//
jQuery(function($){
	// execute when scrolling and loading
	$(window).on('scroll load', function(){
		$('.fade-right').each( function() {
			var this_pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ( scroll > this_pos - windowHeight ) {
				$(this).css({
					opacity: 1,
					transform: 'translate(0)'
				});
			}
		});
	});
});

//--- FADE-IN FROM BOTTOM ---//
jQuery(function($){
	// execute when scrolling and loading
	$(window).on('scroll load', function(){
		$('.fade-up').each( function() {
			var this_pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ( scroll > this_pos - windowHeight ) {
				$(this).css({
					opacity: 1,
					transform: 'translate(0)'
				});
			}
		});
	});
});