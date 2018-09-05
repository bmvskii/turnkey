<?php
/**
 * This example shows making an SMTP connection with authentication.
 */



//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');

require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
$mail->CharSet = "UTF-8";
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 587;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = 'alexavezorsoft@gmail.com';
//Password to use for SMTP authentication
$mail->Password = 'AlexAvezorsoft4096%';
//Set who the message is to be sent from
$mail->setFrom('alexavezorsoft@gmail.com', 'avezorsoftware.com');
//Set an alternative reply-to address
//$mail->addReplyTo('lavorchukvadim@gmail.com', 'First Last');
//Set who the message is to be sent to
$mail->addAddress('info@avezorsoftware.com');
//Set the subject line
$mail->Subject = 'Portfolio request';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
if ($_REQUEST["name"]) {
  $mail->msgHTML('
<h1>Client from Crypto avezorsoftware.com</h1>
<p>Email: ' . $_REQUEST["email"] . '</p>
<p>Name: ' . $_REQUEST["name"] . '</p>
<p>Phone: ' . $_REQUEST["phone"] . '</p>
<p>Message: ' . $_REQUEST["message"] . '</p>
');
  //Replace the plain text body with one created manually
  $mail->AltBody = 'Client from Crypto avezorsoftware.com. Email: ' . $_REQUEST["email"] . ' Name: ' . $_REQUEST["name"] . ' Phone: ' . $_REQUEST["phone"] . ' Message: ' . $_REQUEST["message"];
} else {
  $mail->msgHTML('
<h1>Client from Crypto avezorsoftware.com</h1>
<p>Email: ' . $_REQUEST["email"] . '</p>
');
  //Replace the plain text body with one created manually

  $mail->AltBody = 'Client from Crypto avezorsoftware.com. Email: ' . $_REQUEST["email"];

}

//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');
//send the message, check for errors
if (!$mail->send()) {
  $data['message'] = $mail->ErrorInfo;
  $data['status'] = false;
  echo json_encode($data);
} else {
  $data['message'] = 'Success';
  $data['status'] = true;
  echo json_encode($data);
}