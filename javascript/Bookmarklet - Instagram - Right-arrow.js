javascript: (function () {
	
	if (typeof x != "undefined") { clearInterval(x); x = undefined; return; }

	x = setInterval(function() {
		
		keyCode = 39;
		type = undefined;
		modifiers = undefined;
	
		var evtName = (typeof(type) === "string") ? "key" + type : "keydown";	
		var modifier = (typeof(modifiers) === "object") ? modifier : {};

		var event = document.createEvent("HTMLEvents");
		event.initEvent(evtName, true, false);
		event.keyCode = keyCode;
	
		for (var i in modifiers) {
			event[i] = modifiers[i];
		}

		document.dispatchEvent(event);
		
		console.log(x);
	
	}, 550);					

})();