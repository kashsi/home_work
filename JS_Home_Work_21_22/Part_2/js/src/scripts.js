"use strict";

/* DATA ********************************** */

let answers = [
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

let questions = [
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

let answerData = answers;

let questionData = questions;

/* TEMPLATE ********************************** */

$(function(){
	
	let tmplHtml = $('#myTemplate').html();
	
	let tmplData = { 
		title: 'Test on programming',
		buttonTitle: 'Verify my results',
		questionData: questionData,
		answerData: answerData,
	}
	
	let content = tmpl(tmplHtml, {
		data: tmplData
	});
	
	$('body').append(content);	
	
	return this;
}); 

/* CHECK TEST ********************************** */

$(function() {
	
	let $body = $('body');
	let $linkThis = this;
	
	let $overlay = $('<div class="modalOverlay"></div>');
	let $modalDialog = $('<div class="modalDialog"><div id="estimate"></div><button class="closeButton">Close</button></div>');
	$body.append($overlay);
	$body.append($modalDialog);
	$overlay.hide();
	$modalDialog.hide();

	let $idEstimate = $('#estimate');
	
	function showModal() {
		$overlay.show();
		$modalDialog.show();
	};	

	function hideModal() {
		$overlay.hide();
		$modalDialog.hide();
	};	
	
	$overlay.on('click', hideModal);
	
	let $closeButton = $('.closeButton');
	$closeButton.on('click', hideModal);

	let $verifyButton = $('.verifyButton');
	
	let $arrayRadio = [];
	let i = 0;
	for(let velQuest of questionData) {
		let nameRadio = "nameRadio_" + i;
		$arrayRadio[i++] = $('input:radio[name="' + nameRadio + '"]');
	}
	
	$verifyButton.on('click', function() {	
		
		let result = 0;
		i = 0;
		for(let velQuest of questionData) {
			
			let $mRadio = $arrayRadio[i];
			
			let j = 0;
			for(let velAnswer of answerData[i]) {
				if(answerData[i][j].ansTrue && $mRadio[j].checked)
					result++;				
				j++;
			}			
			i++;			
		}
		
		$idEstimate.text("Your result is " + result);
		showModal();
		
		i = 0;
		for(let velQuest of questionData) {
			
			let $mRadio = $arrayRadio[i];
			
			let j = 0;
			for(let velAnswer of answerData[i]) {
				$mRadio[j++].checked = false;
			}
			i++;			
		}	
		
	});
	
	return this;
	
});



