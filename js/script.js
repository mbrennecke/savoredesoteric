var winSize = $(window).height();
		if ($(window).width()<970) {
			$(".logo-base").css("width", $(window).width());
		}	else {
			$(".logo-base").css("width", 970+"px");
		};
		$(".contentContainer").css("min-height", (winSize));
/*		if (winSize <= 640 ) {
			$("#slogan").css("display", "none");
			}  */
		$( "#web" ).click(function() {
			$("#webTag").show();
			$("#photoTag").hide();
			$("#metalsTag").hide();
			$("#miscTag").hide();
			});
		$( "#photo" ).click(function() {
			$("#webTag").hide();
			$("#photoTag").show();
			$("#metalsTag").hide();
			$("#miscTag").hide();
			});
		$( "#metals" ).click(function() {
			$("#webTag").hide();
			$("#photoTag").hide();
			$("#metalsTag").show();
			$("#miscTag").hide();
			});
		$( "#misc" ).click(function() {
			$("#webTag").hide();
			$("#photoTag").hide();
			$("#metalsTag").hide();
			$("#miscTag").show();
			});