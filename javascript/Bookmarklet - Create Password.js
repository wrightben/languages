javascript: (function() {
	var x = prompt("How many characters? (Minimum 3)");
	
	var req1 = Math.floor(Math.random() * 3) + 1;
	var special	= "!@$";
	var numeric	= "123456789";
	var alphaUC	= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var alphaLC = "abcdefghijklmnopqrstuvwxyz";
	var password = [];
	var characters = numeric + alphaLC + alphaUC + special;

	/* Create a password of x-length; Each character can be any of the 64 */
	for (var i = 0; i < x; i++) {
		password.push(characters[Math.floor(Math.random() * 64)]);
	};
	
	/* Replace between 1 and 3 random characters in the password with special characters */
	for (var j = 0; j < req1; j++) {
		password[Math.floor(Math.random() * x)] = special[Math.floor(Math.random() * 3)];
	};
	
	/* Replace 1 random character in the password with a number */
	password[Math.floor(Math.random() * x)] = numeric[Math.floor(Math.random() * 9)];
	
	alert(password.join(""));
	
})();
/*
	- Reduction is possible (UC or LC, for example) if each character is chosen from a complete list of 64.
		- Guessing when the reduction occurs is unlikely.
		- No one cares what your password is.

	- The 4 classes (UC, LC, # and $) could be weighted equally
		- Step 1: Choose random (1-4)
		- Step 2: Choose random from class
*/