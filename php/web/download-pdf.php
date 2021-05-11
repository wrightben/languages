<?php

	header("Content-type:application/pdf");
	header("Content-Disposition:inline;filename=Benjamin_Wright.pdf");
	readfile("Resume_Benjamin_Wright.pdf");
	
?>