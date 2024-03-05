### Tic-Tac-Toe

Playing with this implementation made me realize my computer doesn't work the way I thought. A 20% chance happens more than 20% of the time. The lopsidedness of tic-tac-toe is boring, but this implementation gives "o" winning potential without merely coding a "way to foil x". It's still interesting in that it pretty succinctly packs the best ideas in programming (and related topics) into a little cube. I think this would make a very difficult many-week challenge as a guided class project for non-programmers.

I wanted better instruction than what I got in many subjects, but this one would've probably ruined programming for me. I struggle to understand how MicroProse did World Circuit in 1994 while Deep Blue couldn't beat Kasparov until 1997. What was Microsoft Flight Simulator 3.0 computing?




#### Possible Improvements

1. Sometimes "o" has a winning plan for a row, col, or dia that offers more than one square choice. Example: set[0] = [1,2,3]. Its board values might look like [1,-1,-1]. Either of the -1 squares are open, but one might be more strategic than the other, perhaps claiming a row, col, or dia from "x".