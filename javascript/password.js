function generate(d) {
	var password = [];
	var characters = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@$'; // Zero-based
	for (var i = 0; i < d; i++) {
		password.push( characters[Math.floor( Math.random() * 64 )] ); // [0..63] inclusive; + 1 for [1..64]
	}
	return password.join("");
}

console.log(generate(10));