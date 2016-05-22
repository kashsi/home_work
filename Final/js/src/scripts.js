
$(function() {
	
	var self = this;	
	

	var $buttonSign = $('#buttonSign');	
	
	function buttonSignClick() {
		alert("buttonSignClick");
	};	

	$buttonSign.on('click', buttonSignClick);
	
	
	var $buttonFind = $('#buttonFind');	
	
	function buttonFindClick() {
		alert("buttonFindClick");
	};	

	$buttonFind.on('click', buttonFindClick);
	
	
	var $buttonStep1 = $('#buttonStep1');	
	
	function buttonStep1Click() {
		alert("buttonStep1Click");
	};	

	$buttonStep1.on('click', buttonStep1Click);
	
	
	var $buttonStep2 = $('#buttonStep2');	
	
	function buttonStep2Click() {
		alert("buttonStep2Click");
	};	

	$buttonStep2.on('click', buttonStep2Click);

	
	var $buttonStep3 = $('#buttonStep3');	
	
	function buttonStep3Click() {
		alert("buttonStep3Click");
	};	

	$buttonStep3.on('click', buttonStep3Click);
	

	var $buttonPartners = $('#buttonPartners');	
	
	function buttonPartnersClick() {
		alert("buttonPartnersClick");
	};	

	$buttonPartners.on('click', buttonPartnersClick);
	
	
	return self;
});

/* CARUSEL ****************************************************** */

$(function() {
	
	$('[data-jcarousel]').each(function() {
		var el = $(this);
		el.jcarousel(el.data());
	});

	$('[data-jcarousel-control]').each(function() {
		var el = $(this);
		el.jcarouselControl(el.data());
	});

});

/* MASONRY ****************************************************** */

$(function() {
	
	var self = this;
	var nametag = '';

	var $buttonSearch = $('#buttonSearch');
	var $inputSearch = $('.inputSearch');	
	
	function buttonMasonryClick() {
		
		nametag = $inputSearch.val();
		
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var jqxhr = $.getJSON( flickerAPI, {
			tags: nametag,
			tagmode: "any",
			format: "json"
		})
		.done(function(data) {			
			
			$('.item_w1').css('background-image', 'url("' + data.items[0].media.m + '")');
			$('.item_w2').css('background-image', 'url("' + data.items[1].media.m + '")');
			$('.item_w3').css('background-image', 'url("' + data.items[2].media.m + '")');
			$('.item_w4').css('background-image', 'url("' + data.items[3].media.m + '")');
			$('.item_w5').css('background-image', 'url("' + data.items[4].media.m + '")');
			$('.item_w6').css('background-image', 'url("' + data.items[5].media.m + '")');
			$('.item_w7').css('background-image', 'url("' + data.items[6].media.m + '")');
			
			$('.item_w1 p').text(data.items[0].title);
			$('.item_w2 p').text(data.items[1].title);
			$('.item_w3 p').text(data.items[2].title);
			$('.item_w4 p').text(data.items[3].title);
			$('.item_w5 p').text(data.items[4].title);			
			$('.item_w6 p').text(data.items[5].title);			
			$('.item_w7 p').text(data.items[6].title);			
			
		})
		.fail(function() {
			console.log( "error" );
		})
		.always(function() {
			// console.log( "complete" );
		});
		
		$(".wrapper").masonry({
		  itemSelector: ".item",
		  columnWidth: ".item"
		});
		
	};	

	buttonMasonryClick();

	$buttonSearch.on('click', buttonMasonryClick);	
	
	return self;
});