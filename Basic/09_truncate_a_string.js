function truncateString(str, num) {
	if(num>=str.length) {
		return str;
	}
	if(num<=3) {
		return str.replace(str.slice(num), "...");
	}
	return str.replace(str.slice(num-3), "...");
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 1));
