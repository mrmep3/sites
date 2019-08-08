$(document).ready(function() {
	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_menu ul a").click(function() {
		$(".top_menu").fadeOut(700);
		$(".sandwich").toggleClass("active");
	}).append("<span>");
	
	$(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_menu").fadeOut(700);
			$(".top_menu a").removeClass("fadeInLeft animated");
		} else {
			$(".top_menu").fadeIn(700);
			$(".top_menu a").addClass("fadeInLeft animated");
		}
	});

});