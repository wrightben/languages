randomNumber = function(max) { // Range [1..Max]
	return Math.floor(Math.random() * max)) + 1;
};
/*
	// Range 1-3
	randomNumber(3)

	// Range 0-3
	randomNumber(4) - 1
	
	// Range 3-7
	randomNumber(5) + 2 // 5 = span, 2 equals the displacement (from 1 to 3, range of 4 to reach 7)
	
	// Range 3-6
	randomNumber(4) + 2 // 4 = span, 2 equals the displacement (from 1 to 3, range of 4 to reach 6)
*/