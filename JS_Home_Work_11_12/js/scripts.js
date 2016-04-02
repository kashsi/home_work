
$('.carousel').mySimplePlugin({ max_width: '500px' });

$(function(){
	
	// var html = $('#test_template').html();
	// var articles = [
		// {
			// title: '1 Hello!'
		// },	
		// {
			// title: '2 Hello!'
		// },	
		// {
			// title: '3 Hello!'
		// }	
	// ];
	
	// var content = tmpl(html, {
		// data: articles
	// })
	
	// $('body').append(content);
	
	
	var myHtml = $('#myTemplate').html();

	var myAnswers = [
		{
			answer: 'get new knowledge and skills;'
		},	
		{
			answer: 'improve my professional experience;'
		},	
		{
			answer: 'find perspective job;'
		}	
	];
	
	var myData = { 
		myName: 'Kasura Svetlana',
		myImage: 'img/1.jpg',
		myStudent: 'Frontend course student',
		myQuestion: 'I want to learn the frontend, because it is possibility:',
		myAns: myAnswers,
		myPhone: '+38 095 9304936',
		myRefContact: 'https://vk.com/id62965686',
	}
	
	var content = tmpl(myHtml, {
		data: myData
	});
	
	$('body').append(content);
	
	
}); 


