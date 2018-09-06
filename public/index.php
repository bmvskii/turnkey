<?php
  //Если ошибок нет, отправить email
    $emailTo = 'info@avezorsoftware.com'; //Сюда введите Ваш email
    $body = "Name: $name \n\nEmail: $email \n\nPhone: $phone \n\nMessage:\n $message";
    $headers = 'From: Blockchain Avezorsoftware <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
    mail($emailTo, $subject, $body, $headers);
    $emailSent = true;
?>