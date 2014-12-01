var is_palindrome = function(string) {
	for (var i = 0; i < string.length; i++) {
		var j = (string.length - 1 - i); 
		if (string.toUpperCase().charAt(i) === string.toUpperCase().charAt(j)) {
			return true;
		}
		else {
			return false;
		}
	}
};


var arrTest = ["tax", "rAceCar", "1234321", "nursesrun", "2141", "agaghap"];

arrTest.forEach(function(element){
	console.log(is_palindrome(element));
});             

// Below strings are within the array arrTest and should return true/false:
// "tax" -------> should return false.
// "rAceCar" ---> should return true.
// "1234321" ---> should return true.
// "nursesrun" -> should return true.
// "2141" ------> should return false.
// "agaghap" ---> should return false. 