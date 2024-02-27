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