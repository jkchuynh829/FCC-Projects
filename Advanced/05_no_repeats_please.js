function permAlone(str) {
  var arr = str.split('');
  var result = 0;
  function swap(a, b) {
  	var temp = arr[a];
  	arr[a] = arr[b];
  	arr[b] = temp;
  }
  function generate(N) {
  	var regex = /(.)\1+/;
  	if(N === 1 && !regex.test(arr.join(''))) {
  		result++;
  		console.log(arr.join(''));
  	} else {
  		for(var i = 0; i != N; i++) {
  			generate(N-1);
  			swap(N % 2 === 0 ? 0 : i, N-1);
  		}
  	}
  }
  generate(arr.length);
  return result;
}
console.log(permAlone('aab'));
