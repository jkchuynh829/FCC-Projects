function largestOfFour(arr) {
	var newArray = [];
	for(var i = 0; i<arr.length; i++) {
		newArray.push(Math.max(arr[i][0], arr[i][1], arr[i][2], arr[i][3]));
	}
	return newArray;	
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
