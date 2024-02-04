gc = document.getElementsByClassName('grid-container');
parent = gc.item(0);
children = parent.children;

parent.addEventListener('click', 
	function(e) {
		var count = 0;
		for (const child of children) {
			if (child == e.target) {
				console.log(count);
			}
			count ++;
		}
	}
);

/*
	This is my ignorant approach to a delegate. I don't know how to get the index 
	of the child element from the for-of statement. I think it should be a lot easier
	and the documentation is terrible. Searching for this construct in a DB would be a
	challenge even for CGI if it had to use a regular human's language to understand
	what it was trying to do.
*/