### Tic-Tac-Toe


> [!NOTE]
> filter.js contains the 9! list of 1-9 permutations. It can be used to filter that list based on a game state. And it can be used to generate database.js, which is a list of the game results for each permutation.

```
for (var i = 1; i <= 9; i ++) {
	console.log( i % 2 );
}
/*
	1
	0
	1
	0
	1
	0
	1
	0
	1
*/
```

```
	362880
9	40320
8	5040
7	720
6	120
5	24
4	6
3	2
2	1
1	
```