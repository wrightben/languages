let x = [1,2,3] + [4,5,6];

console.log(x);

let a; 
let b = "Hello World";
console.log(a ?? b);

console.log( ((0 || null) || undefined) );


x = [2,3,4,5].reduce(function(a,b,c,d) {
	console.log(arguments.length, arguments);
	return a+b;
});
console.log(x);

// Interpolation
str1 = 'Hello';
console.log(`${str1} World`);


// ... 
console.log(Math.max(...[3,5,9,7,4,2]));


x = [1,2,3,"Test", 4,5];
for (i of x) { // in vs of
// 	console.log(x[i]);
	console.log(i);
}


a = new Set([3,7,5]);
b = new Set([4,7,6]);
// console.log(a.difference(b));