$(document).ready(function(){
	var form = $(".form #gform");
	$(".form #gform #emailTo").change(function(){
		var sendToVal = $(".form #gform #emailTo").val();
		console.log(sendToVal);
		switch(sendToVal){
			case "General Inquiries":
				form.attr("data-email", "johnnyzou99@gmail.com");
				break;
			case "Autonomous Rover Team":
				form.attr("data-email", "johnny.zou@mail.utoronto.ca");
				break;
			case "Combat":
				form.attr("data-email", "johnnyzou99@yahoo.ca");				
				break;
			case "3D Printing":
				form.attr("data-email", "johnnyzou99@gmail.com");
				break;
			case "SUMO":
				form.attr("data-email", "johnnyzou99@gmail.com");
				break;
			case "RoboSoccer":
				form.attr("data-email", "johnnyzou99@gmail.com");
				break;
			case "Top Secret":
				form.attr("data-email", "johnnyzou99@gmail.com");
				break;
			default:
				form.attr("data-email", "johnnyzou99@gmail.com");
		}
	});

});

//google maps
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('googleMaps'), {
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