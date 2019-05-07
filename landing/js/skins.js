$(document).ready(function() {

	var set_style = $("#template_settings");

	$("body").append("<div class='settings'><style>.settings{background:#fff;position:fixed;top:50%;margin-top:-250px;left:0;padding:5px;z-index:11}.settings div{width:30px;height:30px;background:#000;margin:3px 0;cursor:pointer;transition:all .2s}.settings div.active{box-shadow: rgba(255,255,255,.3) 0 0 0 3px inset}</style>");

	var colors = {
		tomato : "#FF6347",
		blue : "#337AB7",
		yellow : "#ffc107",
		green : "#28a745",
		purple : "#993299"
	};

	var props = "tomato";
	for (var i in colors) {
			$(".settings").append("<div class='" + i + "' style='background: " + colors[i] + "' title='" + i + " color'>");
	};

	$(".settings div").click(function() {
		var tcolor = $(this).attr("class");
		set_style.attr("href", "css/skins/" + tcolor + ".css");
		//$(".settings div").removeClass("active");
		//$(this).addClass("active");
	});
	//$(".settings div:nth-child(2)").addClass("active");

});