(function($) {
	"use strict";

	// Parallax effect
    $('#main-slider, .home-widget', '.page-title').stellar({
        horizontalScrolling: false,
        verticalOffset: 10
    });



    

	$("#player .mucisplayer").on("mousedown",function(){
		var effect = $("#player .sound-effect");
		if(effect.hasClass("nosound")){
			effect.removeClass("nosound")
		}else{
			effect.addClass("nosound")
		}
	})


	// Full screen Sliders
	$('#home-sliders').superslides({
		play: 5000,
		animation: 'fade',
		pagination: false
	});
	
    
	// Gallery
	$('ul.gallery').mixitup();
	$('.gallery li').hover(function() {
		$(this).find('.overlay').animate({
		  opacity: 1
		})
	}, function() {
		$(this).find('.overlay').animate({
		  opacity: 0
		})
	});

	
	// Dynamic Height
	$(window).resize(function() {
		var slideshowHeight = $(window).height();
		if( $('body.admin-bar').length > 0 ) {
			$('#main-slider').height(slideshowHeight - 32);
		} else {
			$('#main-slider').height(slideshowHeight);
		}
	});

	// Animate

	$('.about_couple .groom, .the_events .odd .post-content').addClass('wow fadeInLeft');
	$('.about_couple .bride, .the_events .even .post-content').addClass('wow fadeInRight');
	$('.home-widget .section-title').addClass('wow bounce');
	$('#countdown').addClass('wow pulse');


	var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        delay: 2000,
        mobile: false
	});
	wow.init();

	// Parralx Effect
	$(window).trigger('resize');
  
  	
 

	// prettyPhoto
    $('dl.gallery-item dt a[href*=".jpg"], dl.gallery-item dt a[href*=".png"], dl.gallery-item dt a[href*=".gif"]').attr('rel', 'prettyPhoto["gallery"]'); 
	$('a[rel^="prettyPhoto"], a[rel="prettyPhoto"]').prettyPhoto({
		theme: 'pp_default',
		deeplinking: false,
		social_tools: false
	});

	$(window).load(function() {
		// Page loading spinner
		$('#preloader').fadeOut('slow',function() {
			$(this).remove();
		});
	    
		

		

		// Countdown - Countup
		if( $('#countdown').length > 0 ) {
			var timeTarget = new Date(_warrior.countdown_time),
				timeCurrent = new Date(),
				timeDiff = (timeTarget.getTime()) - (timeCurrent.getTime());

			if ( timeDiff  > 0 ) {
				$('#countdown').countdown({
					until: timeTarget,
					format: 'YODHMS',
					layout: $('#timer').html()
				});
			} else {
				$('#countdown-widget .section-title').text(_warrior.countup_title);
				$('#countdown').countdown({
					since: timeTarget,
					format: 'YODHMS',
					layout: $('#timer').html()
				});
			}
		}

	    
	});



})(jQuery);