### Tic-Tac-Toe

#### Possible Improvements

1. Sometimes "o" has a winning plan for a row, col, or dia that offers more than one square choice. Example: set[0] = [1,2,3]. Its board values might look like [1,-1,-1]. Either of the -1 squares are open, but one might be more strategic than the other, perhaps claiming a row, col, or dia from "x". See screenshot.

2. Interesting case: (Screenshot 2024-02-24 at 7.32.02 PM) - "x" has played a non-center opening and "o" has used its 20% chance to attempt a non-center opening. In this specific game, the next best play (Move 7) is square 9, which guarantees the win when "o" blocks. Move 6 was a blunder by "o"; "o" should've used move 6 to play square 3. This offers the only chance "x" has to win against this computer player. Is this a bug or a feature?

3. Dominant Player 1: "o" could play for a draw but attempts to win.