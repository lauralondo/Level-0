

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


  var createMediaPlayer = function(mediaBox) {
    //create media player
    console.log(mediaBox);
    var $mediaPlayer = mediaBox.children('.slidedown-content').children('.media-player');
    var $firstMedia = mediaBox.children('.slidedown-content').children('.scroll-thing').children('.middle-scroll').children().first().children().first();
    if ( $firstMedia.is('div')) {
      console.log("its a videao");
      var videoID = $firstMedia.attr('data');
      //create video thumbnail
      $mediaPlayer.html(
        "<div class='video-thumbnail' data='" + videoID + "'>" + 
          "<img class='video-thumbnail-img' src='http://img.youtube.com/vi/" + videoID + "/0.jpg' />" + 
          "<div class='video-shield'></div>" + 
          "<div class='glyphicon glyphicon-play'></div>" + 
        "</div>");
    }
    else if ($firstMedia.is('img')) {
      console.log('i gots myself a picter');
      $mediaPlayer.html( $firstMedia.attr('data') );
    }
    else {
      console.log("it aint notin")
    }
  };




$('.invis-shield').on( 'click', function() {
  var $slide = $(this).parent().children('.slidedown');

  //colapses all other slidedowns
  $('.slidedown').not($slide).stop().animate({height:'0px'}, 300).data('open','false');;

  if( $slide.data('open') == 'false'){
    $slide.stop().animate({height:'600px'}, 300, createMediaPlayer($slide));
    $slide.data('open','true');
    $(this).parent().parent().parent().children('.slidedown-spacer').stop().animate({height:'600px'}, 300);
  }
  else {
    $slide.stop().animate({height:'0px'}, 300);
    $slide.data('open','false');
    var $mediaPlayer = $slide.children('.slidedown-content').children('.media-player');
    $mediaPlayer.html("");
    $(this).parent().parent().parent().children('.slidedown-spacer').stop().animate({height:'0px'}, 300);
    
  }



});


// scroller arrows
$('.left-side-arrow').on('click', function() {
  var $scroller = $(this).parent().children('.middle-scroll');
  $scroller.stop().animate( {
    scrollLeft: $scroller.scrollLeft() - 200
  });
});
$('.right-side-arrow').on('click', function() {
  var $scroller = $(this).parent().children('.middle-scroll');
  $scroller.stop().animate( {
    scrollLeft: $scroller.scrollLeft() + 200
  });
});

$('.media-player').on('click', function() {
  console.log("clicked on mediaplayer");
});
$('.glyphicon').on('click', function() {
  console.log("clicked on glyphicon");
});




$(document).on('click', ".video-thumbnail", function(e) {
  console.log("cliked on video thumnail");
  e.preventDefault();
  var media = "<iframe width='100%' height='100%' src='http://www.youtube.com/embed/" 
              + $(this).attr('data')
              + "?rel=0&autohide=1&controls=0&showinfo=0&autoplay=1' frameborder='0' allowfullscreen></iframe>";
  console.log($(this));
  console.log(media);
  console.log("this.parent")
  console.log($(this).parent());
  if ($(this).parent().is('.media-player')) {
    console.log("my mother is a media player! :D ")
    $(this).parent().html(media);
  }
  else {
    console.log("my mama is a lama")
    console.log($(this).parent().parent().parent().parent().children('.media-player'));
    $(this).parent().parent().parent().parent().children('.media-player').html(media);
  }
});





$('.thumb-scroller-forcefield').on('click', function(e) {
  e.preventDefault();
  var media = $(this).parent().children('img').attr('data');
  console.log($(this));
  console.log(media);
  console.log($(this).parent().parent().parent().parent().children('.media-player'));
  $(this).parent().parent().parent().parent().children('.media-player').html(media);
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

