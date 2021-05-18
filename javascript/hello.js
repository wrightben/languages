var hello = function() {
	console.log("Hello, World");
	return 0;
}
hello();


(function(msg) {
	console.log(msg);
	return 0;
})("Hello, World");