var x = ["1234",
"1243",
"1324",
"1342",
"1423",
"1432",
"2134",
"2143",
"2314",
"2341",
"2413",
"2431",
"3124",
"3142",
"3214",
"3241",
"3412",
"3421",
"4123",
"4132",
"4213",
"4231",
"4312",
"4321"];

var list = [];
x.forEach(function(e) {
	x.forEach(function(f) {
		list.push(e+f);
	});
});


re = "[1234][1234][1234][1234][1234][1234][1234][1234]"; // 576 items

var getFilteredList = function(re) {
	return list.filter( (e) => new RegExp(re).test(e) );
};



// Puzzle Solving

re = "[34][2][134][13][123][1234][1234][12]"; // Example of puzzle clues applied.


ul = getFilteredList(re);
console.log( JSON.stringify(ul), ul.length );





/*
	Logic Puzzle
	
	- A-B-C (The relationship between A-C is implicit.)
	The initial regular expression filters none of the 576 list elements.
	There are two kinds of alterations to the initial regular expression.
		- A known relationship
		- An exclusion

	The clues tell you which alterations to make. But the language must be interpreted.
	The clues explain that
		- two things are related directly
		- two or more things are not related
		- one thing precedes another
		
	Question: Can A-C be extracted and does the reduction of items yield numbers for unknowns? (Is it like Sudoku?)
	
	Would I enjoy writing code that could parse the clues? No.

*/