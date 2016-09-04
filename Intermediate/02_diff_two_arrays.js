// LOGIC USING FOR LOOPS.. WORKS, BUT IS IT COOL ENOUGH? NO. NO IT ISN'T!
function diffArrayFor(arr1, arr2) {
	var arr3 = [];
	for(var i = 0; i<arr1.length; i++) {
		if(!arr2.includes(arr1[i])) {
			arr3.push(arr1[i]);
		}
	}
	for(var j = 0; j<arr2.length; j++) {
		if(!arr1.includes(arr2[j])) {
			arr3.push(arr2[j]);
		}
	}
	return arr3;
}
// console.log(diffArrayFor([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// WE CAN DO BETTER! CONCATENATE THE ARRAYS AND USE THE FILTER METHOD!
function diffArray(arr1, arr2) {
	var newArray = arr1.concat(arr2);;
	return newArray.filter(function(e,i,a) { //ELEMENT INDEX ARRAY
		return a.slice(i+1).indexOf(e) === -1 && a.slice(0,i).indexOf(e) === -1;
	});
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//[1, 2, 3, 5, 1, 2, 3, 4, 5]
