var albums = [
	{"name": "Gossamer", "artist": "Passion Pit"},
	{"name": "Sigh no more", "artist": "Mumford and Sons"},
	{"name": "Time to Pretend", "artist": "MGMT"}
];

var pluck = function(someArray, someKey) {
		var grab = someArray.map(function(element) {
		return element[someKey];
	})
	return grab;
};



var plucked = pluck(albums, "artist");

console.log(plucked);


// Expected output:
// [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]
