// input  pattern = "AAASSSDDDDRDDSASSDDDSSSAD"  
// output pattern = 3A3S4DR2DSA2S3D3SAD

var compress = function(string) {
	var newStr = "";
	var counter = 1;
	for (var i = 0; i < string.length; i++) {
		if ((string.toUpperCase().charAt(i)) === (string.toUpperCase().charAt(i+1))) {
			counter += 1;
		}
		else {
			if (counter !== 1) {
				newStr +=  counter + string.toUpperCase().charAt(i);
				counter = 1;
			}
			else {
				newStr += string.toUpperCase().charAt(i);
			}
		}
	}
	return newStr;
}

console.log("AAASSSDDDDRDDSASSDDDSSSAD");

console.log(compress("AAASSSDDDDRDDSASSDDDSSSAD"));


