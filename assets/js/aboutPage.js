$(document).ready(function(){
	// var form = $(".form #gform");
	// $(".form #gform #emailTo").change(function(){
	// 	var sendToVal = $(".form #gform #emailTo").val();
	// 	console.log(sendToVal);
	// 	switch(sendToVal){
	// 		case "General Inquiries":
	// 			form.attr("data-email", "johnnyzou99@gmail.com");
	// 			break;
	// 		case "Autonomous Rover Team":
	// 			form.attr("data-email", "johnny.zou@mail.utoronto.ca");
	// 			break;
	// 		case "Combat":
	// 			form.attr("data-email", "johnnyzou99@yahoo.ca");				
	// 			break;
	// 		case "3D Printing":
	// 			form.attr("data-email", "johnnyzou99@gmail.com");
	// 			break;
	// 		case "SUMO":
	// 			form.attr("data-email", "johnnyzou99@gmail.com");
	// 			break;
	// 		case "RoboSoccer":
	// 			form.attr("data-email", "johnnyzou99@gmail.com");
	// 			break;
	// 		case "Top Secret":
	// 			form.attr("data-email", "johnnyzou99@gmail.com");
	// 			break;
	// 		default:
	// 			form.attr("data-email", "johnnyzou99@gmail.com");
	// 	}
	// });
  var newPosition = $(document).scrollTop() - $(".infoBlock").offset().top + $(".header").outerHeight();
  if(newPosition < 0){
    newPosition = 0;
  }
  $(".sideMenu").css('top',newPosition + "px");

  // about sidebar scrolling
  $(window).on("scroll",function(){
    var newPosition = $(document).scrollTop() - $(".infoBlock").offset().top + $(".header").outerHeight();
    if(newPosition < 0){
      newPosition = 0;
    }
    $(".sideMenu").css('top',newPosition + "px");

    //Control styling
    if(window.outerWidth >= 1050){
      var scroll = $(window).scrollTop() + $(".header").outerHeight(); // how many pixels you've scrolled

      var whoWeAre_positionMarker = $('#whoWeAre_positionMarker').offset().top - parseFloat($(".infoBlock").css("padding-top"));
      var currentExecTeam_positionMarker = $('#currentExecTeam_positionMarker').offset().top - parseFloat($(".infoBlock").css("padding-top"));
      var pastExec_positionMarker = $('#pastExec_positionMarker').offset().top - parseFloat($(".infoBlock").css("padding-top"));
      var faq_positionMarker = $('#faq_positionMarker').offset().top - parseFloat($(".infoBlock").css("padding-top"));  
      var contactUs_positionMarker = $('#contactUs_positionMarker').offset().top - parseFloat($(".infoBlock").css("padding-top"));
      
      if(scroll > whoWeAre_positionMarker && scroll <= currentExecTeam_positionMarker){
        $('.sideMenu__menuItem').removeClass("sideMenu__menuItem--active");
        $("#whoWeAre__sideMenuMarker").addClass("sideMenu__menuItem--active");
      }
      else if(scroll > currentExecTeam_positionMarker && scroll <= pastExec_positionMarker){
        $('.sideMenu__menuItem').removeClass("sideMenu__menuItem--active");
        $("#execTeam__sideMenuMarker").addClass("sideMenu__menuItem--active");
      }
      else if(scroll > pastExec_positionMarker && scroll <= contactUs_positionMarker){
        $('.sideMenu__menuItem').removeClass("sideMenu__menuItem--active");
        $("#pastExecs__sideMenuMarker").addClass("sideMenu__menuItem--active");
      }
      // else if(scroll > faq_positionMarker && scroll <= contactUs_positionMarker){
      //   $('.sideMenu__menuItem').removeClass("sideMenu__menuItem--active");
      //   $("#faq__sideMenuMarker").addClass("sideMenu__menuItem--active");
      // }
      else if(scroll > contactUs_positionMarker){
        $('.sideMenu__menuItem').removeClass("sideMenu__menuItem--active");
        $("#contactUs__sideMenuMarker").addClass("sideMenu__menuItem--active");
      }
      else{
        $('.sideMenu__menuItem').removeClass("sideMenu__menuItem--active");
      }
    }
  });

  //About page click events
  $("#whoWeAre__sideMenuMarker").on("click",function(){
    window.scroll({
      top: $('#whoWeAre_positionMarker').offset().top - $(".header").outerHeight(), 
      left: 0, 
      behavior: 'smooth' 
    });
  });

  $("#execTeam__sideMenuMarker").on("click",function(){
    window.scroll({
      top: $('#currentExecTeam_positionMarker').offset().top - $(".header").outerHeight(), 
      left: 0, 
      behavior: 'smooth' 
    });
  });

  $("#pastExecs__sideMenuMarker").on("click",function(){
    window.scroll({
      top: $('#pastExec_positionMarker').offset().top - $(".header").outerHeight(), 
      left: 0, 
      behavior: 'smooth' 
    });
  });

  $("#faq__sideMenuMarker").on("click",function(){
    window.scroll({
      top: $('#faq_positionMarker').offset().top - $(".header").outerHeight(), 
      left: 0, 
      behavior: 'smooth' 
    });
  });

  $("#contactUs__sideMenuMarker").on("click",function(){
    window.scroll({
      top: $('#contactUs_positionMarker').offset().top - $(".header").outerHeight(), 
      left: 0, 
      behavior: 'smooth' 
    });
  });

});

//google maps
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('googleMaps'), {
      center: {lat: 43.660772, lng: -79.396578},
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

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    
 //    var marker = new google.maps.Marker({
  //    position: {lat: 43.6595745, lng: -79.3973729},
  //    map: map,
  //    animation: google.maps.Animation.DROP,
  //    title: 'Bahen Centre for Information Technology'
  // });

    service.getDetails({
          placeId: 'ChIJeVmuwgc1K4gR9aczwrqVfYc'
        }, function(place, status) {
          console.log(place);
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              var name = place.name;
              var index = name.indexOf(" Innovation");
              var first = name.substr(0, index);

              var second = name.substr(index + 1);


              infowindow.setContent('<div><h2 class="googleMapsPlaceName googleMapsPlaceNameFirst">' + first + '</h2>' +
                '<h2 class="googleMapsPlaceName googleMapsPlaceNameSecond">' + second + '</h2>' +
                '<p class="googleMapsAddressText">' + place.address_components[0].long_name + ' ' + place.address_components[1].short_name + '</p>' +
                '<p class="googleMapsAddressText">' + place.address_components[3].long_name + ', ' + place.address_components[5].short_name + ' ' + place.address_components[7].short_name + '</p>' +
                '<p class="googleMapsAddressText">' + place.address_components[6].long_name + '</p>' +
                '<a target="_blank" jstcache="6" class="googleMapsLink" href="' + place.url +'"> <span> View on Google Maps </span> </a></div>');
              infowindow.open(map, this);
            });
          }
        });

    // marker.setMap(map);
}