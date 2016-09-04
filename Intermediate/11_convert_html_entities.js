function convertHTML(str) {
	var obj = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'\"': '&quot;',
		'\'': '&apos;'
	}
	return str.split('').reduce(function(acc, next) {
		return acc.concat(next.replace(/[^a-zA-Z0-9\s]/g, obj[next]));
	},"");
}

console.log(convertHTML("><"));
