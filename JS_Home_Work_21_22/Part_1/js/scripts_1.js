"use strict";

var module_1 = {
	
	
	sayHello: function(name) {
		return 'Hello, ' + name;
	},
	
	
	sum: function(a, b) {
		return a + b;
	},


	pow: function pow(number, power) {
		var result = 1;
		for( var i = 0; i < power; i++) {
			result *= number;
		}
		return result;
	}
	
};

try {
	module.exports = module_1;
}
catch (e) {};
