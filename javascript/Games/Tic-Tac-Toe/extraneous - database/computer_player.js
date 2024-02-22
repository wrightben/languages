/*
	Redefine clickHandler with boole=true (to make computer move)
	I hadn't encountered this problem before. Without researching 
	it, I assume the {add/remove}EventListener functions are doing
	a search on an index of events.
	
	It might be interesting to think through this design—I'm not sure yet
	if I would change my code or change the language itself. Why aren't
	both parameters strings?
*/
parent.removeEventListener('click',clickHandler); // Remove the previous definition, create a new one, 
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
parent.addEventListener('click',clickHandler);



// Select a RANDOM move (not an algorithm move)
var getRandomMove = function() {

	var random = [];
	for (var i = 0; i < 9; i++) {
		if (game[i] == -1) {
			random.push(i);
		};
	};
	
	var item = random[ Math.floor(Math.random() * random.length) ];
	
	// DEBUG
	// console.log(random, item, children, children.item(item) );
	
	return item;
};



var doComputerMove = function() {

	var item = getRandomMove();	
	
	// Implement Move
	setTimeout(function() {
		clickHandler( { "target":children.item(item) }, false ); // false = don't do a computer move after
	}, 500);

};



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
			- Pick a permutation that wins (or draws) in the shortest time. If it's impeded, try again.
		
	NOTE:
	Other seemingly less-valuable questions about the non-random algorithm were removed from this file on Feb 22 2024. See GitHub history if necessary.
*/