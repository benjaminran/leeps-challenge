/* Toggle visibility of additional info on profit equation */
var MORE_HTML = "<small>Math whiz?</small>";
var LESS_HTML = "<small>Show less</small>";
var moreVisible = false;

function descriptionMoreClicked() {
	$("#demo1-more").html(moreVisible ? MORE_HTML : LESS_HTML);
	$(".more").css("display", moreVisible ? "none" : "block");
	moreVisible = !moreVisible;
}