### Tic-Tac-Toe

>[!NOTE]
> **filter.js**: Creates a list of the permutations for [1-9]. It can be used to filter that list using regex. And it can be used to generate a list of the game results for each permutation.





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

```
28.8%	104544	(First Player Loses)
58.5%	212256	(First Player Wins)
12.7%	46080	(Players Draw)
100.0%	362880

71.2%	258336	(First Player Wins or Draws)
```