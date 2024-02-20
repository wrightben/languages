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


var checkGameStatus = function() {

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
			return;
		}
		
	});

};


// Click
var marker = ["x","o"];
var color = ["66 133 244","251 189 5"];
var index = 1; // Will switch first player to 0.

var clickHandler = 	function(e) {
	var cell = 0; //zero-based
	
	for (const child of children) {
		if (child == e.target) {
			var i = child.innerHTML;

			if (i == "&nbsp;") {
				(index == 0) ? index = 1: index = 0;
				child.innerHTML = marker[index];
				child.style.color = "rgb("+color[index]+")";
				game[cell] = index;
				checkGameStatus();
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
	3. Figure out which permutations win and for whom.
		- The 9-digit permutations in filter.js can be converted to odd-even characters. 
		- No permutation can be less than 5 characters long.
		- Winning permutations are usually less than 9 characters. (Does x ever win at 9?)
	4. Implement computer player. This is probably the easiest to do since it's so easy to memorize the strategy. The auto player function eliminates the if-else block.
*/