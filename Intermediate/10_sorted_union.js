function uniteUnique(arr) {
	arr = Array.prototype.slice.call(arguments);
	return arr.reduce(function(a, b){
		return a.concat(b.filter(function(c){
			return a.indexOf(c) === -1;
		}));
	});
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); 
//[1,3,2,5,2,1,4,2,1]
//[1,3,2,5,4]
