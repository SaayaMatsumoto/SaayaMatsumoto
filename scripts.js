/* Scroll reveal animations */
jQuery(function ($) {
  $(window).on('scroll load', function () {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    $('.fade-in, .fade-left, .fade-right, .fade-up').each(function () {
      var elementTop = $(this).offset().top;

      if (scrollTop > elementTop - windowHeight) {
        $(this).css({
          opacity: 1,
          transform: 'translate(0)'
        });
      }
    });
  });
});
