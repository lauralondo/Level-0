

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


//TODO: resize stuff, handle opacity animations, and text
var iconPositions = function() {
  var cloudTop = $('#cloud-img').offset().top;
  var cloudLeft = $('#cloud-img').offset().left;
  $('#icon-google').offset({left: cloudLeft + 140, top: cloudTop + 130});
  $('#icon-microsoft').offset({left: cloudLeft + 200, top: cloudTop + 300});
  $('#icon-playstation').offset({left: cloudLeft + 300, top: cloudTop + 200});
  $('#icon-steam').offset({left: cloudLeft + 30, top: cloudTop + 210});
  $('#icon-nintendo').offset({left: cloudLeft + 400, top: cloudTop + 50});
  $('#icon-apple').offset({left: cloudLeft + 450, top: cloudTop + 250});
}



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



//some setup
$(function(){
    //slidedowns start out slosed
    $('.slidedown').data('open','false');
    //move slidedowns to after the row
    // $('.my-images').children('.row').append( $('.slidedown') );
    $('.my-images').append($('<div/>').addClass('slidedown-spacer'));
});


$('.invis-shield').on( 'click', function() {
  var $slide = $(this).parent().children('.slidedown');

  //colapses all other slidedowns
  $('.slidedown').not($slide).stop().animate({height:'0px'/*, width:'0px'*/}, 300).data('open','false');;

  if( $slide.data('open') == 'false'){
    $slide.stop().animate({height:'600px'/*, width:'1200px'*/}, 300);
    $slide.data('open','true');
    $(this).parent().parent().parent().children('.slidedown-spacer').stop().animate({height:'600px'}, 300);
  }
  else {
    $slide.stop().animate({height:'0px'/*, width:'0px'*/}, 300);
    $slide.data('open','false');
    $(this).parent().parent().parent().children('.slidedown-spacer').stop().animate({height:'0px'}, 300);
  }
});

// $('.shielded_img').on( 'click', function() {
//   var $slide = $(this).children('.slidedown')

//   //colapses all other slidedowns
//   $('.slidedown').not($slide).stop().animate({height:'0px'/*, width:'0px'*/}, 300).data('open','false');;

//   if( $slide.data('open') == 'false'){
//     $slide.stop().animate({height:'600px'/*, width:'1200px'*/}, 300);
//     $slide.data('open','true');
//     $(this).parent().parent().children('.slidedown-spacer').stop().animate({height:'600px'}, 300);
//   }
//   else {
//     $slide.stop().animate({height:'0px'/*, width:'0px'*/}, 300);
//     $slide.data('open','false');
//     $(this).parent().parent().children('.slidedown-spacer').stop().animate({height:'0px'}, 300);
//   }
// });





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
                height:'0px'
            }, 600);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop().animate({
                height:'100px'
            }, 600);
        }
    }
});


// //slides footer on hover
// $('#sliding_footer').hover(
// 	function() {
// 		var $nav = $('#sliding_footer');
// 		$nav.stop().animate({
// 	                height:'100px'
// 	}, 600);},

// 	function() {
// 		if (($('body').scrollTop() + $(window).height()) < $(document).height()) {
// 			var $nav = $('#sliding_footer');
// 			$nav.stop().animate({
// 		                height:'50px'
// 		    }, 600);
// 		}
// 	}
// );

var slidedownPosition = function() {
  var $row = $('.my-images').children('.row');
  var posTop = $row.offset().top + $row.height();
  var posLeft = $row.offset().left;
  $('.slidedown').offset({left: posLeft, top: posTop});

  // $('.slidedown').width($('.slidedown').parent().parent().parent().width);
  var rowWidth = $('.slidedown').parent().parent().width();
  $('.slidedown').width(rowWidth);
}

var centerTitle = function() {
  // var centerSpot = (($(window).width()/2) - ($('#title-text').width()/2)) + 'px');
  var centerSpot = ($(window).width()/2) - ($('#title-text').width()/2) + 'px';
  $('#title-text').css('left', centerSpot);
};


$(window).resize( function() {
  centerTitle();
  slidedownPosition();
  iconPositions();

});


// when a lightbox-trigger class element is clicked,
// a wild lightbox appears!!
$('.lightbox-trigger').click( function(e) {
  e.preventDefault();
  var media = $(this).attr('data');
  if( $('#lightbox').length > 0 ) {  //if lightbox is open
    console.log("in if");
    $('body').addClass('dissable-scroll');
    $('#content').html(media);
    $('#lightbox').show();
  }
  else { //else lightbox is closed, create a new one
    console.log("in else");
    $('body').addClass('dissable-scroll');
    var lightbox =
    '<div id="lightbox">' +
      '<p> click to close </p>' +
      '<div id="content">' +
        media +
      '</div>' +
    '</div>';

    $('body').append(lightbox);
  }
});

// // when a lightbox-trigger class element is clicked,
// // a wild lightbox appears!!
// $('.lightbox-trigger').click( function(e) {
//   e.preventDefault();
//   var image_href = $(this).attr('href');
//   if( $('#lightbox').length > 0 ) {  //if lightbox is open
//     console.log("in if");
//     $('#content').html('<img src="' + image_href + '" />');
//     $('#lightbox').show();
//   }
//   else { //else lightbox is closed, create a new one
//     console.log("in else");
//     var lightbox =
//     '<div id="lightbox">' +
//       '<p> click to close </p>' +
//       '<div id="content">' +
//         '<img src="' + image_href + '" />' +
//       '</div>' +
//     '</div>';

//     $('body').append(lightbox);
//   }
// });




//hide the lightbox when clicked on. Its super effective!!
$('body').on('click', '#lightbox', function() {
  console.log("lighbox on click");
  $('#lightbox').hide();
  $('#content').html("");
  $('body').removeClass('dissable-scroll')
});




//on document load
jQuery(document).ready(function($) {
  centerTitle();
  slidedownPosition();
  iconPositions();

	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - $('.navbar').height()}, 500);
	});

  var tabletImg = $("#tablet-img");
  tabletImg.height( $(window).height() - 50 - $('#arrow-band').height() );
  var imgwidth = (-tabletImg.width()/2) + 'px';
  console.log(imgwidth);
  tabletImg.css('margin-left', imgwidth);


});

