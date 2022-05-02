This challenge was presented by Bloomberg using HackerRank in April 2022. I couldn't remember the algebraic solution during the interview.

```JavaScript
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
```


```
2 7 + 8  =  15
3 4 + 5 + 6  =  15
5 1 + 2 + 3 + 4 + 5  =  15
3
```
