$(document).ready(function(){
	if($(window).scrollTop() != 0){
		$(".header .mainMenu").css("background-color", "rgba(69,82,107,0.8)");
	}

	$(document).on("scroll",function(){
		if($(window).scrollTop() === 0) {
			$(".header .mainMenu").css("background-color", "rgba(0,0,0,0)");
		}
		else{
			$(".header .mainMenu").css("background-color", "rgba(69,82,107,0.8)");
		}
	})


	// Mobile Menu opening
	$("#mobileNav__open").on("click",function(){
		// Display the menu
		$(".mainMenu__list").addClass("mainMenu__list--active");

		//Hide the icon
		$('#mobileNav__open').addClass("mainMenu__mobileNavIcon--noDisplay");
		//Show the close icon
		$('#mobileNav__close').removeClass("mainMenu__mobileNavIcon--noDisplay");
	});

	// Mobile Menu closing
	$("#mobileNav__close").on("click",function(){
		//Hide the menu
		$(".mainMenu__list").removeClass("mainMenu__list--active");

		//Hide the icon
		$('#mobileNav__close').addClass("mainMenu__mobileNavIcon--noDisplay");
		//Show the open icon
		$('#mobileNav__open').removeClass("mainMenu__mobileNavIcon--noDisplay");
	});

});

function noScroll(){	
	$(document).off("scroll");
}