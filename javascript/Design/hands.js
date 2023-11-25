var x = 700000;

while (x > 0) {
	var _ = [
		Math.floor(Math.random() * 9) + 1,
		Math.floor(Math.random() * 9) + 1,
		Math.floor(Math.random() * 9) + 1,
		Math.floor(Math.random() * 9) + 1,
		Math.floor(Math.random() * 9) + 1,
		Math.floor(Math.random() * 9) + 1
	].sort().reverse();
	console.log(
		_	
	);
	
	x -= 1;
}
