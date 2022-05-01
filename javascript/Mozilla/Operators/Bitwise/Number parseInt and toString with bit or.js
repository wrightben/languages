var x = Number.parseInt( '1001', 2 ); // 9
var y = Number.parseInt( '0010', 2 ); // 2
var z = x | y;	// 1011
console.log( z, z.toString(2) ); // 11, 1011
console.log( z.toString(2).match(/1/g).length );