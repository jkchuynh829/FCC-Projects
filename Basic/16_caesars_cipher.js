function rot13(str) {
	var split = str.split('');
	var result = split.map(function(char) {
		var charCode = char.charCodeAt(char);
		if(charCode >= 65 && charCode < 65+13) { //TRANSFORM A-M
			return String.fromCharCode(charCode+13);
		} else if(charCode >= 65+13 && charCode <= 65+26) { //TRANSFORM N-Z
			return String.fromCharCode(charCode-13);
		} else { // NON-LETTERS
			return char;
		}
	})

	return result.join('');
}
	
console.log(rot13("SERR PBQR PNZC"));
