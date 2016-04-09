"use strict";

$(function() {

	var bToggle = true;
	var $linksWrapper1 = $('.wrapper1');
	
	$linksWrapper1.on('click', function() { 
		
		if(bToggle)
		{
			$linksWrapper1.animate({
				backgroundColor: '#0404B4',
				width: '150px',
				color: '#F5F6CE',
			}, 500 );
			bToggle = false;
		}
		else
		{
			$linksWrapper1.animate({
				backgroundColor: '#F3F781',
				width: '300px',
				color: '#000000',
			}, 300 );
			bToggle = true;
		}
		
	});

});

;"use strict";

$(function() {

	var bToggle = true;
	var $linksWrapper2 = $('.wrapper2');
	
	$linksWrapper2.on('click', function() { 

		if(bToggle)
		{
			$linksWrapper2.animate({
				backgroundColor: '#6E6E6E',
				width: '500px',
				color: '#CEF6F5',
			}, 500 );
			bToggle = false;
		}
		else
		{
			$linksWrapper2.animate({
				backgroundColor: '#A9F5A9',
				width: '300px',
				color: '#000000',
			}, 300 );
			bToggle = true;
		}
		
	});

});


