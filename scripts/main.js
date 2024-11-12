'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});



$('.toggle-span').click(function(){
  $('.menu').toggleClass('active');
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 60) {
        $('.header').addClass('scroll-top');
    }
    else {
        $('.header').removeClass('scroll-top');
    }                 
});
// $("#md-tk").fancybox().trigger('click');