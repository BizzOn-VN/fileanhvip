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
        $('marquee').addClass('scroll-top-2');
    }
    else {
        $('.header').removeClass('scroll-top');
        $('marquee').removeClass('scroll-top-2');
    }                 
});
// $("#md-tk").fancybox().trigger('click');

var wiDth = $('.group-tabs .tab-content .md-col-3').css('width'); 
$('.group-tabs .tab-content .md-col-3').css('height', wiDth);
jQuery(window).on('resize', function() {
var wiDth = $('.group-tabs .tab-content .md-col-3').css('width'); 
$('.group-tabs .tab-content .md-col-3').css('height', wiDth);
});