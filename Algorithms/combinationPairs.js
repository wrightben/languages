var combinationPairs = function(arr) {
	
	var n = arr.length;
	
	for (var i = 0; i < n; i++) { // Indexes 0 .. 5
		for (var j = i + 1; (j < n) && ( j != i); j++ ) {
			
			console.log(i,j);
				
		}
	
	}
	
}


combinationPairs([0,1,2,3,4,5]); //Length 6
