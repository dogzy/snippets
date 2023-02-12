jQuery(document).ready(function($){

/**
* Checks all elements matching in the page and sets everything else to the greatest height. Witchcraft!
*/
function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}

equalHeight($(".element"));

});
