function repeatStringNumTimes(str, num) {
	var result = "";
	for(var i = 1; i<=num; i++) {
		result += str;
	}
	return result;
}

console.log(repeatStringNumTimes("abc", 3));
