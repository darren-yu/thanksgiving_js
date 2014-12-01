var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
};


var pair = function(obj) {
	// the below line converts the keys in the object into an array.
	var objKeys = Object.keys(obj);
	var combine = objKeys.map(function(element) {
		// the "obj[element]" grabs the values from the keys that are found from the objKeys array. 
		return [element, obj[element]];
	})
	return combine;
};

console.log(pair(obj));
