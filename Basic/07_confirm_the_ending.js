function confirmEnding(str, target) {
	return target === str.substr(-target.length)
}

console.log(confirmEnding("Bastian", "an"));
