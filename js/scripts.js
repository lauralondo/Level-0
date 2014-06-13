

var section1Bottom = $('#section1').offset().top + $('#section1').height() - $('.navbar').height();
var section2Bottom = $('#section2').offset().top + $('#section2').height() - $('.navbar').height();
var section3Bottom = $('#section3').offset().top + $('#section3').height() - $('.navbar').height();
//var section4Bottom = $("#section4").offset().top + $("#section4").height();

// on scroll highlighting
$(window).on('scroll',function(){
	// we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop >= section3Bottom) {
        $('#nav-section4').addClass('active');
        $('#nav-section1').removeClass('active');
        $('#nav-section2').removeClass('active');
        $('#nav-section3').removeClass('active');
    }
    else if (stop >= section2Bottom) {
        $('#nav-section3').addClass('active');
        $('#nav-section1').removeClass('active');
        $('#nav-section2').removeClass('active');
        $('#nav-section4').removeClass('active');
    }
    else if (stop >= section1Bottom) {
        $('#nav-section2').addClass('active');
        $('#nav-section1').removeClass('active');
        $('#nav-section3').removeClass('active');
        $('#nav-section4').removeClass('active');
    }
    else {
        $('#nav-section1').addClass('active');
        $('#nav-section2').removeClass('active');
        $('#nav-section3').removeClass('active');
        $('#nav-section4').removeClass('active');
    }




   //  // we round here to reduce a little workload
   //  stop = Math.round($(window).scrollTop());
   //  if (stop > section3Bottom) {
   //      $('.navbar').addClass('past-3');
   //      $('.navbar').removeClass('past-1');
   //      $('.navbar').removeClass('past-2');
   //  }
   //  else if (stop > section2Bottom) {
   //      $('.navbar').addClass('past-2');
   //      $('.navbar').removeClass('past-1');
   //      $('.navbar').removeClass('past-3');
   //  }
   //  else if (stop > section1Bottom) {
   //      $('.navbar').addClass('past-1');
   //      $('.navbar').removeClass('past-2');
   //      $('.navbar').removeClass('past-3');
   //  }
   //  else {
   //      $('.navbar').removeClass('past-1');
   //      $('.navbar').removeClass('past-2');
   //      $('.navbar').removeClass('past-3');
   // }
});





//fade image out on hover
// $('.my-img').hover(
// 	function() {
// 		$(this).stop().animate({opacity:'0.1'}, 400);
// 	},
// 	function() {
// 		$(this).stop().animate({opacity:'1.0'}, 200);
// 	}
// );

//pull down image shield on hover
$('.shielded_img').hover(
	function() {
		$(this).children('.shield').stop().animate({height: '100%', opacity:'0.8'}, 200);
		$(this).children('.shield-text').slideDown(100);//.stop().animate({height: '100%'}, 500);
	},
	function() {
		$(this).children('.shield').stop().animate({height:'0%', opacity:'0.1'}, 200);
		$(this).children('.shield-text').hide();//.stop().animate({height:'0%'}, 500);
	}
);




//start the footer as collapsed
$(function(){
    $('#sliding_footer').data('size','small');
});

//slides footer on scroll
$(window).scroll(function(){
    var $nav = $('#sliding_footer');
    if (($('body').scrollTop() + $(window).height()) < $(document).height()) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').stop().animate({
                height:'50px'
            }, 600);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop().animate({
                height:'300px'
            }, 600);
        }
    }
});

//slides footer on hover
$('#sliding_footer').hover(
	function() {
		var $nav = $('#sliding_footer');
		$nav.data('size','big').stop().animate({
	                height:'300px'
	}, 600);},

	function() {
		if (($('body').scrollTop() + $(window).height()) < $(document).height()) {
			var $nav = $('#sliding_footer');
			$nav.data('size','small').stop().animate({
		                height:'50px'
		    }, 600);
		}
	}
);


//on document load
jQuery(document).ready(function($) {

	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - $('.navbar').height()}, 500);
	});

});