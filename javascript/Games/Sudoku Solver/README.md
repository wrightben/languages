## SUDOKU

If sudokus are your work or hobby, send me your thoughts.

### Use

```
node solver.js
```

### Files
- **solver.js**
	- solves a sudoku puzzle
- **filter/filter.js**
	- greps a list (row, column or box) regexp from the list of 9!
- **extraneous - puzzle helper/puzzle helper.numbers**
	- Visual aid of the puzzle grid (clues, regexes, cell indicies). Use solver.js to create the data.
- **extraneous - rows columns boxes/intersections.js**
	- creates the arrays of the rows, boxes and columns used in the other files. It's not needed anymore, but it might be useful for parts in the future.

----
#### GENERATING A TEMPLATE
```
-	45	45	45		45	45	45		45	45	45
45	9	8	7		6	5	4		3	2	1
45	6	5	4		3	2	1		9	8	7
45	3	2	1		9	8	7		6	5	4
											
45	5	9	8		4	7	6		1	3	2
45	1	3	2		5	9	8		4	7	6
45	4	7	6		1	3	2		5	9	8
											
45	2	4	9		7	1	3		8	6	5
45	8	6	5		2	4	9		7	1	3
45	7	1	3		8	6	5		2	4	9
```

The manual technique is to use the given first row: 9...1. And then place triplets in each box. The sequence 598 in the first row of the 4th box is arbitrary&mdash;It just doesn't conflict with the sequences in box 1. Then apply transformations until the pattern appears random.

A programmatic technique might start with 81 lists of [1-9] and use the constraints to place numbers until all the lists were reduced to 1 number. I'm not sure why it would ever be necessary to do this. A known base pattern can be transformed.

MASKING

Numbers have to be removed to make a valid Sudoku. What guarantees the puzzle is human solvable? How many mask templates (patterns of empty cells) are there?

#### SUBSTITUTING

The numbers can just be substituted for others. How many of these "templates" exist?

S-R METHOD

Select a number at random [1-9] and replace all occurrences of a random number in the puzzle [1-9]. I could create a **lot** of puzzles by using this template and the S-R method. But can I generate all puzzles with this method? No.

#### TRANSFORMATIONS: Reflections, Rotations, Triads and more
Reflections, rotations and triads can change the template. 

Triads: Imagine moving 1 row up or down. It's not possible because it's constrained by a box. But the 3 rows that make up a box (a macro row) can be moved up or down. This works for columns, too.

The 3 individual rows or columns of a triad can also be reordered.

Any 2 numbers in a box can be swapped&mdash;But they have to be swapped in all boxes. Swapping can be done successively.


#### CRACKING

A strategy for using my existing code is to create the puzzle regex, do the intersections once, get the lists for all rows, columns, and boxes, and then iterate over one of the lists. Iterate: Commit to one of the items from the shortest list (> 1) of a grep and solve the rest of the puzzle. The list must be longer than 1 because that's a solved list.

Does this technique ever produce more than one solution in a valid puzzle? (How could it?)

A long-term strategy for solving is to use a database of known puzzles.

##### COLLECTIONS FOR MATRIX-LIKE OPERATIONS

```
[	// Indicies for ... 
	[], //1s
	[], //2s
	[], //3s ...
	[],
	[],
	[],
	[],
	[],
	[]								
] 
// Reordering the 9 rows of indicies gives you 9! puzzles for this template.
// AND ... a string holding 81 characters corresponding to the values.
```


#### TODO LIST
- [x] Can I make a template? Yes. Easily enough to show a kid how to do it.
- [x] Can I generate more templates using only the S-R method? No. Need transformations.
- [ ] How is it guaranteed that a sudoku is human solvable?
