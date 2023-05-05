// JavaScript Document

//--- Splide image sliders ---//
document.addEventListener( 'DOMContentLoaded', function () {
  var main = new Splide( '#img-slide', {
    type      : 'loop',
    autoplay  : true,
    resetProgress: false,
    perPage   : 1,
    perMove   : 1,
    gap       : 500,
    interval  : 8000,
    speed     : 2000,
    focus     : 'center',
    rewind    : true,
    pagination: false,
    arrows    : false,
    updateOnMove: true,
  } );
  
  var text = new Splide( '#text-slide', {
    type      : 'fade',
    // type: 'loop',
    // direction : 'ttb',
    perPage   : 1,
    pagination: false,
    arrows    : false,
    updateOnMove: true,
  } );
  main.sync( text );
  main.mount();
  text.mount();
} );

//--- Fix the navigation at the top of the page after scrollong ---//
//   $(function() {
//     var offset = $('#global-nav').offset();
 
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > offset.top) {
//             $('#global-nav').addClass('nav_fixed');
//         } else {
//             $('#global-nav').removeClass('nav_fixed');
//         }
//     });
// });

//--- FADE-IN---//
if(!navigator.userAgent.match(/(iPhone|iPad)/)){
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
}else{
	jQuery(function($){
		$(window).on('load', function(){
			$('.fade-in').each( function() {
				$(this).removeClass('fade-in');
				$(this).addClass('fade');
			});
		});
	});
}

//--- FADE-IN FROM LEFT ---//
if(!navigator.userAgent.match(/(iPhone|iPad)/)){
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
}else{
	jQuery(function($){
		$(window).on('load', function(){
			$('.fade-left').each( function() {
				$(this).removeClass('fade-left');
				$(this).addClass('fade');
			});
		});
	});
}

//--- FADE-IN FROM RIGHT ---//
if(!navigator.userAgent.match(/(iPhone|iPad)/)){
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
}else{
	jQuery(function($){
		$(window).on('load', function(){
			$('.fade-right').each( function() {
				$(this).removeClass('fade-right');
				$(this).addClass('fade');
			});
		});
	});
}

//--- FADE-IN FROM BOTTOM ---//
if(!navigator.userAgent.match(/(iPhone|iPad)/)){
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
}else{
	jQuery(function($){
		$(window).on('load', function(){
			$('.fade-up').each( function() {
				$(this).removeClass('fade-up');
				$(this).addClass('fade');
			});
		});
	});
}

//--- Sync the navigation menu with the current section ---//
$(function () {
  $(window).on("load scroll resize", function () {

    var st = $(window).scrollTop();
    var wh = $(window).height();

    $('.sec-scroll-point').each(function (i) {
      var tg = $(this).offset().top;
      var id = $(this).attr('id');

      if (st > tg  - wh + (wh / 2)) {
        $(".nav-link").removeClass("current-position");
        var link = $(".nav-link[href *= " + id +"]");
        $(link).addClass("current-position");
      }

      if (st < wh) {
        $(".nav-link").removeClass("current-position");
      }
    });

  });

});
