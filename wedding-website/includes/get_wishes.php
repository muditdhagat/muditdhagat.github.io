<?php

include 'connection.php';

$sql = "SELECT id, name, relation, message, email FROM wishes";
$result = $conn->query($sql);
$rows = array();

if ($result->num_rows > 0) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
		$rows[] = $row;
	}
	
	print json_encode($rows);
	
} else {
	echo "[]";
}

?>