var getFibonacci = function(a,b,c) {
	
	if (c >= 1) {
		c --;
		return getFibonacci(b, a+b, c);
	}
	return a+b;
	
}

var getFibonacciHC = function(a,b) {

// 	console.log(a,b, a+b);
	
	while(a+b < 144) {
		return getFibonacciHC(b, a+b);
	}

	return a+b;
	
}

var getFibonacciFromArray = function(p) { // 1 < p < n

	var fib = new Array(p);
	fib[0] = 0;
	fib[1] = 1;
	for (var i = 2; i < p; i++ ) {
		fib[i] = fib[i-2] + fib[i-1];
	}
// 	console.log( JSON.stringify(fib) );

	return fib[p - 1];

}

// console.log( getFibonacci(0,1,10) );

// console.log( getFibonacciHC(0,1) );

console.log( getFibonacciFromArray(13) ); // getFibonacciFromArray(1) = 0; getFibonacciFromArray(13) = 144

/*
	NOTES:
	This was a toy recursion problem in an interview, but I don't understand why. getFibonacciFromArray(p),
	performs well, and can be easily changed to return a range (slice()). It might also start with a hard-coded
	list of fibonacci numbers, only appending to the list when p is unusually high. 
*/