//google maps
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('hackathonMaps'), {
      center: {lat: 43.659986, lng: -79.38869},
      zoom: 17,
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

    var marker = new google.maps.Marker({
	   position: {lat: 43.659986, lng: -79.38869},
	   map: map,
	   animation: google.maps.Animation.DROP,
	   title: 'Mars Discovery District'
	});
    marker.setMap(map);
}

//smooth scrolling
$(document).ready(function(){
	$('a[href^="#"]').click(function() {
		var href = $(this).attr('href');

    window.scroll({
      top: $(href).offset().top - $('.header').outerHeight(), 
      left: 0, 
      behavior: 'smooth' 
    });

    if(window.outerWidth < 1050){
      $("#mobileNav__close").click();
    }

    // window.location.hash = href;

		return false;
	});

	$(window).scroll(function() {
    if(window.outerWidth >=1050){
  		var scroll = $(window).scrollTop(); // how many pixels you've scrolled
      var aboutPosition = $('#about').offset().top - $(window).height(); // pixels to top of about
      var schedulePosition = $('#schedule').offset().top - $(window).height();
      var locationPosition = $('#location').offset().top - $(window).height(); // pixels to top of location
      var faqPosition = $('#faq').offset().top - $(window).height(); // pixels to top of faq
      var sponsorsPosition = $('#sponsors').offset().top - $(window).height(); // pixels to top of sponsors
      
      if(scroll > aboutPosition && scroll <= schedulePosition){
      	//scrolled to about
          $('.header').attr('class',"header header--aboutActive");
      }
      else if(scroll > schedulePosition && scroll <= locationPosition){
      	//scrolled to location
          $('.header').attr('class',"header header--scheduleActive");
      }
      else if(scroll > locationPosition && scroll <= faqPosition){
        //scrolled to location
          $('.header').attr('class',"header header--locationActive");
      }
      else if(scroll > faqPosition && scroll <= sponsorsPosition){
      	//scrolled to location
          $('.header').attr('class',"header header--faqActive");
      }
      else if(scroll > sponsorsPosition){
      	//scrolled to faq
          $('.header').attr('class',"header header--sponsorsActive");
      }
      else{
          $('.header').attr('class',"header");
      }
    }
	});

  // Countdown stuff to the date
  var counter = $("#hackathonCounter");

  var countDownDate = new Date("Sep 29, 2018 8:00:00").getTime();

  // Update the count down every 1 second
  var interval = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    if(window.outerWidth >= 1050){
      $("#hackathonCounter").html(days + " Days | " + hours + " Hours | " + minutes + " Minutes | " + seconds + " Seconds")
    }
    else{
      $("#hackathonCounter").html((days * 24 + hours) + " Hours | " + minutes + " Minutes | " + seconds + " Seconds")
    }
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("#hackathonCounter").innerHTML = "HACKING NOW";
    }
  }, 1000);


});


