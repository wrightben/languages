javascript:(function(){

	/*	USER SETTING:
		Set the number of rows to scroll
		
		IMPROVEMENT SUGGESTION:
		List names in console at sb()
	*/
	var sb_row_count = 3;


	if (typeof x != "undefined") { 
		console.log("Clear "+x); 
		clearInterval(x);
		x = undefined;
		return;
	}
	
	sb_e = document.getElementById('online_broadcasters_container');
	
	sb = function() {
	
		var row_height = 0;
		var sb_he = document.querySelectorAll('[id^=MfcBroadcasterDisplay_SubContainer]').item(0).childNodes;
		
		for (c of sb_he) {
			if (c.getBoundingClientRect().height > 0) {
				row_height = c.getBoundingClientRect().height;
			}
		}
	
		var scroll_amount = row_height * sb_row_count;
		sb_e.scrollBy({
			top: scroll_amount,
			left: 0,
			behavior: "smooth" /* instant | smooth */
		});
		console.log('sb: '+scroll_amount);
	};
	
	sb_top = function() {
		sb_e.scrollBy({
			top: -40000,
			left: 0,
			behavior: "instant"
		});		
	};
	
	/* Additional Bookmarklet: javascript:sb_top(); */
	
	sb();
	
	x = setInterval(sb, 3000);
	console.log(x);

})();