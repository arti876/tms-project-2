// header-scroll----------------------------------------------------------------

$(function () {
	$(document).scroll(function () {
		var $header = $("header");
		var $header__container = $(".navbar");
		$header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
		$header__container.toggleClass('scrolled-border', $(this).scrollTop() > $header.height());
	});
});