### Solving
A sudoku solution doesn't excite me, though I enjoyed writing the functions. It might be nice to have a sudoku solver to test generated puzzles. I wonder if there are any valid puzzles that cannot be solved using this algorithm. If sudokus are your work or hobby, send me your thoughts.

#### Files

> [!IMPORTANT]
> ./solver.js: creates the regex list (and may eventually solve a puzzle) <br />
> ./filter/filter.sh: greps a cell's row, column and box

> [!NOTE]
> ./extraneous - puzzle helper/puzzle helper.numbers: Visual aid of the puzzle grid using the puzzle, the regexes and the cell indicies. Use solver.js to create the data.
<br /><br />
> ./extraneous - rows columns boxes/intersections.js: creates the arrays of the rows, boxes and columns used in the other files. It's not needed anymore, but it might be useful for parts in the future.

> [!NOTE]
> Creating a sudoku might use the opposite approach. Starting with 81 lists of [1..9], randomly select a number and then remove it from all lists in the intersecting row, column and box. Iterate over the shortest lists for each successive choice. Numbers have to be removed to create a puzzle. I'm not sure if the blank numbers can be chosen from the final steps of the generative process.