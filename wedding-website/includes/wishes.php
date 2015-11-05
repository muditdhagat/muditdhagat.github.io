<?php

include 'connection.php';

$name = $email = $relation = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = test_input($_POST["name"]);
	$email = test_input($_POST["email"]);
	$relation = test_input($_POST["relation"]);
	$message = test_input($_POST["message"]);
}

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}


// Prepare and bind
$stmt = $conn->prepare("INSERT INTO wishes(name, relation, message, email) VALUES (?,?,?,?)");
$stmt->bind_param('ssss', $name, $relation, $message, $email);

$stmt->execute();

if($stmt->error) {
	echo 'Failed' . $stmt->error;
}
else {
	echo 'Success';
}

$stmt->close();
$conn->close();
?>
