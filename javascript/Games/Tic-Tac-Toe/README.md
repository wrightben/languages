> [!NOTE]
> Read the Meta.ai analysis of this game and see its bell curve rating at:<br/>
> https://www.meta.ai/share/c/jU4x74txwT

### Tic-Tac-Toe

Download source; Open in desktop browser to play. Or download the repo zip and upload it to Meta.ai to play this game.

### Files
- **database.js**
	- Creates a list of the permutations for 123456789. These permutations represent every game that can be played.
- **computer_player.js**
	- Plays as "o". Requires database.js


### Notes

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
÷	362880
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