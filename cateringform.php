<?php 
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$company = $_POST['company'];
$date = $_POST['date'];
$time = $_POST['time'];
$guestcount = $_POST['guestcount'];
$message = $_POST['message'];

$formcontent="From: $firstname $lastname \nE-Mail: $email \nCompany: $company \nDate: $date \nTime: $time \nGuest Count: $guestcount \nMessage: $message";
$recipient = "davealyinovich@gmail.com";
$subject = "Tacotlan Catering Inquiry";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<h1 color='red' font-size='52px'>Thank You!</h1>";
?>