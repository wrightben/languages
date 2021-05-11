<?php
	
	class MyDB extends SQLite3 {
		function __construct() {
			$this->open('mysqlitedb.db');
		}
	}

	$db = new MyDB();

	$db->exec('CREATE TABLE foo (bar STRING)');
	$db->exec("INSERT INTO foo (bar) VALUES ('This is a test')");

	$result = $db->query('SELECT bar FROM foo');
	var_dump( $result->fetchArray() );
	

//	Documentation:
//	https://www.php.net/manual/en/book.sqlite3.php
//	Class:
//	https://www.php.net/manual/en/class.sqlite3.php
//	Open:
// 	https://www.php.net/manual/en/sqlite3.open.php
	
?>
