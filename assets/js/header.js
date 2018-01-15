$(document).ready(function(){

	$(document).on("scroll",function(){
		if($(window).scrollTop() === 0) {
			$(".header .mainMenu").css("background-color", "rgba(0,0,0,0)");
		}
		else{
			$(".header .mainMenu").css("background-color", "rgba(69,82,107,0.8)");
		}
		
	})
});