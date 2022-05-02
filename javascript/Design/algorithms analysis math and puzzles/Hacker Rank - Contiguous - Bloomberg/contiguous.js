// Which contiguous numbers add to _int?
function contiguous(_int) {
	
	var count = 0;
	var r = 0;
	var sum = 0;
	
	for (var i = 2; i <= Math.floor(_int/2); i++) {

		sum = ( i * (i-1) ) / 2;
		r = ( _int - sum ) / i;
				
		if ( Number.isInteger(r) && (r >= 1) ) { 
			count += 1;
			var c = [];
			for (var j = 0; j < i; j++ ) {
				c.push(r+j);
			}
			console.log( i, c.join(" + "), ' = ', c.reduce((a,b) => (a+b)) );
		} 
		
		if ( r <= 0 ) { break; } // This might be faster than solving for x = 1
		
	}
	
	return count;
	
}
var x;
x = contiguous(15);
console.log(x);
x = contiguous(45);
console.log(x);
x = contiguous(210);
console.log(x);
x = contiguous(1000);
console.log(x);