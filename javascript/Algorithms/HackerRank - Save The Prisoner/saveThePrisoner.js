// https://www.hackerrank.com/challenges/save-the-prisoner/problem?isFullScreen=true
// Roughly 80% solution rate on site

function saveThePrisoner(n, m, s) {

    var x = m % n;
    var seat = x + s - 1;
    
    if (seat > n) { seat -= n; }
    if (seat == 0) { seat = n; }
   
    return seat;
    
}


// Save the Prisoner: Example Test Cases
var x;
x = saveThePrisoner(4,6,2);
console.log(x, 3);
x = saveThePrisoner(5,2,1);
console.log(x, 2);
x = saveThePrisoner(5,2,2);
console.log(x, 3);
x = saveThePrisoner(7,19,2);
console.log(x, 6);
x = saveThePrisoner(3,7,3);
console.log(x, 3);
