## SUDOKU

A sudoku solution doesn't excite me, though I enjoyed writing the functions. It might be nice to have a sudoku solver to test generated puzzles. I wonder if there are any valid puzzles that cannot be solved using this algorithm. If sudokus are your work or hobby, send me your thoughts.

### Use

```
node solver.js
```

### Files


- ./solver.js
	- solves a sudoku puzzle
- ./filter/filter.js
	- greps a list (row, column or box) regexp from the list of 9!

- ./extraneous - puzzle helper/puzzle helper.numbers
	- Visual aid of the puzzle grid (clues, regexes, cell indicies). Use solver.js to create the data.

- ./extraneous - rows columns boxes/intersections.js
	- creates the arrays of the rows, boxes and columns used in the other files. It's not needed anymore, but it might be useful for parts in the future.

----
```
6	9	2	1	5	4	3	7	8
8	1	5	6	3	7	4	2	9
7	3	4	2	8	9	5	6	1
3	5	1	7	2	6	9	8	4
4	6	9	3	1	8	2	5	7
2	8	7	4	9	5	6	1	3
9	4	6	5	7	1	8	3	2
1	2	8	9	6	3	7	4	5
5	7	3	8	4	2	1	9	6
```

#### SUBSTITUTING:

The numbers can just be substituted for others. How many of these "templates" exist?

S-R METHOD:

Select a number at random [1-9] and replace all occurrences of a random number in the puzzle [1-9]. I could create a **lot** of puzzles by using this template and the S-R method. But can I generate all puzzles with this method?


#### GENERATING A TEMPLATE:

Start with 81 lists of [1-9] and use the constraints to place numbers until all the lists were reduced to 1 number. Does this technique ever create a pattern that isn't reproducible by applying the S-R method to the pattern above?


#### SOLVING:

A strategy for using my existing code is to create the puzzle regex, do the intersections once, get the lists for all rows, columns, and boxes, and then iterate over one of the lists. Iterate: Commit to one of the items from the shortest list (> 1) of a grep and solve the rest of the puzzle. The list must be longer than 1 because that's a solved list.


#### TODO LIST
- [ ] Can I make a template? (A puzzle)
- [x] Can I generate more templates using the S-R method? (No. Answer 1.)


1. When a 6 replaces the 1 in the top row of the "template" is every other 6 always positioned in the same relationship? (Reflections and rotations are not meaningful.)