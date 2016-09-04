function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var arr = arr1.concat(arr2).reduce(function(acc, curr) {
    	if(acc[curr[1]]) {
    		acc[curr[1]] += curr[0];
    	} else {
    		acc[curr[1]] = curr[0];
    	}
    	return acc;
    }, {});
    
    var keys = Object.keys(arr);

    return keys.map(function(val) {
    	return [arr[val], val];
    }).sort(function(a, b) {
    	return a[1] > b[1];
    });
    
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
