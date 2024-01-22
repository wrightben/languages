function incrementer(s) {

	var n = s.length;
	var prepend = [];
	var append = [];
	
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
	
	return s;

}

var x = [1,2,3,4];
var count = 1;
console.log(count, x);
while ( x != "no answer" ) {
	x = incrementer(x);
	console.log(count += 1, x);
}