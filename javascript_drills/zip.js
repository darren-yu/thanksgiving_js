var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];


var zip = function(array, array2) {
	var combine = array.map(function(element, index) {
		return [element, array2[index]];
	}); 
	return combine;
};


var zipped = zip(artists,albums);

console.log(zipped);