function pairElement(str) {
	var result = str.split('');
	var dna = {
		A: 'T',
		T: 'A',
		C: 'G', 
		G: 'C'
	};
	return result.map(function(elem) {
		return [elem, dna[elem]];
	});
}

console.log(pairElement("GCG"));
