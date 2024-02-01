function minimumDistances(a) {
    var o = {};
    
    a.forEach(function(e,i) {
        if (typeof o[e] != "undefined") {
            o[e].push(i);
        } else {
            o[e] = [i];
        }
    });
    // console.log(o);
    
    var c = [];
    var keys = Object.keys(o);
    keys.forEach(function(e,i) {
        if (o[e].length == 2) {
            c.push( Math.abs(o[e][0] - o[e][1]) );
        }
    });
    
    if (c.length == 0) { return -1; }
    
    // console.log(c, Math.min(...c));
    
    return Math.min(...c);
}

/*
	PROBLEM:
	The distance between two array values is the number of indices between them. Given , find the minimum distance between any pair of equal elements in the array. If no such value exists, return .
	
	FUNCTION:
	The function is expected to return an INTEGER.
	The function accepts INTEGER_ARRAY a as parameter.
 */
