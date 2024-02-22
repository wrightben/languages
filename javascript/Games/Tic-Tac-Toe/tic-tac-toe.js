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

// getElementsByClassName
grid = document.getElementsByClassName('grid-container');
parent = grid.item(0);
children = parent.children;


var checkGameStatus = function(boole) { // boole = make computer move

	sets.find(function(e,i) {
	
		var a = game[e[0] - 1], // Convert Cell # into Value
			b = game[e[1] - 1],
			c = game[e[2] - 1];
			
		if ((a != -1) && (a == b) && (b == c)) {
			for (const child of children) {
				var i = child.innerHTML;
				if (i != marker[a]) {
					child.style.color = "rgb(237 237 237)";
				}
			};
			parent.removeEventListener('click',clickHandler);
			boole = false;
			return;
		}
		
	});
	
	if (boole == true) { doComputerMove(); }

};



// Click
var marker = ["1","2"];
var color = ["66 133 244","251 189 5"];
var index = 1; // Will switch first player to 0.

var clickHandler = 	function(e, boole=true) {
	var cell = 0; //zero-based
	
	for (const child of children) {
		if (child == e.target) {
			var i = child.innerHTML;

			if (i == "&nbsp;") {
				(index == 0) ? index = 1: index = 0;
				child.innerHTML = marker[index];
				child.style.color = "rgb("+color[index]+")";
				game[cell] = index;
				checkGameStatus(boole);
				return;
			}

		}
		cell ++;
	}
	
};


parent.addEventListener('click', clickHandler);

/*
	x - When a player "wins", turn the losing letters to rgb(237 237 237). Disable click.
	x - Store each move in a 9-value array; Create the list of sets for each row, column, diagonal.
	x - Figure out which permutations win and for whom.
		x - The 9-digit permutations in filter.js can be converted to odd-even characters. 
		x - No permutation can be less than 5 characters long.
		x - Winning permutations are usually less than 9 characters.
			x - Does x ever win at 9? (Yes)
	x. Implement computer player (O).
		- Implement a non-random algorithm (O)
			- For every move that x can make, o's best move is known?
				- No. Pick a permutation that wins (or draws) in the shortest time. If it's impeded, try again.
					- Are permutations that win from move 2 in the same amount of time equal?
			- Can O exploit poor play? Or be defensive if necessary?
				- What indicates these conditions?
			- Shall human-recognized "strategy" (not end state) be encoded? Or shall it be determined by the computer?
			- Is it possible, beneficial, or necessary to evaluate every permutation in advance and use those results to achieve the computer-player? (Of course, yes. Calculate it ahead of time and use that.)
			- How do the responses of groups of players change the perspective on what move should be made? Are there any interesting cases in Tic-Tac-Toe?
*/





var doComputerMove = function() {

	// Select a RANDOM move (not an algorithm move)
	var random = [];
	for (var i = 0; i < 9; i++) {
		if (game[i] == -1) {
			random.push(i);
		};
	};
	
	var item = random[ Math.floor(Math.random() * random.length) ];
	
	// DEBUG
	// console.log(random, item, children, children.item(item) );
	
	// Implement Move
	setTimeout(function() {
		clickHandler( { "target":children.item(item) }, false ); // false = don't do a computer move after
	}, 500);

};