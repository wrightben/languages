### SUDOKU

A sudoku solution doesn't excite me, though I enjoyed writing the functions. It might be nice to have a sudoku solver to test generated puzzles. I wonder if there are any valid puzzles that cannot be solved using this algorithm. If sudokus are your work or hobby, send me your thoughts.

#### Use and Files

```
node solver.js
```

./solver.js: solves a sudoku puzzle<br />
./filter/filter.js: greps a list (row, column or box) regexp from the list of 9!


#### Extraneous

1. ./extraneous - puzzle helper/puzzle helper.numbers
	- Visual aid of the puzzle grid (clues, regexes, cell indicies). Use solver.js to create the data.

2. ./extraneous - rows columns boxes/intersections.js
	- creates the arrays of the rows, boxes and columns used in the other files. It's not needed anymore, but it might be useful for parts in the future.


#### Algorithms - Solving

1. The intersection of a row, col, box will sometimes yield a distinct value for a cell.
2. The 3 lists can sometimes be used to reduce each other until a distinct answer for the cell is revealed.
	- If a Row, Column or Box contains just 1 number in a cell, the other two lists must be limited to that number in that cell. 
	- The shortening lists further reduce the possible numbers in all the cells those lists are connected to.
3. A *box* intersects with rows and columns at 3 cells; A row and a column intersect at just 1 cell.
4. A solution does not come from a set of 9^81. It's **much** smaller.
5. A list of solved puzzles can be filtered through the regex for an unsolved puzzle.
	- Puzzle sites already have the solutions to their puzzles

#### Algorithms - Generating

Creating a sudoku might use the opposite approach. Starting with 81 lists of [1..9], randomly select a number and then remove it from all lists in the intersecting row, column and box. Iterate over the shortest lists for each successive choice. Numbers have to be removed to create a puzzle. I'm not sure if the blank cells can be ascertained from the final steps of the generative process.