$(document).ready(function(){

	var hoverTimeOuts = [];

	//Fader
	$(".robotMarker__imageFader").on("mouseenter", function(){
		$(".robotMarker__imageFader").css("opacity","0.2");

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


	// Ultrasonic sensor
	$(".robotMarker__marker--IRSensor .robotMarker__markerCircle").on("mouseenter", function(){
		$(".robotMarker__marker--IRSensor .robotMarker__markerCircle").css("opacity", "1");
		$(".robotMarker__marker--IRSensor .robotMarker__markerLine").css("opacity", "1");
		$(".robotMarker__marker--IRSensor .robotMarker__markerDescription").css("opacity", "1");
	});

	$(".robotMarker__marker--IRSensor .robotMarker__markerCircle").on("mouseleave", function(){
		$(".robotMarker__marker--IRSensor .robotMarker__markerCircle").css("opacity", "0.7");
		$(".robotMarker__marker--IRSensor .robotMarker__markerLine").css("opacity", "0");
		$(".robotMarker__marker--IRSensor .robotMarker__markerDescription").css("opacity", "0");
	});

	// Aluminium Metal Chassis
	$(".robotMarker__marker--chassis .robotMarker__markerCircle").on("mouseenter", function(){
		$(".robotMarker__marker--chassis .robotMarker__markerCircle").css("opacity", "1");
		$(".robotMarker__marker--chassis .robotMarker__markerLine").css("opacity", "1");
		$(".robotMarker__marker--chassis .robotMarker__markerDescription").css("opacity", "1");
	});

	$(".robotMarker__marker--chassis .robotMarker__markerCircle").on("mouseleave", function(){
		$(".robotMarker__marker--chassis .robotMarker__markerCircle").css("opacity", "0.7");
		$(".robotMarker__marker--chassis .robotMarker__markerLine").css("opacity", "0");
		$(".robotMarker__marker--chassis .robotMarker__markerDescription").css("opacity", "0");
	});

	// Dual Motors
	$(".robotMarker__marker--motors .robotMarker__markerCircle").on("mouseenter", function(){
		$(".robotMarker__marker--motors .robotMarker__markerCircle").css("opacity", "1");
		$(".robotMarker__marker--motors .robotMarker__markerLine").css("opacity", "1");
		$(".robotMarker__marker--motors .robotMarker__markerDescription").css("opacity", "1");
	});

	$(".robotMarker__marker--motors .robotMarker__markerCircle").on("mouseleave", function(){
		$(".robotMarker__marker--motors .robotMarker__markerCircle").css("opacity", "0.7");
		$(".robotMarker__marker--motors .robotMarker__markerLine").css("opacity", "0");
		$(".robotMarker__marker--motors .robotMarker__markerDescription").css("opacity", "0");
	});

});