<?php

	$variable1 = "This is a variable";
	define('CONSTANT1', "This is a constant");

	echO "Test" , "Two", " ", "Three" ;
	
	ECHO CONSTANT1;
	
	// int, fp, string, boolean (Scalars)
	// arrays and objects (Compound)
	// null and resources discussed in chapter 2
	
	
	if ( is_bool(false) ) {
		echo "Boole"; // Prints Boole 
	}
	if ( is_bool(" ") ) {
		echo "Boole"; // Not a boolean, empty string
	}
	
	
	echo "\n";
	$creator = array( 
		'light bulb' => 'edison',
		'toilet' => 'crapper',
		'rotary engine' => 'wankle'
	);
	
	foreach ($creator as $inventor => $invention) {
		echo "Inventor: $invention\n";
	}
	

	class Person {
		public $name = 'John Doe';
		function name ($newname = NULL) {
			if (! is_null($newname)) {
				$this->name = $newname;
			}
			return $this->name;
		}
	}
	
	
	$P = new Person();
	$P->name("Test Name");
	echo $P->name();
	
	
	
	$foo = "bar";
	$bar = "Referenced Variable";
	echo $$foo;
?>