"use strict";

/* QUERY FORM ************************************************** */

function googleCallBack(jqueryObj, data) {
	
	$(function(){
		
		var $body = $('body');
		
		var $divClearBox = $('.divBox');
		if($divClearBox)
			$divClearBox.remove();
	
		for (var i = 0; i < data.results.length; ++i){
			
			var $divBox = $('<div class="divBox"></div>');
			
			var $title = $('<div class="divTitle"><a href=' + data.results[i].url + ' >' + data.results[i].title + '</a></div>');
			$divBox.append($title);
			
			var $visibleUrl = $('<div class="divUrl"><a href=' + data.results[i].url + ' >' + data.results[i].visibleUrl + '</a></div>');
			$divBox.append($visibleUrl);
			
			var $content = $('<p>' + data.results[i].content + '</p>');
			$divBox.append($content);			
			
			$body.append($divBox);
		}
		
	}); 
	
};


$(function(){

	var $inputSearch = $('.inputSearch');	
	
	function search() {
		
		var queryText = $inputSearch.val();
		
		$.ajax({
			url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + escape(queryText) + '&callback=googleCallBack&context=?',
			dataType: 'jsonp',
			method: 'GET',
			success: function(){},
			error: function(){},
		});		
	}
	
	var $sendButton = $('.sendButton');
	$sendButton.on('click', search);	
}); 

/* CLASSES ******************************************* */

// var Human = {
	// name: 'Jon',
	// age: 40,
	// gender: 'man',
	// height: 180,
	// weight: 80
// };

// var Worker = {
	// job: 'factory',
	// salary: 4000
// };

// Worker.__proto__ = Human;

// var Student = {
	// placeOfStudy: 'Oxford',
	// scholarship: 1000
// };

// Student.__proto__ = Human;


function Human(name, age, gender, height, weight){
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.height = height;
	this.weight = weight;
};

Human.prototype.works = function(job, salary) {
	this.job = job; 
	this.salary = salary; 
};

var Worker = new Human('Jon', 40, 'man', 180, 80);
Worker.works('factory', 4000);
console.log(Worker);

var Worker1 = new Human('Jack', 30, 'man', 170, 90);
Worker1.works('factory', 3000);
console.log(Worker1);


Human.prototype.lookSerial = function(placeOfStudy, scholarship) {
	this.placeOfStudy = placeOfStudy; 
	this.scholarship = scholarship; 
};

var Student = new Human('Richard', 20, 'man', 170, 60);
Student.lookSerial('Oxford', 1000);
console.log(Student);

var Student1 = new Human('Sara', 20, 'woman', 160, 50);
Student1.lookSerial('Oxford', 1000);
console.log(Student1);

