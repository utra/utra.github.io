$(document).ready(function(){

	var hoverTimeOuts = [];

	//Fader
	$(".robotMarker__imageFader").on("mouseenter", function(){
		$(this).css("opacity","0.2");

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

		$(this).parent().find(".robotMarker__markerCircle").shuffle().each(function(index){
			var that = this;
			hoverTimeOuts.push(
				setTimeout(function(){
					$(that).css("opacity", "0.7");
				}, 250*index)
			);

		});
		
	});

	$(".robotMarker__imageFader").on("mouseleave", function(){

		if( $(this).parent().find(".robotMarker__markerCircle:hover").length !=0 ){
			// console.log("hovering marker");
		}
		else{
			// Stop future dots from appearing
			for(var i =0; i<hoverTimeOuts.length; i++){
				clearTimeout(hoverTimeOuts[i]);
			}

			$(this).css("opacity","0");
			$(this).parent().find(".robotMarker__markerCircle").css("opacity", "0");
		}
	});


	// Markers
	$(".robotMarker__markerCircle").on("mouseenter", function(){
		$(this).parent().find(".robotMarker__markerCircle").css("opacity","1");
		$(this).parent().find(".robotMarker__markerLine").css("opacity", "1");
		$(this).parent().find(".robotMarker__markerDescription").css("opacity", "1");
	});

	$(".robotMarker__markerCircle").on("mouseleave", function(){
		$(this).parent().find(".robotMarker__markerCircle").css("opacity", "0.7");
		$(this).parent().find(".robotMarker__markerLine").css("opacity", "0");
		$(this).parent().find(".robotMarker__markerDescription").css("opacity", "0");
	});


	//For more than one scroll
	if($(".markerScroll").length != 0){
		function updateOpacity(newLeft){
			var scrollDistance = parseFloat($(".markerScroll__markerWrapper").css("width"));
			var maxLeft = ($(".markerScroll__allMarkers").children().length -1) * scrollDistance * -1

			if(newLeft >= 0){
				// turn off left button
				$(".markerScroll .markerScroll__leftScroll").addClass("markerScroll__arrow--deactivated");
			}
			else{
				$(".markerScroll .markerScroll__leftScroll").removeClass("markerScroll__arrow--deactivated");
			}

			if(newLeft <= maxLeft){
				// turn off right button
				$(".markerScroll .markerScroll__rightScroll").addClass("markerScroll__arrow--deactivated");
			}
			else{
				$(".markerScroll .markerScroll__rightScroll").removeClass("markerScroll__arrow--deactivated");
			}
		}
		function leftArrowButton(){
			$(".markerScroll .markerScroll__leftScroll i").off("click");
			var scrollDistance = parseFloat($(".markerScroll__markerWrapper").css("width"));
			var currentLeft = parseFloat($(".markerScroll__allMarkers").css("left"));
			var newLeft = currentLeft + scrollDistance;
			if(currentLeft < 0){
				updateOpacity(newLeft);
				$(".markerScroll__allMarkers").css("left",newLeft);

				setTimeout(function(){ 
					$(".markerScroll .markerScroll__leftScroll i").on("click", leftArrowButton);
				}, 500);
			}
			else{
				$(".markerScroll .markerScroll__leftScroll i").on("click", leftArrowButton);
			}
		}
		function rightArrowButton(){
			$(".markerScroll .markerScroll__rightScroll i").off("click");
			var scrollDistance = parseFloat($(".markerScroll__markerWrapper").css("width"));
			var currentLeft = parseFloat($(".markerScroll__allMarkers").css("left"));
			var newLeft = currentLeft - scrollDistance;

			var maxLeft = ($(".markerScroll__allMarkers").children().length -1) * scrollDistance * -1
			if(currentLeft > maxLeft){
				updateOpacity(newLeft);
				$(".markerScroll__allMarkers").css("left", newLeft);

				setTimeout(function(){ 
					$(".markerScroll .markerScroll__rightScroll i").on("click", rightArrowButton);
				}, 500);
			}
			else{
				$(".markerScroll .markerScroll__rightScroll i").on("click", rightArrowButton);
			}
		}
		$(".markerScroll .markerScroll__leftScroll i").on("click", leftArrowButton);
		$(".markerScroll .markerScroll__rightScroll i").on("click", rightArrowButton);
	}
});

