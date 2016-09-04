function smallestCommons(arr) {
	arr.sort(function(a,b) {
		return b - a;
	});
	let range = [];
	for(let i = arr[0]; i >= arr[1]; i--) {
		range.push(i);
	}
	function lcm(a,b) {
		if(b === 0) {
			return a;
		}
		var c = a%b;
		return lcm(b,c);
	}
	return range.reduce(function(acc, curr) {
		return acc*curr/(lcm(acc,curr));
	});
}


console.log(smallestCommons([1,5]));
