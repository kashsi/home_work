
// work with function *******************************************************

function pow(number, power) {
	var result = 1;
	for( var i = 0; i < power; i++) {
		result *= number;
	}
	return result;
}

var number = prompt("function pow - input number");
var power = prompt("function pow - input power");

if(power < 0) {
	alert("Power is negative - wrong. Input, please, positive power.");
}else{
	var result = pow(number, power);
	console.log(result);	
}


// work with array *******************************************************

var array = [];

for( var i = 0; i < 5; i++) {
	array[i] = prompt("input array element ", i);	
}

var username = prompt("input user name");

var bFind = false;
for( var i = 0; i < 5; i++) {
	if(array[i] == username) {
		var message = username + ", You entered successfully."
		alert(message);
		bFind = true;
		break;
	}			
}

if(!bFind) {
	alert("Error. Username is wrong.");
}
