$(document).ready(function() {

	$(".portfolio_grid").mixItUp( {
		animation: {
			effects: "fade rotateZ(180deg)",
			duration: 600
		}
	});

	//var mixer = mixitup(".portfolio_grid", {
	//	selectors: {
	//		target: ".mix"
	//	},
	//	animation: {
	//		effects: "fade rotateZ(180deg)",
	//		duration: 450
	//	}
	//});

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();


	$(".top_menu ul a").mPageScroll2id();


	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline"});

	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".portf_descr").attr("id", "work_" + i);
	});

	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_menu ul a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");
	
	$(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_text").removeClass("h_opacify");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("h_opacify");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		}
	});
});

$(window).on('load', function(){
	$(".loaderInner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	$(".top_text h1, .top_text p").animated("fadeInDown", "fadeOutUp");
		//$(".top_text h1").animated("fadeInDown", "fadeOutUp");
});
