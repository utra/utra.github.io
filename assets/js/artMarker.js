$(document).ready(function(){

	var hoverTimeOuts = [];

	//Fader
	$(".robotMarker__imageFader").on("mouseenter", function(){
		$(".robotMarker__imageFader").css("opacity","0.5");

		//Function for changing the order the dots appear
		(function($) {
			$.fn.shuffle = function() {
				// credits: http://bost.ocks.org/mike/shuffle/
				var m = this.length, t, i;

				while (m) {
					i = Math.floor(Math.random() * m--);

					t = this[m];
					this[m] = this[i];
					this[i] = t;
				}
				return this;
			};
		}(jQuery));

		$(".robotMarker__markerCircle").shuffle().each(function(index){
			var that = this;
			hoverTimeOuts.push(
				setTimeout(function(){
					$(that).css("opacity", "0.7");
				}, 250*index)
			);

		});
		// $(".robotMarker__markerCircle").css("opacity", "0.7");


		
	});

	$(".robotMarker__imageFader").on("mouseleave", function(){
		if( $(".robotMarker__markerCircle:hover").length !=0 ){
			// console.log("hovering marker");
		}
		else{
			// Stop future dots from appearing
			for(var i =0; i<hoverTimeOuts.length; i++){
				clearTimeout(hoverTimeOuts[i]);
			}

			$(".robotMarker__imageFader").css("opacity","0");
			$(".robotMarker__markerCircle").css("opacity", "0");
		}
	});

	// Camera
	$(".robotMarker__marker--camera .robotMarker__markerCircle").on("mouseenter", function(){
		$(".robotMarker__marker--camera .robotMarker__markerCircle").css("opacity", "1");
		$(".robotMarker__marker--camera .robotMarker__markerLine").css("opacity", "1");
		$(".robotMarker__marker--camera .robotMarker__markerDescription").css("opacity", "1");
	});

	$(".robotMarker__marker--camera .robotMarker__markerCircle").on("mouseleave", function(){
		$(".robotMarker__marker--camera .robotMarker__markerCircle").css("opacity", "0.7");
		$(".robotMarker__marker--camera .robotMarker__markerLine").css("opacity", "0");
		$(".robotMarker__marker--camera .robotMarker__markerDescription").css("opacity", "0");
	});

	// Hydraulic Shocks
	$(".robotMarker__marker--hydraulicShocks .robotMarker__markerCircle").on("mouseenter", function(){
		$(".robotMarker__marker--hydraulicShocks .robotMarker__markerCircle").css("opacity", "1");
		$(".robotMarker__marker--hydraulicShocks .robotMarker__markerLine").css("opacity", "1");
		$(".robotMarker__marker--hydraulicShocks .robotMarker__markerDescription").css("opacity", "1");
	});

	$(".robotMarker__marker--hydraulicShocks .robotMarker__markerCircle").on("mouseleave", function(){
		$(".robotMarker__marker--hydraulicShocks .robotMarker__markerCircle").css("opacity", "0.7");
		$(".robotMarker__marker--hydraulicShocks .robotMarker__markerLine").css("opacity", "0");
		$(".robotMarker__marker--hydraulicShocks .robotMarker__markerDescription").css("opacity", "0");
	});

	// GPS
	$(".robotMarker__marker--gps .robotMarker__markerCircle").on("mouseenter", function(){
		$(".robotMarker__marker--gps .robotMarker__markerCircle").css("opacity", "1");
		$(".robotMarker__marker--gps .robotMarker__markerLine").css("opacity", "1");
		$(".robotMarker__marker--gps .robotMarker__markerDescription").css("opacity", "1");
	});

	$(".robotMarker__marker--gps .robotMarker__markerCircle").on("mouseleave", function(){
		$(".robotMarker__marker--gps .robotMarker__markerCircle").css("opacity", "0.7");
		$(".robotMarker__marker--gps .robotMarker__markerLine").css("opacity", "0");
		$(".robotMarker__marker--gps .robotMarker__markerDescription").css("opacity", "0");
	});

	// Laser Range Finder
	$(".robotMarker__marker--lrf .robotMarker__markerCircle").on("mouseenter", function(){
		$(".robotMarker__marker--lrf .robotMarker__markerCircle").css("opacity", "1");
		$(".robotMarker__marker--lrf .robotMarker__markerLine").css("opacity", "1");
		$(".robotMarker__marker--lrf .robotMarker__markerDescription").css("opacity", "1");
	});

	$(".robotMarker__marker--lrf .robotMarker__markerCircle").on("mouseleave", function(){
		$(".robotMarker__marker--lrf .robotMarker__markerCircle").css("opacity", "0.7");
		$(".robotMarker__marker--lrf .robotMarker__markerLine").css("opacity", "0");
		$(".robotMarker__marker--lrf .robotMarker__markerDescription").css("opacity", "0");
	});

	// Energency Stop
	$(".robotMarker__marker--emergencyStops .robotMarker__markerCircle").on("mouseenter", function(){
		$(".robotMarker__marker--emergencyStops .robotMarker__markerCircle").css("opacity", "1");
		$(".robotMarker__marker--emergencyStops .robotMarker__markerLine").css("opacity", "1");
		$(".robotMarker__marker--emergencyStops .robotMarker__markerDescription").css("opacity", "1");
	});

	$(".robotMarker__marker--emergencyStops .robotMarker__markerCircle").on("mouseleave", function(){
		$(".robotMarker__marker--emergencyStops .robotMarker__markerCircle").css("opacity", "0.7");
		$(".robotMarker__marker--emergencyStops .robotMarker__markerLine").css("opacity", "0");
		$(".robotMarker__marker--emergencyStops .robotMarker__markerDescription").css("opacity", "0");
	});

});