function sumPrimes(num) {
	var primes = [];
	for(let i = 2; i <= num; i++) {
		primes.push(i);
	}
	return primes.filter(function(e) {
		for(let j = 2; j < e; j++) {
			if(e % j === 0){
				return false;
			}
		}
		return true;
	}).reduce(function(a,b) {
			return a+b;
	});
}

console.log(sumPrimes(977));
