

$(document).ready(function(){
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