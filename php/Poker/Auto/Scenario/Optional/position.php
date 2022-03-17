<?php

$pos = 1;
if (isset($argv[1])) {
	$pos = $argv[1];
}

// 	======================================================
// 	GLOBALS 
// 	======================================================
$rank_distribution = array(0,0,0,0,0,0,0,0,0,0);
	

	
// 	======================================================
// 	PROGRAMMING 
// 	======================================================	
//test();
forEachLine("../hands.txt");
reportDistribution();



// 	======================================================
// 	FUNCTIONS 
// 	======================================================


function reportDistribution() {
	
	global $rank_distribution, $pos;
	
	$report = array();
	
	# REPORTING
	array_push( $report, "Rank Distribution (1-10) for Position ${pos}\n" );
	foreach ($rank_distribution as $item ) {
		array_push( $report, "$item\n" );
	}
	
	file_put_contents("../../distribution_for_position_${pos}.csv", implode( "", $report ) );
	return 0;
}



function processHandStat($line) {try {

	global $pos;

	global $rank_distribution;

	$hand = json_decode($line);
	
	$count = count($hand[0]);
	
	if ($count == 1) { // best hand, else multiple
		
		$best = $hand[1][0]; // best hand, already decoded
		
		$position = $best->position;
		$rank = $best->rank;
		$label = $best->label;
		$hole1 = $best->cards[0];
		$hole2 = $best->cards[1];
		
		// Default is position 1 // 0-based
		if ($position == $pos - 1) {
			$rank_distribution[$rank - 1] += 1;
		}

	} else {
		return 0;
	}

} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}}



function forEachLine($fh) {

	if (! file_exists( $fh ) ) {
		return;
	}

	$fn = fopen( $fh ,"r");

	while(! feof($fn))  {
		$line = fgets($fn);
		if (! trim($line) == '') {
			processHandStat($line);
		}
	}

	fclose($fn);
}



function test() {
	$line = '[[3],[{"rank":5,"label":"Straight","value":[9],"cards":[28,44,32,22,21,29,7],"faceValues":["3s","6c","7s","Td","9d","4s","8h"],"straight":9,"suit":-1,"flush":-1,"groups":{"nominals":[[],[],[28],[29],[],[44],[32],[7],[21],[22],[],[],[]],"suits":[[7],[22,21],[28,32,29],[44]],"collections":[[2,3,5,6,7,8,9],[],[],[]]},"position":3},{"rank":3,"label":"Two Pair","value":[9,3,6],"cards":[6,42,32,22,21,29,7],"faceValues":["7h","4c","7s","Td","9d","4s","8h"],"straight":-1,"suit":-1,"flush":-1,"groups":{"nominals":[[],[],[],[42,29],[],[],[6,32],[7],[21],[22],[],[],[]],"suits":[[6,7],[22,21],[32,29],[42]],"collections":[[7,8,9],[3,6],[],[]]},"position":0},{"rank":2,"label":"One Pair","value":[7,8,13,9],"cards":[0,9,32,22,21,29,7],"faceValues":["Ah","Th","7s","Td","9d","4s","8h"],"straight":-1,"suit":-1,"flush":-1,"groups":{"nominals":[[0],[],[],[29],[],[],[32],[7],[21],[9,22],[],[],[]],"suits":[[0,9,7],[22,21],[32,29],[]],"collections":[[3,6,7,8,13],[9],[],[]]},"position":4},{"rank":2,"label":"One Pair","value":[6,7,9,8],"cards":[41,47,32,22,21,29,7],"faceValues":["3c","9c","7s","Td","9d","4s","8h"],"straight":-1,"suit":-1,"flush":-1,"groups":{"nominals":[[],[],[41],[29],[],[],[32],[7],[47,21],[22],[],[],[]],"suits":[[7],[22,21],[32,29],[41,47]],"collections":[[2,3,6,7,9],[8],[],[]]},"position":2},{"rank":2,"label":"One Pair","value":[6,7,9,8],"cards":[1,8,32,22,21,29,7],"faceValues":["2h","9h","7s","Td","9d","4s","8h"],"straight":-1,"suit":-1,"flush":-1,"groups":{"nominals":[[],[1],[],[29],[],[],[32],[7],[8,21],[22],[],[],[]],"suits":[[1,8,7],[22,21],[32,29],[]],"collections":[[1,3,6,7,9],[8],[],[]]},"position":5},{"rank":2,"label":"One Pair","value":[8,9,12,6],"cards":[19,38,32,22,21,29,7],"faceValues":["7d","Ks","7s","Td","9d","4s","8h"],"straight":-1,"suit":-1,"flush":-1,"groups":{"nominals":[[],[],[],[29],[],[],[19,32],[7],[21],[22],[],[],[38]],"suits":[[7],[19,22,21],[38,32,29],[]],"collections":[[3,7,8,9,12],[6],[],[]]},"position":1}]]';	
	processHandStat( $line );
}

?>