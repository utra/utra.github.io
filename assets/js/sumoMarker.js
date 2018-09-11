$(document).ready(function(){

	//Fader
	$(".sumoRobot__imageFader").on("mouseenter", function(){
		$(".sumoRobot__imageFader").css("opacity","0.2");

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

		$(".sumoRobot__markerCircle").shuffle().each(function(index){
			var that = this;
			setTimeout(function(){
				$(that).css("opacity", "0.7");
			}, 250*index);
		});
		// $(".sumoRobot__markerCircle").css("opacity", "0.7");



		
	});

	$(".sumoRobot__imageFader").on("mouseleave", function(){
		if( $(".sumoRobot__markerCircle:hover").length !=0 ){
			// console.log("hovering marker");
		}
		else{
			$(".sumoRobot__imageFader").css("opacity","0");
			$(".sumoRobot__markerCircle").css("opacity", "0");
		}
	});


	// Ultrasonic sensor
	$(".sumoRobot__marker--IRSensor .sumoRobot__markerCircle").on("mouseenter", function(){
		$(".sumoRobot__marker--IRSensor .sumoRobot__markerCircle").css("opacity", "1");
		$(".sumoRobot__marker--IRSensor .sumoRobot__markerLine").css("opacity", "1");
		$(".sumoRobot__marker--IRSensor .sumoRobot__markerDescription").css("opacity", "1");
	});

	$(".sumoRobot__marker--IRSensor .sumoRobot__markerCircle").on("mouseleave", function(){
		$(".sumoRobot__marker--IRSensor .sumoRobot__markerCircle").css("opacity", "0.7");
		$(".sumoRobot__marker--IRSensor .sumoRobot__markerLine").css("opacity", "0");
		$(".sumoRobot__marker--IRSensor .sumoRobot__markerDescription").css("opacity", "0");
	});

	// Aluminium Metal Chassis
	$(".sumoRobot__marker--chassis .sumoRobot__markerCircle").on("mouseenter", function(){
		$(".sumoRobot__marker--chassis .sumoRobot__markerCircle").css("opacity", "1");
		$(".sumoRobot__marker--chassis .sumoRobot__markerLine").css("opacity", "1");
		$(".sumoRobot__marker--chassis .sumoRobot__markerDescription").css("opacity", "1");
	});

	$(".sumoRobot__marker--chassis .sumoRobot__markerCircle").on("mouseleave", function(){
		$(".sumoRobot__marker--chassis .sumoRobot__markerCircle").css("opacity", "0.7");
		$(".sumoRobot__marker--chassis .sumoRobot__markerLine").css("opacity", "0");
		$(".sumoRobot__marker--chassis .sumoRobot__markerDescription").css("opacity", "0");
	});



});