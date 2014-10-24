// 
//
// Cleaned up with JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
// http://www.jshint.com/
// 
//  
//
(function() {
    "use strict";

    // Define your library strictly...

    // Preloader
    var $preloader = $("#preloader-wrapper");
    $preloader.fadeOut();

    //datepicker
    $('#datetimepicker2').datetimepicker({
        language: 'ru'
    });

    //Initialize Carousel
    $('#home .carousel , #about .carousel , #events .carousel').carousel({
        interval: 7000
    });

    // Sample map modal
    function initialize() {
        var map_canvas = document.getElementById('map-modal-event');
        var map_options = {
            center: new google.maps.LatLng(44.5403, -78.5463),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(map_canvas, map_options);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    $("#mapModal").on("shown.bs.modal", function() {
        initialize();
    });


    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 100) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    //show hide donate button
    $(window).scroll(function() {
        showhideDonate();
    });

    $(window).resize(function() {
        showhideDonate();
    });

    $(function() {
        showhideDonate();
    });

    function showhideDonate() {
        if ($(window).width() >= 977 && $(".navbar").offset().top > 100) {
            $("#donate-homepage").show();
        } else {
            $("#donate-homepage").hide();
        }
    }

    //tiny scrollbar
    var $scrollbar = $("#custom-scrollbar-rec-news");
    $scrollbar.tinyscrollbar();

    //Google Map Skin 
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);
    // The latitude and longitude to center the map
    var myLatlng = new google.maps.LatLng(40.6700, -73.9400); // New York
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var myMapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 12,
            center: myLatlng,

            // How you would like to style the map. 
            styles: [{
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#cdd9d9"
                }, {
                    "weight": 0.1
                }]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 65
                }]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 51
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "saturation": -100
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 30
                }]
            }, {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 40
                }]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "saturation": -100
                }]
            }, {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "saturation": -100
                }, {
                    "lightness": -25
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [

                ]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#E6A329"
                }, {
                    "weight": 1
                }]
            }]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');


        // Create the Google Map using out element and options defined above
        var map = new google.maps.Map(mapElement, myMapOptions);
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<div id="mapInfoBox">' +
            '<br><h2 id="firstHeading" class="firstHeading">Get in touch!</h2>' +
            '<h4><i class="fa fa-car text-primary"></i>&nbsp;&nbsp;&nbsp;&nbsp;<b>Brooklyn, New York</b></h4>' +
            '<h4><i class="fa fa-envelope text-primary"></i>&nbsp;&nbsp;&nbsp;&nbsp;<b>info@yokcreative.com</b></h4>' +
            '<h4><i class="fa fa-send text-primary"></i>&nbsp;&nbsp;&nbsp;&nbsp;<b>543.999.1463</b></h4><br>' +
            '<p>Interested in volunteering? Inquiring about job open positions?<br>Just want to chat about an idea? We would love to hear from you.</p>' +
            '</div>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: 'img/map-marker.svg',

        });
        google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
            infowindow.open(map, marker);
        });


    }



    //intialize jQuery countTo Plugin
    // start all the timers
    $('.timer').each(count);

    // restart a timer when a button is clicked
    $('.restart').click(function(event) {
        event.preventDefault();
        var target = $(this).data('target');
        count.call($(target));
        return false;
    });

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
        return false;
    }

    // Flickr    
    $(function() {
        var id = '49269824@N04';
        var limit = '9';

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


    //Rotate toggle icon 
    $(function() {
        $('#contact-toggle h3').click(function() {
            $('#contact-toggle .collapse').toggle();
            $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up', 400);
            event.preventDefault();
        });
    });


    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
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
        return false;
    });

    //PrettyPhoto
    $(document).ready(function() {
        $("area[data-gal^='prettyPhoto']").prettyPhoto();
        $(".gallery:first a[data-gal^='prettyPhoto']").prettyPhoto({
            animation_speed: 'normal',
            theme: 'light_square',
            slideshow: 3000,
            autoplay_slideshow: false
        });
        $(".gallery:gt(0) a[data-gal^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast',
            theme: 'light_square',
            slideshow: 3000,
            hideflash: false
        });

        $("#custom_content a[data-gal^='prettyPhoto']:first").prettyPhoto({
            custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
            changepicturecallback: function() {
                initialize();
            }
        });

        $("#custom_content a[data-gal^='prettyPhoto']:last").prettyPhoto({
            custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
            changepicturecallback: function() {
                _bsap.exec();
            }

        });
    });



})(jQuery);