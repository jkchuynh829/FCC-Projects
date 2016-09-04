function titleCase(str) {
	var arr = str.toLowerCase().split(' ');
	for(var i = 0; i<arr.length; i++) {
		arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
	}
	return arr.join(' ');	
}

console.log(titleCase("I'm a little tea pot"));
