$(document).ready(function(){
	$(".header__burger").click(function(event){
		$(".header__burger, .header__menu").toggleClass("active");
		$("body").toggleClass("lock");
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>200){
			$(".header").addClass("fixed");
		}
		else if ($(this).scrollTop()<200){
			$(".header").removeClass("fixed");
		}
	});
});
jQuery(document).ready(function() {
		jQuery("a.scrolltop").click(function () {
		elementClick = jQuery(this).attr("href")
		destination = jQuery(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
		return false;
	});
});