javascript: (function() {
	var x = prompt("How many characters? (Minimum 3)");
	
	var req1 = Math.floor(Math.random() * 3) + 1;
	var special = "!@$";
	var numeric = "123456789";
	var password = [];
	var characters = numeric + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" + special;

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
	- Reduction is possible (UC or LC).
	- It's not easily guessable what reduction will actually occur in the originally uploaded body
	- This code explicitly shows reduction was considered
	
	
	- Weighted numbers can be imitated like this:
		1:1,2:1,3:1 {30% = 1};
		4:2,5:2 {20% = 2};
		6:3,7:3,8:3,9:3 {40% = 3}; 
		10:4 {10% = 5}
*/