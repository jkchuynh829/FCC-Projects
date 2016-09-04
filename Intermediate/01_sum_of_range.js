function sumAll(arr) {
	var min = Math.min(arr[0], arr[1]);
	var max = Math.max(arr[0], arr[1]);
	var newArray = [];
	for(var i = min; i <= max; i++) {
		newArray.push(i);
	}
	return newArray.reduce(function(acc, next) {
		return acc + next;
	});
}

console.log(sumAll([1, 4]));
