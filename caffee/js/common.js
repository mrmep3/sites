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
			$(".top_menu a").removeClass("fadeInDown animated");
		} else {
			$(".top_menu").fadeIn(700);
			$(".top_menu a").addClass("fadeInDown animated");
		}
	});

	function heightDetect() {
	$(".main_head").css("height", $(window).height());
		};
		heightDetect();
		$(window).resize(function() {
			heightDetect();
	});

	$(".top_menu a").mPageScroll2id();

	$(".section-menu__content-grid").mixItUp();

	$(".section-menu__content li").click(function() {
		$(".section-menu__content li").removeClass("active");
		$(this).addClass("active");
	});

});