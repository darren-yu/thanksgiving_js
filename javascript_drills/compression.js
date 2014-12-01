// input  pattern = "AAASSSDDDDRDDSASSDDDSSSAD"  
// output pattern = 3A3S4DR2DSA2S3D3SAD

var compress = function(string) {
	var newStr = "";
	counter = 1
	for (var i = 0; 0 < string.length; i++) {
		if ((string.toUpperCase().charAt(i)) === (string.toUpperCase().charAt(i+1))) {
			newStr += counter + string.toUpperCase().charAt(i);
			counter = 1;
		}
		else {
			counter++;
		}
	}
	return newStr;
}

console.log("aaabda");

console.log(compress("aaabda"));


// var compress = function(string) {
//     newString = ""
//     count = 1

//     for (var i = 0; i <= string.length; i++) {
//         if ( string.charAt(i) != string.charAt(i+1) ) {
//             newString += count + string.charAt(i) + " "
//             count = 1
//         }
//         else{
//             count++
//         }
//     }
//     return newString
// }

// console.log("AAASSSDDDDRDDSASSDDDSSSAD")
// console.log(compress("AAASSSDDDDRDDSASSDDDSSSAD"))