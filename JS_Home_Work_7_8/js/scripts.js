
// TABS ************************************************************** //

$(function() {

	var nTab = 3;
	
	function toggleDivBox(indexShow) {
		for(var i = 1; i <= nTab; i++)
		{
			var $divTab = $('#ntabs_' + i);
			var $buttonTab = $('#btabs_' + i);
			if(indexShow == i)
			{				
				$divTab.show();
				$buttonTab.css({
					background: '#E0E0E0',
				});
			}
			else
			{				
				$divTab.hide();	
				$buttonTab.css({
					background: '#F2F2F2'
				});
			}				
		}
	}
	
	toggleDivBox(1);

	var $linksButton = $('.tabsMenu .tabsButton');
	
	$linksButton.on('click', function() { 
		
		var buttonId = $(this).attr('id');
	
		for(var i = 1; i <= nTab; i++)
		{
			var nChecked = 'btabs_' + i;
			if(buttonId == nChecked)
			{
				toggleDivBox(i);
				break;
			}
		}
		
	});

});


// Form ************************************************************** //

$(function() {

	var $helpFirstname = $('#helpFirstname');
	var $helpLastname = $('#helpLastname');
	var $helpAddress = $('#helpAddress');
	$helpFirstname.hide();
	$helpLastname.hide();
	$helpAddress.hide();
	
	var $linksHelpButton = $('.helpButton');
	
	var timeanima = 500;
	$linksHelpButton.on('click', function() {
		$helpFirstname.fadeIn(timeanima);
		$helpLastname.fadeIn(timeanima);
		$helpAddress.fadeIn(timeanima);
	});
	
	var $inputFirstname = $('#firstname');
	var $inputLastname = $('#lastname');
	var $inputAddress = $('#address');
	
	$inputFirstname.hover(
		function()
		{
			$helpFirstname.fadeIn(timeanima);
		},
		function(){
			$helpFirstname.fadeOut(timeanima);
		}
	);

	$inputLastname.hover(
		function()
		{
			$helpLastname.fadeIn(timeanima);
		},
		function(){
			$helpLastname.fadeOut(timeanima);
		}
	);
	
	$inputAddress.hover(
		function()
		{
			$helpAddress.fadeIn(timeanima);
		},
		function(){
			$helpAddress.fadeOut(timeanima);
		}
	);
	
});
