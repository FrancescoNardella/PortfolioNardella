
<?php
if(!empty($_POST["invia"])) {
	$name = $_POST["Name"];
	$email = $_POST["Email"];
	$subject = $_POST["Subject"];
	$content = $_POST["Message"];

	$toEmail = "suprerfrancy@gmail.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	if(mail($toEmail, $subject, $content, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}

header("Location: HOME.html");

?>
