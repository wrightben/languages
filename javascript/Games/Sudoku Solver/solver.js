var intersections = [[1,1,1],
[1,2,1],
[1,3,1],
[1,4,2],
[1,5,2],
[1,6,2],
[1,7,3],
[1,8,3],
[1,9,3],
[2,1,1],
[2,2,1],
[2,3,1],
[2,4,2],
[2,5,2],
[2,6,2],
[2,7,3],
[2,8,3],
[2,9,3],
[3,1,1],
[3,2,1],
[3,3,1],
[3,4,2],
[3,5,2],
[3,6,2],
[3,7,3],
[3,8,3],
[3,9,3],
[4,1,4],
[4,2,4],
[4,3,4],
[4,4,5],
[4,5,5],
[4,6,5],
[4,7,6],
[4,8,6],
[4,9,6],
[5,1,4],
[5,2,4],
[5,3,4],
[5,4,5],
[5,5,5],
[5,6,5],
[5,7,6],
[5,8,6],
[5,9,6],
[6,1,4],
[6,2,4],
[6,3,4],
[6,4,5],
[6,5,5],
[6,6,5],
[6,7,6],
[6,8,6],
[6,9,6],
[7,1,7],
[7,2,7],
[7,3,7],
[7,4,8],
[7,5,8],
[7,6,8],
[7,7,9],
[7,8,9],
[7,9,9],
[8,1,7],
[8,2,7],
[8,3,7],
[8,4,8],
[8,5,8],
[8,6,8],
[8,7,9],
[8,8,9],
[8,9,9],
[9,1,7],
[9,2,7],
[9,3,7],
[9,4,8],
[9,5,8],
[9,6,8],
[9,7,9],
[9,8,9],
[9,9,9]];

var rows = [
	[1,2,3,4,5,6,7,8,9],			// 1
	[10,11,12,13,14,15,16,17,18],	// 2
	[19,20,21,22,23,24,25,26,27],	// 3
	[28,29,30,31,32,33,34,35,36],	// 4
	[37,38,39,40,41,42,43,44,45],	// 5
	[46,47,48,49,50,51,52,53,54],	// 6
	[55,56,57,58,59,60,61,62,63],	// 7
	[64,65,66,67,68,69,70,71,72],	// 8
	[73,74,75,76,77,78,79,80,81]	// 9
];

var columns = [
	[1,10,19,28,37,46,55,64,73],	// 1
	[2,11,20,29,38,47,56,65,74],	// 2
	[3,12,21,30,39,48,57,66,75],	// 3
	[4,13,22,31,40,49,58,67,76],	// 4
	[5,14,23,32,41,50,59,68,77],	// 5
	[6,15,24,33,42,51,60,69,78],	// 6
	[7,16,25,34,43,52,61,70,79],	// 7
	[8,17,26,35,44,53,62,71,80],	// 8
	[9,18,27,36,45,54,63,72,81]		// 9
];

var boxes = [
	[1,2,3,10,11,12,19,20,21],		// 1
	[4,5,6,13,14,15,22,23,24],		// 2
	[7,8,9,16,17,18,25,26,27],		// 3
	[28,29,30,37,38,39,46,47,48],	// 4
	[31,32,33,40,41,42,49,50,51],	// 5
	[34,35,36,43,44,45,52,53,54],	// 6
	[55,56,57,64,65,66,73,74,75],	// 7
	[58,59,60,67,68,69,76,77,78],	// 8
	[61,62,63,70,71,72,79,80,81]	// 9
];

var puzzle = ".1...7856786.15..44...83.1....1.2.6.2...9..7...5..4.2...38..69..2..4.18.19..56.47";

var regexes = puzzle.split("");
regexes.forEach(function(e,i) {
	if (e != ".") {
		regexes[i] = [parseInt(e)];	
	} else {
		regexes[i] = [1,2,3,4,5,6,7,8,9];
	}
});

var setRegex = function (cell) { // 1-based array

	var re = regexes[cell - 1]; // Cell regex value
	
	if (re.length == 1) { return; } // Don't evaluate Cell regex values that are complete (length = 1)
		
	var i = intersections[cell - 1];
	var r = rows[ i[0] - 1 ];
	var c = columns[ i[1] - 1 ];
	var b = boxes[ i[2] - 1 ];
	
	
	// Rows, Columns and Boxes
	r.concat(c,b).forEach(function(e,i) { // 1-based arrays
		if (e != cell) { // Don't evaluate self from list of intersecting cell indexes
			
			// Value of the cell index
			re = regexes[cell - 1];
			
			// Value of the current index in the list of Rows, Columns and Boxes
			var ci = regexes[e - 1];
			
			// IF ci (cell) from Rows, Columns and Boxes has 1 value, filter its value from the regex for cell
			if (ci.length == 1) {
				regexes[cell - 1] = re.filter( (val) => val != ci[0] );
			}

		};
	});

};

// setRegex creates the array of regexes; Grepping is now possible.
for (var i = 1; i <= 81; i++) { setRegex(i); }


var tsvPuzzle = function () {

	var _ = puzzle.split("");
	var r = [];
	
	for (var i = 0, j = i; i < 81; i += 9, j = i) {
		r.push([_[j],_[j+=1],_[j+=1],_[j+=1],_[j+=1],_[j+=1],_[j+=1],_[j+=1],_[j+=1]].join("\t"));
	}
	
	return r;

}

var tsvRegexes = function() {
	
	var r = [];
	var _ = regexes.slice();
	
	for (var i = 0, j = i; i < 81; i += 9, j = i) {
		r.push([
			"["+_[j].join("")+"]",
			"["+_[j+=1].join("")+"]",
			"["+_[j+=1].join("")+"]",
			"["+_[j+=1].join("")+"]",
			"["+_[j+=1].join("")+"]",
			"["+_[j+=1].join("")+"]",
			"["+_[j+=1].join("")+"]",
			"["+_[j+=1].join("")+"]",
			"["+_[j+=1].join("")+"]"
		].join("\t"));
	}
	
	return r;
	
}

var regexGrep = function (a) { // a is list of integers that corresponds to an index from rows, columns or boxes
	
	var r = [];
	
	a.forEach(function(e,i) {
		r.push("["+regexes[e - 1].join("")+"]");
	});
	
	return r;
	
}

var getList = function(a,b) { // a = cell (1-based), b = [0|1|2] for rows,columns,boxes

	var r;
	var cell = intersections[a-1];
	
	if (b == 1) {
		r = columns[cell[b] - 1];
	} else if (b == 2) {
		r = boxes[cell[b] - 1];
	} else {
		r = rows[cell[b] -1];
	}
	
	return r;
}

// List regexes
// console.log(JSON.stringify(regexes));

console.log(tsvPuzzle().join("\n"))
console.log(tsvRegexes().join("\n"))


// EXAMPLES:

// Example: Get row list for cell 1
// console.log( getList( 1, 0 ) );

// Example: Get column list for cell 1
// console.log( getList( 1, 1 ) );

// Example: Get box list for cell 1
// console.log( getList( 1, 2 ) );

// Example: Get the regexGrep for a list
// console.log( regexGrep( getList( 1, 2 ) ).join("") );