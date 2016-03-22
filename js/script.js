

$(document).ready(function(){	

	$(".selector").hover(function () {
		$(this).children("a").children("i").
		addClass("fa-hover-rotate");
	})

	$(".selector").mouseleave(function () {
		$(this).children("a").children("i").
		removeClass("fa-hover-rotate");
	})


	$("section").hover(function(){
		var first = $(this).attr("class").split(" ")[0];
		$(this).removeClass();
		$(this).addClass(first);
		$(this).addClass("section-hover");
	})
	
	$("section").mouseleave(function(){
		var first = $(this).attr("class").split(" ")[0];
		$(this).removeClass();
		$(this).addClass(first);
	})
});