function chocolateFeast(n, c, m) {

    var wrappers = Math.floor(n / c);
    var _wrappers;
    var eaten = wrappers; 
    
    while ( wrappers >= m) {
        _wrappers = Math.floor(wrappers / m);
        eaten += _wrappers;
        wrappers -= _wrappers * m; // Wrappers turned in
        wrappers += _wrappers; // Wrappers gained from turn-in (eaten)
    }
    
    
    return eaten;

}

/*
PROBLEM:

Little Bobby loves chocolate. He frequently goes to his favorite  store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.

EXAMPLE:

He has  to spend, bars cost , and he can turn in  wrappers to receive another bar. Initially, he buys  bars and has  wrappers after eating them. He turns in  of them, leaving him with , for  more bars. After eating those two, he has  wrappers, turns in  leaving him with  wrapper and his new bar. Once he eats that one, he has  wrappers and turns them in for another bar. After eating that one, he only has  wrapper, and his feast ends. Overall, he has eaten  bars.

FUNCTION DESCRIPTION

chocolateFeast has the following parameter(s):

int n: Bobby's initial amount of money
int c: the cost of a chocolate bar
int m: the number of wrappers he can turn in for a free bar

RETURNS

int: the number of chocolates Bobby can eat after taking full advantage of the promotion

NOTE

Little Bobby will always turn in his wrappers if he has enough to get a free chocolate.

*/