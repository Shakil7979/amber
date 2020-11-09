$(document).ready(function(){
	// Banner - Carousel
	$('.banner').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true
	});
	// works - Carousel
	$('.works').owlCarousel({
		items:3,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		margin:30,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			}

		}
	});

	// testimonials - Carousel
	$('.testimonials').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true, 
	});
	// blog page sidebar - Carousel
	$('.sidebar-works').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true
	});
	// portfolio single arae - Carousel
	$('.portfolio-left').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true
	});
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle(1000);

		return false;
	})

	// works popup

	$('.works-popup').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	// works popup

	$('works-area-2 .works-popup').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});

	//  pie_progress JS
	$('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
        speed: 50
      });
	$('.pie_progress').asPieProgress('start');


	// Back to TOP 
        $('.back-top').click(function(){
          $('html,body').animate({
            scrollTop:0
          },2000);

          return false;
        }); 


        // search top icon
 
        // $('.top-popup').magnificPopup(); 

       	// search scritp

       $('.search-top').click(function(){
       		$('.top-left-block').fadeToggle('top-left-block') 

       }) 
        
}) 

$(document).ready(function(){
	var mixer = mixitup('.works_mixitup');

	var mixer = mixitup(works_mixitup, {
	    animation: {
        nudge: false
    }
});
	 
})