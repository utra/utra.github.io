$(document).ready(function(){
	var increment = 930;

	var maxLeft = (( parseInt($("#gallery").children().length) - 1) * 930) * -1;


	function moveLeft(){
		$("#galleryLeft").off("click");
		var left = parseFloat($("#gallery").css("left"));
		if(left < 0){
			// let users know that they cannot push the left button anymore
			if( (left + increment) >= 0){
				$("#galleryLeft").parent().addClass("galleryGrid__arrow--deactivated");
			}

			// if the right arrow is deactivated, let users know they can push the right arrow now
			if( $("#galleryRight").parent().hasClass("galleryGrid__arrow--deactivated") ){
				$("#galleryRight").parent().removeClass("galleryGrid__arrow--deactivated");
			}

			var newLeft = left + increment;
			$("#gallery").css("left",newLeft + "px");

			// Enable the left arrow again after 500 miliseconds
			setTimeout(function(){ 
				$("#galleryLeft").on("click",moveLeft);
			}, 500);
		}
		else{
			$("#galleryLeft").on("click",moveLeft);
		}
	}

	function moveRight(){
		$("#galleryRight").off("click");
		var left = parseFloat($("#gallery").css("left"));
		if(left > maxLeft){
			// let users know that they cannot push the right button anymore
			left = parseFloat($("#gallery").css("left"));
			if((left - increment) <= maxLeft){
				$("#galleryRight").parent().addClass("galleryGrid__arrow--deactivated");
			}

			// if the left arrow is deactivated, let users know they can push the right arrow now
			if( $("#galleryLeft").parent().hasClass("galleryGrid__arrow--deactivated") ){
				$("#galleryLeft").parent().removeClass("galleryGrid__arrow--deactivated");
			}

			var newLeft = left - increment;
			$("#gallery").css("left",newLeft + "px");

			// Enable the right arrow again after 500 miliseconds
			setTimeout(function(){ 
				$("#galleryRight").on("click",moveRight);
			}, 500);
		}
		else{
			$("#galleryRight").on("click",moveRight);
		}
	}

	$("#galleryLeft").on("click",moveLeft);
	$("#galleryRight").on("click",moveRight);

});