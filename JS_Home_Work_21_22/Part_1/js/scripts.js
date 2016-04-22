"use strict";

/* DATA ********************************** */

var answers = [
	[ 
		{
			ansText: "font-weight",
			ansTrue: true,
		},
		{
			ansText: "font-size",
			ansTrue: false,
		},
		{
			ansText: "font-style",
			ansTrue: false,
		},
	],
	[ 
		{
			ansText: "font-style",
			ansTrue: true,
		},
		{
			ansText: "font-decoration",
			ansTrue: false,
		},
		{
			ansText: "font-transform",
			ansTrue: false,
		},
	],	
	[ 
		{
			ansText: "font-size",
			ansTrue: false,
		},
		{
			ansText: "font-transform",
			ansTrue: false,
		},
		{
			ansText: "font-decoration",
			ansTrue: true,
		},
	],	
];

var questions = [
	{
		quest: "What is the CSS font property setting the bold style font?",
	},
	{
		quest: "What is the CSS property doing the font italics?",
	},
	{
		quest: "What is the CSS property doing the font underline or clossline?",
	},
];

var answerData = answers;

var questionData = questions;

/* TEMPLATE ********************************** */

$(function(){
	
	var tmplHtml = $('#myTemplate').html();

	
	var tmplData = { 
		title: 'Test on programming',
		buttonTitle: 'Verify my results',
		questionData: questionData,
		answerData: answerData,
	}
	
	var content = tmpl(tmplHtml, {
		data: tmplData
	});
	
	$('body').append(content);	
	
}); 

/* CHECK TEST ********************************** */

function verify() {
	
	var $arrayRadio = [];
	for(var i = 0; i < questionData.length; i++) {
		var nameRadio = "nameRadio_" + i;
		$arrayRadio[i] = $('input:radio[name="' + nameRadio + '"]');
	}
	
	var result = 0;
	for(var i = 0; i < questionData.length; i++) {
		
		var $mRadio = $arrayRadio[i];
		
		for(var j = 0; j < answerData[i].length; j++) {
			if(answerData[i][j].ansTrue && $mRadio[j].checked)
				result++;
		}
		
	}		
	return result;
}


$(function() {
	
	var $body = $('body');
	var $linkThis = this;
	
	var $overlay = $('<div class="modalOverlay"></div>');
	var $modalDialog = $('<div class="modalDialog"><div id="estimate"></div><button class="closeButton">Close</button></div>');
	$body.append($overlay);
	$body.append($modalDialog);
	$overlay.hide();
	$modalDialog.hide();

	var $idEstimate = $('#estimate');
	
	function showModal(e) {
		$overlay.show();
		$modalDialog.show();
	};	

	function hideModal() {
		$overlay.hide();
		$modalDialog.hide();
	};	
	
	$overlay.on('click', hideModal);
	
	var $closeButton = $('.closeButton');
	$closeButton.on('click', hideModal);

	var $verifyButton = $('.verifyButton');
	
	var $arrayRadio = [];
	for(var i = 0; i < questionData.length; i++) {
		var nameRadio = "nameRadio_" + i;
		$arrayRadio[i] = $('input:radio[name="' + nameRadio + '"]');
	}
	
	$verifyButton.on('click', function() {	
		
		var result = verify();
		
		$idEstimate.text("Your result is " + result);
		showModal();
		
		for(var i = 0; i < questionData.length; i++) {
			
			var $mRadio = $arrayRadio[i];
			
			for(var j = 0; j < answerData[i].length; j++) {
				$mRadio[j].checked = false;
			}			
		}
	
	});
	
	return this;
});

