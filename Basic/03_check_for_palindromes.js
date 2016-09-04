function palindrome(str) {
	str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	var reverse = str.split('').reverse().join('').toLowerCase();
	return str === reverse;
}



console.log(palindrome("1 eye for of 1 eye."));
