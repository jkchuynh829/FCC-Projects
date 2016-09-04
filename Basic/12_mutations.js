function mutation(arr) {
	var result = arr.map(function(x) {
		return x.toLowerCase();
	});
	for(var i = 0; i<=result[1].length; i++) {
		if(!result[0].match(result[1][i])) {
			return false;
		}
	}
	return true;
}

console.log(mutation(["hello", "hey"]));
//TRY SOLVING WITH .indexOf() METHOD AS WELL