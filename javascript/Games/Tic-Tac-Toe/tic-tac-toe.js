var sets = [[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]];

// Game
var game = new Array(9).fill(-1);
var getMoveNumber = function() {
	var move = 10; // Adding -1 to 10 successively
	game.forEach(function(e,i) {
		if (e == -1) { move += e; }
	});
	return move;
};

// getElementsByClassName
grid = document.getElementsByClassName('grid-container');
parent = grid.item(0);
children = parent.children;


var checkGameStatus = function(boole) { // boole = make computer move

	sets.find(function(e) { // For every set
	
		var a = game[e[0] - 1] % 2, // Convert Move # into Value
			b = game[e[1] - 1] % 2,
			c = game[e[2] - 1] % 2;
		
		// If a set is matching ... 	
		if ((a != -1) && (a == b) && (b == c)) { // Check all sets, only enter this block if a,b,c are equal.
			for (const child of children) { // Loop all the HTML squares
				var i = child.innerHTML;		
				if (i != marker[[1,0][a]]) { // Swap % = 0|1 into 1|0; If not the winning player, gray out.
					child.style.color = "rgb(237 237 237)";
				};
			};
			
			// End Game
			parent.removeEventListener('click',clickHandler);
			boole = false;
			
			return true;
		};
		
	});

	if (boole == true) { doComputerMove(); }

};



// Click
var marker = ["1","2"];
var color = ["66 133 244","251 189 5"];
var index = 1; // Will switch first player to 0.

var clickHandler = 	function(e, boole=false) {
	var cell = 0; //zero-based
	
	for (const child of children) { // cell is the index of the children array
		if (child == e.target) {
			var i = child.innerHTML;

			if (i == "&nbsp;") {
				(index == 0) ? index = 1: index = 0; // Switch Player's Marker
				child.innerHTML = marker[index]; // Set Marker
				child.style.color = "rgb("+color[index]+")";
				game[cell] = getMoveNumber();
				checkGameStatus(boole);
				return;
			}

		}
		cell ++;
	}
	
};



parent.addEventListener('click', clickHandler);