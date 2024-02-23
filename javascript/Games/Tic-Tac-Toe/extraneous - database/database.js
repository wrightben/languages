var incrementer = function (s) {

	var n = s.length;
	var prepend = [];
	var append = [];
	
	for (var i = n - 2; i >= 0; i--) {
		
		var es = s.slice(i,n);
		var fs = es.slice().sort( (a,b) => b - a );
		
		var equal = es.every( (e,j) => e == fs[j] ); // es == fs
		if (! equal) {

			if (i > 0) { prepend = s.slice(0,i); } // Prepend unaffected columns
				
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
	
	return s;

};

var createList = function(pattern=-1) { // Example pattern: "....1...." (Move 1 in 5th cell)
	
	console.log("createList");

	var re = new RegExp(pattern);
	
	var list = [];
	var p1 = "123456789";
	var p = p1.split("");
	var s = "";	
	
	
	// Store the first iteration, if it matches re
	if ( pattern == -1 || re.test( p1 ) ) { list.push( p1 ); };
	
	// Until p is an empty set, increment and append p to list
	while(p.length > 0) {
		p = incrementer(p);
		s = p.join("");
		if ( pattern == -1 || re.test( s ) ) {
			list.push( s );
		};
	};
	
	
	// Patterns won't include the empty array
	if (list[list.length -1] == "") {
		list.pop(); // Remove trailing empty 
	};
	
	return list;
};


var getFilteredList = function( pattern, list=createList() ) { // Example pattern: "....1...." (Move 1 in 5th cell)
	return list.filter( (e) => new RegExp(pattern).test(e) );
}


var findPermutationWinner = function(game) { // Copy of checkGameStatus()

	var returnValue = undefined;
	
	var set = sets.find(function(e,i) {
	
		var a = game[e[0] - 1], // Convert Cell # into Value
			b = game[e[1] - 1],
			c = game[e[2] - 1];
			
		if ((a != -1) && (a == b) && (b == c)) { // a = b = c != -1
			returnValue = a; // Out of scope
			return true; // Return true
		};
		
	});
	
	// Return the array or undefined
	if (typeof returnValue != "undefined") {
		return [set, returnValue];
	};

};


var evaluateListItem = function(item) {

	// Steps
	var game5 = new Array(9).fill(-1);
	var game6 = new Array(9).fill(-1);
	var game7 = new Array(9).fill(-1);
	var game8 = new Array(9).fill(-1);
	var game9 = new Array(9).fill(-1);	

	var	move, value;

	for (var i = 0; i < 9; i++) {
	
		move = parseInt(item[i]);
		value = move % 2;

		switch (move) { // Move is the turn. Value is the 1 or 0. I is the position on the board.
			case 6:
				game6[i] = value;
				game7[i] = value;
				game8[i] = value;
				game9[i] = value;		
				break;
			case 7:
				game7[i] = value;
				game8[i] = value;
				game9[i] = value;			
				break;
			case 8:
				game8[i] = value;
				game9[i] = value;		
				break;
			case 9:
				game9[i] = value;
				break;
			default:	
				game5[i] = value;
				game6[i] = value;
				game7[i] = value;
				game8[i] = value;
				game9[i] = value;			
				break;																										
		};

	};
	
	var gameStatus = undefined;
	var gameIndex = undefined;
	[game5,game6,game7,game8,game9].find(function(e,i) {
		
		var _ = findPermutationWinner(e);
		if (typeof _ != "undefined") {
			gameStatus = _;
			gameIndex = i + 5;
			return true;
		}
		
	});
	
	(typeof gameStatus != "undefined") ? gameStatus.unshift(gameIndex) : gameStatus = -1;
	
	return gameStatus; // gameStatus is [ 7, [ 1, 5, 9 ], 1 ] as [ move#, set, winner ] or -1.
	
};

var resultSetCache = {};
var getResultSet = function( list=createList() ) {
	var new_list = [];
	var result = undefined;
	
	list.forEach(function(e) {
		if (typeof resultSetCache[e] == "undefined") {
			result = evaluateListItem(e);
			resultSetCache[e] = result;
		} else {
			result = resultSetCache[e];
		}
		console.log(result);
		new_list.push(result);
	});
	return new_list;
};


// *******************************
// VARIABLES + FUNCTION CALLS 
// *******************************

var sets = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,4,7],
	[2,5,8],
	[3,6,9],
	[1,5,9],
	[3,5,7]
];


// FILTERED PERMUTATION LISTS
// -------------------------------
// var list = createList("^..1.....");


// FILTERED PERMUTATION LISTS
// -------------------------------
// console.log(JSON.stringify(
// 	getFilteredList('^........9',
// 		getFilteredList('^2........', 
// 			getFilteredList("^....1....") ))
// ));


// ALL RESULTS (Determine Which Color Wins Each Permutation)
// -------------------------------
// list.forEach(function(item, index) {
// 	console.log(evaluateListItem(item));
// });


// CACHE ALL RESULTS
// -------------------------------
// console.log(JSON.stringify(
// 	getResultSet() // list: optional
// ));


var setExports = function() {
	if (typeof exports !== "undefined") {
		exports.getFilteredList = getFilteredList;
	}
}
setExports();


/*
	
	x moves first and makes 5 moves; x can win on its 3rd, 4th, and 5th moves, which are 5, 7 and 9
	o moves second and makes 4 moves; o can win on its 3rd and 4th moves, which are 6 and 8.
	
*/