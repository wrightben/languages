javascript:(function() {
	e = document.querySelectorAll('input[type=email]');
	p = document.querySelectorAll('input[type=password]');
	if (e.length > 0) {
		e.item(0).value = "username";
	}
	if (p.length > 0) {
		p.item(0).value = "password";
	}
})();