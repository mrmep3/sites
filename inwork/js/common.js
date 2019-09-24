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

	$(".top_menu a, .buttons a").mPageScroll2id();

	$(".section-menu__content-grid").mixItUp();

	$(".section-menu__content li").click(function() {
		$(".section-menu__content li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	//$(".popup_content").magnificPopup({type:"inline"});

	$(".menu_item").magnificPopup({
	  delegate: "a",
	  removalDelay: 50, //delay removal by X to allow out-animation
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr("data-effect");
	    }
 		},
	  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});

	$(".popup-gmaps").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$(".carousel").owlCarousel({
		loop : true,
		responsive: {
			0 : {
				items : 1, 
				nav : false,
				dots : true
			}
		},
		navText : ""
	});
	var owl = $('.carousel');
	owl.owlCarousel();
	$(".next_button").click(function() {
		owl.trigger("next.owl.carousel");
	});
	$(".prev_button").click(function() {
		owl.trigger("prev.owl.carousel");
	});

});

