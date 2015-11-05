<?php

include 'connection.php';

$name = $email = $phone = $eventAttending = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = test_input($_POST["name"]);
	$email = test_input($_POST["email"]);
	$phone = test_input($_POST["phone"]);
	$eventAttending = test_input($_POST["eventAttending"]);
	$message = test_input($_POST["message"]);
}

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

// Prepare and Bind
$stmt = $conn->prepare("INSERT INTO contact(name, email, phone, message, attending) VALUES (?,?,?,?,?)");
$stmt->bind_param('sssss', $name, $email, $phone, $message, $eventAttending);

$stmt->execute();

if($stmt->error) {
	echo $name . $email . $phone . $eventAttending . $message;
	echo 'Failed' . $stmt->error;
}
else {
	echo $name . $email . $phone . $eventAttending . $message;
	echo 'Success';
}

$stmt->close();
$conn->close();

?>