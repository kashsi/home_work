"use strict";

define(

	'scripts_controller',
	
	[],
	
	function () {		
		
		function Controller (model, view) {
			
			var self = this;

			view.elements.addButton.on('click', addItem);
			view.elements.listContainer.on('click', '.item-delete', removeItem);
			view.elements.listContainer.on('click', '.item-edit', editItem);
			
			function addItem () {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			};
			
			function removeItem () {
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			};
			
			function editItem () {
				var newItem = view.elements.input.val();
				if(newItem.length === 0){
					alert('Input new item name.');
					return;
				}
				var item = $(this).attr('data-value');				
				model.editItem(item, newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			};
			
			
		};
			
		
		return {
			Controller: Controller
		};
		
	}
	
);