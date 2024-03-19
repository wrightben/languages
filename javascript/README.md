# JavaScript

```Shell
node hello.js
```

### Bookmarklets

The Web is complete. I can do in a browser almost everything I want to do on a computer. Yet there is still plenty of work necessary to create the most efficient experiences possible. Bookmarklets (custom JS tools) are under-exploited opportunities.

<a href='javascript:(function(){/*USER SETTING:Set the number of rows to scrollIMPROVEMENT SUGGESTION:List names in console at sb()*/var sb_row_count = 3;if (typeof x != "undefined") { console.log("Clear "+x); clearInterval(x);x = undefined;return;}sb = function() {var row_height = 0;var sb_he = document.getElementsByClassName("model model_list_item_preview");for (c of sb_he) {if (c.getBoundingClientRect().height > 0) {row_height = c.getBoundingClientRect().height;}}sb_scroll_amount = row_height * sb_row_count;window.scrollBy({top: sb_scroll_amount,left: 0,behavior: "smooth" /* instant | smooth */});console.log("sb: "+sb_scroll_amount);};sb_up = function() {window.scrollBy({top: sb_scroll_amount * -1,left: 0,behavior: "smooth" /* instant | smooth */});};sb_top = function() {window.scrollBy({top: -40000,left: 0,behavior: "instant"});};/*Additional Bookmarklets: javascript:sb_top();javascript:sb_up();*/sb();x = setInterval(sb, 3000);console.log(x);})();'>MFCm</a>