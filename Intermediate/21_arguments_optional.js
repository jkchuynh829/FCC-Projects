function addTogether() {
	var arg1 = arguments[0];
	var arg2 = arguments[1];
	//TEST IF NUMBER
	if(arguments.length === 2) {
		return typeof arg1 === 'number' && typeof arg2 === 'number' ? arg1+arg2 : undefined;
	}
	//TEST IF ONLY ONE PARAM
	var addThis = function(num) {
		return typeof num === 'number' ? arg1+num : undefined;
	};
	if(arguments.length === 1) {
		return typeof arg1 === 'number' ? addThis : undefined;
	}
}


console.log(addTogether(1,1));