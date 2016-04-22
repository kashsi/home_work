
var module_1 = require('../js/scripts_1.js');

describe("module_1", function() {
	
	
  it("sayHello()", function() {
	  
	//prepare
	var result;
	
	//act
	result = module_1.sayHello('Jon');
  
  
	//expect  
    expect(result).toBe('Hello, Jon');
  });
  
  
  it("sum()", function() {
	  
	//prepare
	var result;
	
	//act
	result = module_1.sum(1, 2);
  
  
	//expect  
    expect(result).toEqual(3);
  });
  
	
  it("pow()", function() {
	  
	//prepare
	var result;
	
	//act
	result = module_1.pow(3, 3);
  
  
	//expect  
    expect(result).toEqual(27);
  });
  
  
});


