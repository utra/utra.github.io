$(document).ready(function(){

	function moveLeft(){
		var increment;
		var sizeOfOnePic;
		if(window.innerWidth < 450){
			sizeOfOnePic = 245;
			increment = 245; //1 photo per page
		}
		else if(window.innerWidth < 825){
			sizeOfOnePic = 310;
			increment = 310; //1 photo per page
		}
		else if(window.innerWidth < 1350){
			sizeOfOnePic = 310;
			increment = 620; //2 photo per page
		}
		else{
			sizeOfOnePic = 310;
			increment = 930; //3 photo per page
		}
		var totalPics = $("#gallery").children().children().children().length
		var picsPerPage = increment/sizeOfOnePic
		var maxPages = Math.floor((totalPics/2) / picsPerPage)
		var maxLeft = (maxPages-1) * increment * -1
		// var maxLeft = (( parseInt($("#gallery").children().length) * 3-(increment/sizeOfOnePic)) * sizeOfOnePic) * -1;

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
		var increment;
		var sizeOfOnePic;
		if(window.innerWidth < 450){
			sizeOfOnePic = 245;
			increment = 245;
		}
		else if(window.innerWidth < 825){
			sizeOfOnePic = 310;
			increment = 310;
		}
		else if(window.innerWidth < 1350){
			sizeOfOnePic = 310;
			increment = 620;
		}
		else{
			sizeOfOnePic = 310;
			increment = 930;
		}
		var totalPics = $("#gallery").children().children().children().length
		var picsPerPage = increment/sizeOfOnePic
		var maxPages = Math.floor((totalPics/2) / picsPerPage)
		var maxLeft = (maxPages-1) * increment * -1
		// var maxLeft = (( parseInt($("#gallery").children().length) * 3-(increment/sizeOfOnePic)) * sizeOfOnePic) * -1;

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

	function setup(){
		// initialize the clicker opacity
		var sizeOfOnePic;
		var increment;
		if(window.innerWidth < 450){
			sizeOfOnePic = 245;
			increment = 245;
		}
		else if(window.innerWidth < 825){
			sizeOfOnePic = 310;
			increment = 310;
		}
		else if(window.innerWidth < 1350){
			sizeOfOnePic = 310;
			increment = 620;
		}
		else{
			sizeOfOnePic = 310;
			increment = 930;
		}
		var totalPics = $("#gallery").children().children().children().length
		var picsPerPage = increment/sizeOfOnePic
		var maxPages = Math.floor((totalPics/2) / picsPerPage)
		var maxLeft = (maxPages-1) * increment *-1
		// var maxLeft = (( parseInt($("#gallery").children().length) * 3-(increment/sizeOfOnePic)) * sizeOfOnePic) * -1;
		var left = parseFloat($("#gallery").css("left"));
		
		if(left >= 0){
			$("#galleryLeft").parent().addClass("galleryGrid__arrow--deactivated");
		}
		else{
			$("#galleryLeft").parent().removeClass("galleryGrid__arrow--deactivated");
		}

		if(left <= maxLeft){
			$("#galleryRight").parent().addClass("galleryGrid__arrow--deactivated");
		}
		else{
			$("#galleryRight").parent().removeClass("galleryGrid__arrow--deactivated");
		}
	}

	$("#galleryLeft").on("click",moveLeft);
	$("#galleryRight").on("click",moveRight);

	$(window).on("resize", function(){
		$("#gallery").css("left","0px");
		setup();
	})

	setup();
	

});