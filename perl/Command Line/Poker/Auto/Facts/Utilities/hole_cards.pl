#!/usr/bin/perl

use POSIX;

# ----------------------------
# Conversion Vars
# ----------------------------
@faceValues = (
	"Ah",	"2h",	"3h",	"4h",	"5h",	"6h",	"7h",	"8h",	"9h",	"Th",	"Jh",	"Qh",	"Kh",	
	"Ad",	"2d",	"3d",	"4d",	"5d",	"6d",	"7d",	"8d",	"9d",	"Td",	"Jd",	"Qd",	"Kd",	
	"As",	"2s",	"3s",	"4s",	"5s",	"6s",	"7s",	"8s",	"9s",	"Ts",	"Js",	"Qs",	"Ks",	
	"Ac",	"2c",	"3c",	"4c",	"5c",	"6c",	"7c",	"8c",	"9c",	"Tc",	"Jc",	"Qc",	"Kc"
);

@ordinals = (
	0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12, 	# ] nominals
	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,		
	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,		
	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51	
); #	A	2	3	4	5	6	7	8	9	10	J	Q	K	A

@nominals = (
	0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12, 
	0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,
	0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,
	0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12
);#	A	2	3	4	5	6	7	8	9	10	J	Q	K	A


# ----------------------------
# Programming
# ----------------------------

# &test();


@hole_cards = ();
foreach $1 (0 .. 51) {
	foreach $2 (0 .. 51) {
		if ($2 ne $1) {
			@c = ();		
			push @c, $1, $2;
			@c = sort { $a <=> $b  } @c;
			push @hole_cards, "".( join ",", &getStatus(@c) );
		}
	}
}

# Summary
print "hole1,hole2,nominal1,nominal2,facevalue1,facevalue2,high,face,straight,suited,pair\n";
print join "\n", sort { 

	@a = split ",", $a;
	@b = split ",", $b;
	
	&pad($a[0]).&pad($a[1]) <=> &pad($b[0]).&pad($b[1]);
	
} @hole_cards;



# ----------------------------
# FUNCTIONS
# ----------------------------


sub test() {
	@status = &getStatus(28,44);
	print join "\t", @status;
	exit;
}

sub pad() {
	my $p = shift @_;
	if ($p < 10) {
		return "0".$p;
	}
	return $p;
}

sub getStatus() {

	# HOLE CARD TESTS
	# ✓ Is there a high card? (Arbitrarily, 9 or higher)
	# ✓ Is there a Q,K,A?
	# ✓ Are they suited?
	# ✓ Are they threatening a straight?
	# ✓ Are they a pair?
	# ? Are there unknown attributes defining "good" hole cards?

	($c1, $c2) = @_;
	
	$n1 = $nominals[$c1];
	$n2 = $nominals[$c2];
	
	$f1 = $faceValues[$c1];
	$f2 = $faceValues[$c2];
	

	
	$high = 0;
	if ( ($n1 > 7) || ($n1 % 13 == 0) ) {
		$high = 1;
	}
	if ( ($n2 > 7) || ($n2 % 13 == 0) ) {
		$high += 1;
	}	
	
	$face = 0;
	if ( ($n1 > 10) || ($n2 > 10) || ($n1 % 13 == 0) || ($n2 % 13 == 0)  ) {
		$face = 1;
	}
	
	$straight = 0;
	if ( abs($n1 - $n2) <= 4 ) {
		$straight = 1;
	}
	if ( $n1 % 13 == 0  ) { # Card 1 is an Ace, King-high straight?
		if ( abs(13 - $n2) <= 4 ) {
			$straight = 1;
		}
	}
	if ( $n2 % 13 == 0 ) { # Card 2 is an Ace, King-high straight?
		if ( abs($n1 - 13) <= 4 ) {
			$straight = 1;
		}
	}
	
	$suited = 0;
	if ( floor($c1 / 13) == floor($c2 / 13) ) {
		$suited = 1;
	}
	
	$pair = 0;
	if ($n1 eq $n2) {
		$pair = 1;
	}
	
	return ($c1, $c2, $n1, $n2, "'$f1'", "'$f2'", $high, $face, $straight, $suited, $pair);

}