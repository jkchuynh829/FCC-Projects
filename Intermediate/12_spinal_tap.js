function spinalCase(str) {
	return str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
}

console.log(spinalCase('ThisIs_Spinal Tap'));
