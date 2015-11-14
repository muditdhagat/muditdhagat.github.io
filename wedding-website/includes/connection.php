<?php
$servername = "localhost";
$username = "muditrik_root";
$password = "p@ssw0rd";
$dbname = "muditrik_wedding";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

?>