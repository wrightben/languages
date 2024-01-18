// SCROLL
javascript: (() => {
	if (typeof x == "undefined") { x = []; };
	y = 5;
	_stop = function() {
		x.forEach(function(i) { clearInterval(i); x = []; });
	};
	_scroll = function() { window.scrollBy(0, y); _prompt(); }; 
	_go = function() { 	x.push(setInterval(_scroll,20)); console.log(x); };
	_prompt = function() {
		if (typeof acu == "undefined") { acu = 0; };
		if ( (document.getElementsByTagName("main")[0].textContent.contains("You're all caught up")) && (acu == 0) ) {
			_stop();		
			c = confirm("You're all caught up. Keep scrolling?");
			acu += 1;
			if (c) { _go(); };
		};
	};
	_go();
})();


// STOP
javascript: (() => { _stop(); })();