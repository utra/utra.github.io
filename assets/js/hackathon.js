//google maps
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('hackathonMaps'), {
      center: {lat: 40.674, lng: -73.945},
      zoom: 12,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}

//smooth scrolling

$(document).ready(function(){
	$('a[href^="#"]').click(function() {
		var href = $(this).attr('href');

		if( $('.header').length ) {
            menuSize = $('.header').outerHeight();
          }

		$('body,html').animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});

		return false;
	});

});

$(window).scroll(function() {
	var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var aboutPosition = $('#about').offset().top; // pixels to top of about
    var locationPosition = $('#location').offset().top; // pixels to top of location
    var faqPosition = $('#faq').offset().top; // pixels to top of faq
    var sponsorsPosition = $('#sponsors').offset().top; // pixels to top of sponsors
    
    if(scroll < aboutPosition){
        $('.header').attr('class',"header");
    }
    else if(scroll >= aboutPosition && scroll < locationPosition){
    	//scrolled to about
        $('.header').attr('class',"header header--aboutActive");
    }
    else if(scroll >= locationPosition && scroll < faqPosition){
    	//scrolled to location
        $('.header').attr('class',"header header--locationActive");
    }
    else if(scroll >= faqPosition && scroll < sponsorsPosition){
    	//scrolled to faq
        $('.header').attr('class',"header header--faqActive");
    }
    else if(scroll >= sponsorsPosition){
     	//scrolled to sponsors
        $('.header').attr('class',"header header--sponsorsActive");
    }

});
