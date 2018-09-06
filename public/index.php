<?php
  //Если ошибок нет, отправить email
    $emailTo = 'info@avezorsoftware.com'; //Сюда введите Ваш email
    $body = "Name:" . $_POST["name"] . "\n\nEmail: " . $_POST["email"] . "\n\nPhone:" . $_POST["phone"] . "\n\nMessage:\n" . $_POST["message"];
    $headers = 'From: Blockchain Avezorsoftware <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $_POST["email"];
    mail($emailTo, $subject, $body, $headers);
    $emailSent = true;
?>