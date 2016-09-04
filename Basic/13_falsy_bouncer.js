function bouncer(arr) {
	return arr.filter(function(e) {
		return e;
	});
}

console.log(bouncer([7, "ate", "", false, 9]));
