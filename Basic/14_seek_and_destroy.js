function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments, 1);
	return arr.filter(function(e) {
		return !args.includes(e);
	});
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
 