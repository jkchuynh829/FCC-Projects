function sumFibs(num) {
	var arr = [1,1];
	for(let i = 2; arr[arr.length-1] <= num; i++) {
		arr.push(arr[i-1] + arr[i-2]);
	}
	return arr;
	return arr.filter(function(e){
		return e <= num && e % 2 !== 0;
	}).reduce(function(a,b) {
			return a+b;
	});
}

console.log(sumFibs(10));
