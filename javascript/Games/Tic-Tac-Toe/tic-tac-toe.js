var sets = [];

// getElementsByClassName
grid = document.getElementsByClassName('grid-container');
parent = grid.item(0);
children = parent.children;


// Click
var marker = ["x","o"];
var color = ["66 133 244","251 189 5"];
var index = 1; // Will switch first player to 0.


parent.addEventListener('click', 
	function(e) {

		for (const child of children) {
			if (child == e.target) {
				var i = child.innerHTML;

				if (i == "&nbsp;") {
					(index == 0) ? index = 1: index = 0;
					child.innerHTML = marker[index];
					child.style.color = "rgb("+color[index]+")";
				}

			}
		}
	}
);