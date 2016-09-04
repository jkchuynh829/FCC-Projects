x function whatIsInAName(collection, source) {
	var sourceKeys = Object.keys(source); // ['a', 'b']
	return collection.filter(function(obj) {
		return sourceKeys.every(function(key) { // ['a', 'b']    
			return source[key] === obj[key]; 
		})
	});
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
