var a = [1,1,3];

var sum = a.reduce(function(a,b) {
	return a + b;
});

console.log(sum); // 5