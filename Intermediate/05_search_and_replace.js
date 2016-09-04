
function myReplace(str, before, after) {
	if(before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90) {
		after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
	}
	return str.split(' ').map(function(word) {
		if(word === before) {
			return after;
		} else {
			return word;
		}
	}).join(' ');
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
