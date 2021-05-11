<?php
	
 	function getDB() {
		$dbConnection = new PDO("sqlite:../media/media.sqlite3");
	        $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	        return $dbConnection;
	}
	
	try {
        
		// DB Open: select * from view  
		$DB = getDB();
		$query = "select * from 'view - books - extended'";      
		$stmt = $DB->prepare( $query );
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

		// DB Close
		$db = NULL;
		
		$output = array('data'=>$result);

		header('Content-Type: application/json');
		echo json_encode($output);

	} catch(PDOException $e){
	    	echo 'Exception : '.$e->getMessage();
	}
	
?>