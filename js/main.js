function isVisible(elem) {
	var winTop = $(window).scrollTop(),
			elemTop = elem.offset().top - $("header").outerHeight();
	
	return (winTop >= elemTop);
}

$(window).scroll(function() {
	$(".header-scroll[id]").each(function(){
			var id = $(this).attr("id");

			if (isVisible($(this))){
					$("header").addClass(id);
			}
			else{
					$("header").removeClass(id);
			}
	});
});