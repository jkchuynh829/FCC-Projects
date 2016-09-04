function convertToRoman(num) {
	// CREATED AN OBJECT LITERAL, WE COULD HAVE CREATED TWO SEPERATE ARRAYS.. 
	var romans = {
		T: 'placeholder',
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	// BUT WE PRACTICED USING OBJECT.KEYS() AND THE FOR IN STATEMENT... YAY!
	var keys = Object.keys(romans);
	var decimal = [];
	var result = "";
	for(var k in romans) {
		decimal.push(romans[k]);
	}
	for(var i = 0; i<keys.length; i++) {
		if(num === 0) {
			return result;
		}
		if(num >= decimal[i]) {
			result += keys[i];
			num -= decimal[i];
			i = 0;
		}
	}
	return result;
}

console.log(convertToRoman(2014));
// MMXIV