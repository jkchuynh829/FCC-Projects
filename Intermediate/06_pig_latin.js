
function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if(vowels.includes(str.charAt(0))) {
    return str + 'way';
  }
  for(var i = 0; i<str.length; i++) {
    if(vowels.includes(str.charAt(i))) {
      return str.substr(i) + str.substr(0,i) + 'ay';
    }
  }
  return str;
}
