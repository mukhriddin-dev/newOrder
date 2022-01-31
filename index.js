$(document).ready(function(){
	$(".tabs li a").click(function() {
		
		// Active state for tabs
		$(".tabs li a").removeClass("active");
		$(this).addClass("active");
		
		// Active state for Tabs Content
		$(".tab_content_container > .tab_content_active").removeClass("tab_content_active").fadeOut(200);
		$(this.rel).fadeIn(500).addClass("tab_content_active");
		
	});	

});
