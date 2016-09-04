function chunkArrayInGroups(arr, size) {
	var result = [];
	var acc = 0;
	while(acc<arr.length) {
		result.push(arr.slice(acc, acc+size));
		acc += size;
	}
	return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
