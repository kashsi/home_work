
jQuery(document).ready(function(){

	jQuery(".labelniceCheck").mousedown(
		/* при клике на чекбоксе меняем его вид и значение */
		function() {
			var idLabel = jQuery(this).attr('id');
			if(idLabel == 'label_ch1')
				changeCheck(jQuery("#spanch1"));
			else			
			if(idLabel == 'label_ch2')
				changeCheck(jQuery("#spanch2"));		 
			else			
			if(idLabel == 'label_ch3')
				changeCheck(jQuery("#spanch3"));		 
	});

	jQuery(".niceCheck").each(
		/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
		function() {		 
			changeCheckStart(jQuery(this));		 
	});

	jQuery(".niceCheck").mousedown(
		/* при клике на чекбоксе меняем его вид и значение */
		function() {
			changeCheck(jQuery(this));		 
	});

});

function changeCheck(el)
/* 
	функция смены вида и значения чекбокса
	el - span контейнер дял обычного чекбокса
	input - чекбокс
*/
{
    var el = el,
        inputniceCheck = el.find(".inputniceCheck").eq(0);
   	if(!inputniceCheck.attr("checked")) {
		el.css("background-position","0 -17px");	
		inputniceCheck.attr("checked", true)
	} else {
		el.css("background-position","0 0");	
		inputniceCheck.attr("checked", false)
	}
    return true;
}

function changeCheckStart(el)
/* 
	если установлен атрибут checked, меняем вид чекбокса
*/
{
var el = el,
		inputniceCheck = el.find(".inputniceCheck").eq(0);
    if(inputniceCheck.attr("checked")) {
		el.css("background-position","0 -17px");	
	}
    return true;
}


