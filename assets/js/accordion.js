$(document).ready(function(){
	$(".accordion__title").click(function(){
		console.log("hi");

		if($(this).siblings(".accordion__contentWrapper").css("max-height") != "0px"){
			// Close
			$(this).removeClass("accordion__title--active");
			$(this).siblings(".accordion__contentWrapper").css("max-height", "0px");
		}
		else{
			// Open
			$(this).addClass("accordion__title--active");
			var elementScrollHeight = $(this).siblings(".accordion__contentWrapper").get(0).scrollHeight;
			$(this).siblings(".accordion__contentWrapper").css("max-height",elementScrollHeight + "px");
		}

	});
});