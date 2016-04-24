 
 
requirejs.config({
	
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery',
		'tmpl': ''
	},
	
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
			exports: 'tmpl'
		}
	}	
	
}); 
 
 
require(

	[
		'scripts_model',
		'scripts_view',
		'scripts_controller',
		'tmpl',
		'jquery'
	],
	
	function (Model, View, Controller, tmpl, $) {
		
		var firstToDoList = ['item 1', 'item 2', 'item 3', 'item 4'];
		var model = new Model.Model(firstToDoList);
		var view = new View.View(model);		
		var controller = new Controller.Controller(model, view);
	
	}
	
);
	





