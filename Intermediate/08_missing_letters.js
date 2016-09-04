function fearNotLetter(str) {
	var codes = str.split('').map(function(e) {
		return e.charCodeAt();
	});
	for(var i=0; i<codes.length; i++) {
		if(codes[i+1] - codes[i] > 1) {
			return String.fromCharCode(codes[i] + 1);
		}
	}
	return undefined;
}

console.log(fearNotLetter('abce'));