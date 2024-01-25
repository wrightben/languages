var x = "1 7";
r = x.split(" ");

// Create an array
l = r[1]-r[0] + 1;
a = new Array(l);
a[0] = parseInt(r[0]);

// Populate the array with the range
for (var i = 1; i < l; i++ ) {
	a[i] = a[i-1] + 1;
}

// List the subranges
for (var i = 0; i <= l; i++) {
	for (var j = i + 1; j <= l; j++) {	
		console.log(a.slice(i,j));	
	}
}