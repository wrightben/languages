#!/bin/sh

# Cell I3 = #27 = [2,9]

echo "Row"
cat List.txt | grep -e "[4][5][29][6][8][3][279][1][29]"

echo "Column"
cat List.txt | grep -e "[6][4][29][3589][135][1389][2][5][7]"

echo "Box"
cat List.txt | grep -e "[8][5][6][23][3][4][279][1][29]"

# Replace space and commas
# ((\s|\n)+|,)

# The 3 lists of permutations will sometimes yield a distinct answer for the cell in question. Other times, the 3 lists can be used to whittle each other until a distinct answer for the cell is revealed.

# If list Row, Column or Box contains just 1 number in the cell, the other two lists must be limited to that number in that cell. The shortening lists further reduce the possible numbers in all the cells those lists are connected to.
