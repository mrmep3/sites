$(document).ready(function() {

	function heightDetect() {
		$("header").css("min-height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	
	$(".tabs_header .tab_item").not(":first").hide();
	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".s_contacts .tab_item").not(":first").hide();
	$(".contacts_top .tab").click(function() {
		$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_phone .tab_item").not(":first").hide();
	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$.stellar({
		responsive: true
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
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	$(".next_button").click(function() {
		owl.trigger("next.owl.carousel");
	});
	$(".prev_button").click(function() {
		owl.trigger("prev.owl.carousel");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_c").magnificPopup();

});

$(window).load(function() {
	$(".top_header h1").animated("fadeInDown", "fadeOutUp");
	$(".top_header h2").animated("fadeInUp", "fadeOutDown");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".s_prof h2").animated("fadeInUp", "fadeOut");
});