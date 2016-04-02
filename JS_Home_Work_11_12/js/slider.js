 
 (function($) {	 
	 
	var defaults = { max_width:'200px' };
	var options;
	 
	$.fn.mySimplePlugin = function(params) {
		
		options = $.extend({}, defaults, options, params);
		$('.carousel-element img').css('max-width', options.max_width);
		var w = parseInt(options.max_width,10);
		var w_margin_left = $('.carousel-element').css('margin-left');
		var w_margin_right = $('.carousel-element').css('margin-right');
		var w_add = parseInt(w_margin_left,10) + parseInt(w_margin_right,10);
		$('.carousel-hider').css('width', (w + w_add) + 'px');
		
		$('.carousel-arrow-left').css('margin-top', (0.3 * w) + 'px');
		$('.carousel-arrow-right').css('margin-top', (0.3 * w) + 'px');
		
		var leftUIEl = $('.carousel-arrow-left');
		var rightUIEl = $('.carousel-arrow-right');
	 
		var elementsList = $('.carousel-list');
	 
		var pixelsOffset = (w + w_add);
		var currentLeftValue = 0;

		var elementsCount = elementsList.find('li').length;
		var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
		var maximumOffset = 0;
		
		var interval_anima = 500;
		
		leftUIEl.click(function() {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += pixelsOffset;
				elementsList.animate({ left : currentLeftValue + "px"}, interval_anima);
			}
			else
			{
				currentLeftValue = minimumOffset;
				elementsList.animate({ left : currentLeftValue + "px"}, 0);
			}
	
		});
	 
		rightUIEl.click(function() {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= pixelsOffset;
				elementsList.animate({ left : currentLeftValue + "px"}, interval_anima);
			}        
			else
			{
				currentLeftValue = maximumOffset;
				elementsList.animate({ left : currentLeftValue + "px"}, 0);
			}
		});
		
		return this; 
	};
	
})(jQuery);