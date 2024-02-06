### Solving
A sudoku solution doesn't excite me, though I enjoyed writing the functions. It might be nice to have a sudoku solver to test generated puzzles. I wonder if there are any valid puzzles that cannot be solved using this algorithm. If sudokus are your work or hobby, send me your thoughts.

#### Files

> [!IMPORTANT]
> ./solver.js: creates the regex list (and may eventually solve a puzzle) <br />
> ./filter/filter.js: greps a list (row, column or box) regexp from the list of 9!

> [!NOTE]
> ./extraneous - puzzle helper/puzzle helper.numbers: Visual aid of the puzzle grid using the puzzle, the regexes and the cell indicies. Use solver.js to create the data.
<br /><br />
> ./extraneous - rows columns boxes/intersections.js: creates the arrays of the rows, boxes and columns used in the other files. It's not needed anymore, but it might be useful for parts in the future.

#### Algorithms

> [!NOTE]
> The 3 lists of permutations will sometimes yield a distinct answer for the cell in question. Other times, the 3 lists can be used to whittle each other until a distinct answer for the cell is revealed. **The box intersects with the row and the column at 3 cells; The row and the column intersect at just 1 cell.**
> <br /><br/>
> If list Row, Column or Box contains just 1 number in the cell, the other two lists must be limited to that number in that cell. The shortening lists further reduce the possible numbers in all the cells those lists are connected to.

> [!NOTE]
> Creating a sudoku might use the opposite approach. Starting with 81 lists of [1..9], randomly select a number and then remove it from all lists in the intersecting row, column and box. Iterate over the shortest lists for each successive choice. Numbers have to be removed to create a puzzle. I'm not sure if the blank numbers can be chosen from the final steps of the generative process.