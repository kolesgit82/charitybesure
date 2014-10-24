(function() {
        "use strict";


        // Preloader
        var $preloader = $("#preloader-wrapper");
        $preloader.fadeOut();

        //datepicker
		$('#datetimepicker2').datetimepicker({
			language: 'ru'
		});
		
		// Preloader
        $('.carousel').carousel({
            interval: 7000
        })

		//show hide donate button
	
		$(window).resize(function() {
			showhideDonate();
		});
	
		$(function() {
			showhideDonate();
		});
	
		function showhideDonate() {
			if ($(window).width() >= 977 ) {
				$("#donate-button-subpages").show();
			} else {
				$("#donate-button-subpages").hide();
			}
		}

        //Rotate toggle icon 
        $(function() {
            $('#contact-toggle h3').click(function() {
                $('#contact-toggle .collapse').toggle();
                $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up', 400);
            });
        });


        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('.page-scroll a').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 50
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });

        // Flickr    
        $(function() {
            var id = '49269824@N04';
            var limit = '6';

            // Flickr Photostream feed link.
            $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?id=52617155@N08&lang=en-us&format=rss_200" + id + "&lang=en-us&format=json&jsoncallback=?",

                function(data) {
                    $.each(data.items,

                        function(i, item) {

                            // Number of thumbnails to show.            
                            if (i < limit) {

                                // Create images and append to div id flickr and wrap link around the image.
                                $("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo("#flickr-stream").wrap("<a href='" + item.media.m.replace('_m', '_z') + "' name='" + item.link + "' title='" + item.title + "'></a>");


                            }

                        });

                });

        });

        //PrettyPhoto
        $(document).ready(function() {
            $("a[data-gal^='prettyPhoto']").prettyPhoto({
                animation_speed: 'normal',
                theme: 'light_square',
                slideshow: 3000,
                autoplay: false,
                autoplay_slideshow: false
            });
        });

        //Modernizer touch
        $(document).ready(function() {
            if (Modernizr.touch) {
                // show the close overlay button
                $(".close-overlay").removeClass("hidden");
                // handle the adding of hover class when clicked
                $(".img").click(function(e) {
                    if (!$(this).hasClass("hover")) {
                        $(this).addClass("hover");
                    }
                });
                // handle the closing of the overlay
                $(".close-overlay").click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if ($(this).closest(".img").hasClass("hover")) {
                        $(this).closest(".img").removeClass("hover");
                    }
                });
            } else {
                // handle the mouseenter functionality
                $(".img").mouseenter(function() {
                        $(this).addClass("hover");
                    })
                    // handle the mouseleave functionality
                    .mouseleave(function() {
                        $(this).removeClass("hover");
                    });
            }
        });


		//tooltips
        $(function() {
            $("[data-toggle='tooltip']").tooltip();
        });


})(jQuery);