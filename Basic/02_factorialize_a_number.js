function factorialize(num) {
	if(num === 0) return 1;
	var arr = [];
	for(var i=num; i>=1; i--) {
		arr.push(i);
	}
	return arr.reduce(function(acc, next) {
		return acc *= next;
	});
}

console.log(factorialize(0));
