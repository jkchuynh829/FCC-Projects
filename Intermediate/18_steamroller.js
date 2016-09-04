function steamrollArray(arr) {
	return arr.reduce(function(acc,next) {
		if(Array.isArray(next)) {
			return acc.concat(steamrollArray(next));
		} else {
			return acc.concat(next);
		}
	}, []);
	return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
