function removeDupes (args) {
	return args.map(function(e) {
		return e.filter(function(e, i, a) {
			return a.slice(i+1).indexOf(e) === -1;
		});
	});	
}

function diffArray(arr1, arr2) {
	var arr = arr1.concat(arr2);
	return arr.filter(function(e,i,a) {
		return a.slice(0,i).indexOf(e) === -1 && a.slice(i+1).indexOf(e) === -1;
	});
}


function sym(args) {
	var myArr = Array.prototype.slice.call(arguments);
	myArr = removeDupes(myArr);
	myArr = myArr.reduce(function(a,b) {
		return diffArray(a,b);
	});
	return myArr;
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));