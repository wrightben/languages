var sets = [ [2,10,11],
	[1,3,10,11,12],
	[2,4,11,12,13],
	[3,5,12,13,14],
	[4,6,13,14,15],	
	[5,7,14,15,16],
	[6,8,15,16,17],
	[7,9,16,17,18],
	[8,17,18],
	[1,2,11,19,20],
	[1,2,3,10,12,19,20,21],
	[2,3,4,11,13,20,21,22],
	[3,4,5,12,14,21,22,23],
	[4,5,6,13,15,22,23,24],
	[5,6,7,14,16,23,24,25],
	[6,7,8,15,17,24,25,26],		
	[7,8,9,16,18,25,26,27],	
	[8,9,17,26,27],	
	[10,11,20,28,29],	
	[10,11,12,19,21,28,29,30],	
	[11,12,13,20,22,29,30,31],	
	[12,13,14,21,23,30,31,32],	
	[13,14,15,22,24,31,32,33],	
	[14,15,16,23,25,32,33,34],	
	[15,16,17,24,26,33,34,35],	
	[16,17,18,25,27,34,35,36],	
	[17,18,26,35,36],	
	[19,20,29,37,38],	
	[19,20,21,28,30,37,38,39],
	[20,21,22,29,31,38,39,40],	
	[21,22,23,30,32,39,40,41],	
	[22,23,24,31,33,40,41,42],	
	[23,24,25,32,34,41,42,43],	
	[24,25,26,33,35,42,43,44],	
	[25,26,27,34,36,43,44,45],	
	[26,27,35,44,45],	
	[28,29,38,46,47],	
	[28,29,30,37,39,46,47,48],	
	[29,30,31,38,40,47,48,49],	
	[30,31,32,39,41,48,49,50],	
	[31,32,33,40,42,49,50,51],	
	[32,33,34,41,43,50,51,52],	
	[33,34,35,42,44,51,52,53],	
	[34,35,36,43,45,52,53,54],	
	[35,36,44,53,54],	
	[37,38,47,55,56],	
	[37,38,39,46,48,55,56,57],	
	[38,39,40,47,49,56,57,58],	
	[39,40,41,48,50,57,58,59],	
	[40,41,42,49,51,58,59,60],	
	[41,42,43,50,52,59,60,61],	
	[42,43,44,51,53,60,61,62],	
	[43,44,45,52,54,61,62,63],	
	[44,45,53,62,63],	
	[46,47,56,64,65],	
	[46,47,48,55,57,64,65,66],	
	[47,48,49,56,58,65,66,67],	
	[48,49,50,57,59,66,67,68],	
	[49,50,51,58,60,67,68,69],	
	[50,51,52,59,61,68,69,70],	
	[51,52,53,60,62,69,70,71],	
	[52,53,54,61,63,70,71,72],	
	[53,54,62,71,72],	
	[55,56,65,73,74],	
	[55,56,57,64,66,73,74,75],	
	[56,57,58,65,67,74,75,76],	
	[57,58,59,66,68,75,76,77],	
	[58,59,60,67,69,76,77,78],	
	[59,60,61,68,70,77,78,79],	
	[60,61,62,69,71,78,79,80],	
	[61,62,63,70,72,79,80,81],	
	[62,63,71,80,81],	
	[64,65,74],	
	[64,65,66,73,75],	
	[65,66,67,74,76],	
	[66,67,68,75,77],	
	[67,68,69,76,78],	
	[68,69,70,77,79],	
	[69,70,71,78,80],	
	[70,71,72,79,81],	
	[71,72,80]
];

// getElementsByClassName
grid = document.getElementsByClassName('grid-container');
parent = grid.item(0);
children = parent.children;



// Set Mines
var mines = new Array(81).fill(0);
var setMines = function() {
	count = 10;
	var i;
	while (count > 0) {
		while (mines[ i ] != 0) {
			i = Math.floor( Math.random() * 81 );
		}
		mines[ i ] = -1;
		count --;
	}
};
setMines();



// Place Counts
sets.forEach(function(e,i) {

	if (mines[i] == -1) { return; }
	
	var count = 0;
	e.forEach(function(_e,_i) {
 		if (mines[_e - 1]  == -1) {
			count += 1;
		}
	});

	mines[i] = count;
	
});



var swept = new Array(81).fill(0);
var sweep = function(index) {

	swept[index] = -1;
	
	var set = sets[index];
	
	set.forEach(function(e) {
		var child = children.item(e - 1);
		var count = mines[e - 1];
		child.innerHTML = count;
	});
	
	seek();
	
};



var seek = function() {
	for (var index = 0; index < 81; index++) {
		var ih = children.item(index).innerHTML;
// 		console.log(index, mines[index], swept[index], ih);
		if ( (ih == 0) && (swept[index] != -1) ) {
			sweep(index);
			return; /* One click at a time. */
		}
	}
}


// Click
parent.addEventListener('click', 
	function(e) {
		var index = 0;
		for (const child of children) {
			if (child == e.target) {
				var i = mines[index];

				switch (i) {
					case -1:
						child.innerHTML = "&#128163";
						parent.style.color = "red";
						break;
					case 0:
						child.innerHTML = 0;
						sweep(index);
						break;					
					default:
						child.innerHTML = i;
				}
					
			}
			index ++;
		}
	}
);

// RightClick for Flag
parent.addEventListener('contextmenu', (e) => {
		e.preventDefault();
	
		var index = 0;
		for (const child of children) {
			if (child == e.target) {
// 				console.log(child);
				(child.innerHTML == "?") ?
					child.innerHTML = "" :
					child.innerHTML = "?";
			}
			index ++;
		}
	
});





/*

		1	2	3	4	5	6	7	8	9
		10	11	12	13	14	15	16	17	18
		19	20	21	22	23	24	25	26	27
		28	29	30	31	32	33	34	35	36
		37	38	39	40	41	42	43	44	45
		46	47	48	49	50	51	52	53	54
		55	56	57	58	59	60	61	62	63
		64	65	66	67	68	69	70	71	72
		73	74	75	76	77	78	79	80	81

		Copy into Excel
*/



// In the Google algorithm, a click on a clear square reveals all contiguous clear squares to a number. A click on a number reveals just that number. A click on a mine ends the game and reveals the board. The first click seems to be safe. I thought older versions allowed you to click a mine on the first click. I like this. Zeros will overwrite question marks when no bombs are present.