function getIndexToIns(arr, num) {
	return arr.concat(num).sort(function(a,b) {
		return a-b
	}).indexOf(num);
}

console.log(getIndexToIns([2, 5, 10], 15));
