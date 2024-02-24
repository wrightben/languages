/*
	Redefine clickHandler with boole=true (to make computer move).
	I hadn't encountered this problem before. Without researching 
	it, I assume the {add/remove}EventListener functions are iterating 
	over an index of functions and doing an object comparison instead of
	using a string as an id.
	
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
				game[cell] = getMoveNumber();
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


// Select a NON-RANDOM move
var selectedPermutation = ["123456789"]; // List of 1 "selected" permutation
var filteredList = undefined; // List of filtered permutations
var	getNonRandomMove = function(level=9) {
	
	/*
		x Find game state
		x Create the regex permutation
		x Get list of permutations 
		x Get results
		x Sort list of permutations by results
		x Does selectedPermutation match regex?
			x Select permutation
				- Random selection? Caution: This is not as easy as it first seems. The interaction between a plan (consistency) and a block (immediacy) requires thought. The choice to randomize plan selection can happen at the first move only or any time the plan must change. But when this works, it's extremely compelling in this implementation. Note to self: Good job.
		x Make NEXT move
			x Optimize NEXT to get the middle square
				x Refactor to randomly play non-middle NEXT 20% of the time?
			x Block with NEXT
				x Don't block if NEXT can win
			
	*/
	
	
	// 1. Create the regex from the game
	var regex = [];
	for (var i = 0; i < 9; i++) {
		( game[i] != -1 ) ? regex.push(game[i]) : regex.push('.');
	};
	regex = '^'+regex.join("");
	
	// 2. Get a filtered list of permutations (either from createList() or filteredList)
	(typeof filteredList == "undefined") ? 
		filteredList = getFilteredList(regex) : 
		filteredList = getFilteredList(regex, filteredList);
	
	// 3. Create resultSetCache
	getResultSet(filteredList);

	// 4. Sort list of permutations by results
	filteredList.sort(function(a,b) {
	
		var ar = resultSetCache[a];
		var br = resultSetCache[b];
		
		// SORT: Value (w,d,l) ... Order (Asc): 0 ("o" wins), 0.5 (Draw), 1 ("x" wins)
		if (ar[2] == br[2]) { return ar[0] - br[0]; } 
		// SORT: Length ... Order (Asc): 5,6,7,8,9
		return ar[2] - br[2];
		
	});
	
	// 5. Select the 0th permutation or use selectedPermutation
	selectedPermutation = getFilteredList(regex, selectedPermutation); // Is the permutation still valid?
	if (selectedPermutation.length == 0) {
		selectedPermutation = [filteredList[0]]; // Winning is the only option.
	};
	
	var move = getMoveNumber();
	var end = resultSetCache[selectedPermutation[0]][0]; // Turn 
	
	// 6. Select the NEXT move
	// ?. NEXT MOVE: selecting from shortest winning permutation
	var next = selectedPermutation[0].indexOf(move);
	
	// ?. NEXT MOVE: selecting open center on o's first move
	var chance = Math.random() > .2; // Randomize center acquisition (20% off center)
	if ( (move == 2) && (game[4] == -1) && ( chance ) ) { next = 4; }
	
	// ?. NEXT MOVE: win on next move or block?
	console.log(move, end, chance, next, game, regex);
	if ( move < end ) { // Block
	
		// ?. NEXT MOVE: selecting for block
		sets.find(function(e) { // For every set
	
			var a = game[e[0] - 1], // Convert Move # into Value
				b = game[e[1] - 1],
				c = game[e[2] - 1];
		
			a_ = a % 2;
			b_ = b % 2;
			c_ = c % 2;
		
			// REFACTOR
			if ( (a_ == -1) && (b_ == c_) && (c_ == 1) ) {
				next = e[0] - 1;
			} else if ( (b_ == -1) && (a_ == c_) && (a_ == 1) ) {
				next = e[1] - 1;
			} else if ( (c_ == -1) && (a_ == b_) && (b_ == 1) ) {
				next = e[2] - 1;
			};
		
		});	
	
	};
	
	
// 	DEBUG
// 	console.log(JSON.stringify(filteredList));
// 	console.log(JSON.stringify(resultSetCache));
// 
// 	filteredList.forEach(function(e,i) {
// 		console.log(i, e, JSON.stringify(resultSetCache[e]), filteredList.length );
// 	});
//
// 	console.log(selectedPermutation);
//
// 	console.log(selectedPermutation, move, next);


	return next;
	
};



var doComputerMove = function() {
	
	var item = getNonRandomMove();
// 	var item = getRandomMove();	
	
	// Implement Move
	setTimeout(function() {
		clickHandler( { "target":children.item(item) }, false ); // false = don't do a computer move after
	}, 250);

};