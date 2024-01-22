function biggerIsGreater(w) {

	var _ = {
		"a" : 1, "b" : 2, "c" : 3, "d" : 4, "e" : 5, "f" : 6, "g" : 7, "h" : 8,
		"i" : 9, "j" : 10, "k" : 11, "l" : 12, "m" : 13, "n" : 14, "o" : 15, "p" : 16,
		"q" : 17, "r" : 18, "s" : 19, "t" : 20, "u" : 21, "v" : 22, "w" : 23, "x" : 24,
		"y" : 25, "z" : 26
	};
	
	var __ = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	
	var n = w.length;
	var s = new Array(n);
	var prepend = [];
	var append = [];

	
	for (var i = 0; i < n; i++) {
		s[i] = _[w[i]];
	}
	
// 	console.log(s);
	for (var i = n - 2; i >= 0; i--) {
		
		var es = s.slice(i,n);
		var fs = es.slice().sort( (a,b) => b - a );
		
// 		console.log(es,fs);
		
		var equal = es.every( (e,j) => e == fs[j] ); // es == fs
		if (! equal) {

			if (i > 0) { prepend = s.slice(0,i); } // Prepend unaffected columns
// 			console.log(prepend);
				
			for (var k = n - 1; k >= 0; k--) {
				if (fs[k] > es[0]) {
					append[0] = fs[k]; // Append fs[k] to append
					fs.splice(k,1); // Remove fs[k] from fs
					append = append.concat( fs.reverse() );
					break;
				}
			}
			
			break;
		}
	}
	
	s = prepend.concat(append);

	if (s.length == 0) { return "no answer"; } // NO ANSWER
		
	for (var i = 0; i < n; i++) {
		s[i] = __[s[i] - 1];
	}
	
	return s.join("");

}


console.log(biggerIsGreater('ab'), 'ba');
console.log(biggerIsGreater('bb'), 'no answer');
console.log(biggerIsGreater('hefg'), 'hegf');
console.log(biggerIsGreater('dhck'), 'dhkc');
console.log(biggerIsGreater('dkhc'), 'hcdk');