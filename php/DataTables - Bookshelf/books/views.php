<?php
	

	

 	function getDB() {
        $dbConnection = new PDO("sqlite:../media/media.sqlite3");
        $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $dbConnection;
	}
	
	try {
        
        $DB = getDB();
        
        // prepare SQL command and execute
		$query = "SELECT name FROM sqlite_master WHERE type = 'view' ";      
        $stmt = $DB->prepare( $query );
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $output = array('data'=>$result);
        
        echo json_encode($output);
	    
	    // close the database connection
    	$db = NULL;
    	
	} catch(PDOException $e){
    	echo 'Exception : '.$e->getMessage();
	}


?>