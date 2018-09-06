<?php
  //Если ошибок нет, отправить email
    if (isset($_REQUEST['submit'])
     && isset($_REQUEST['name'])
     && isset($_REQUEST['email'])
     && isset($_REQUEST['phone'])
     && isset($_REQUEST['message'])) {
      $emailTo = 'info@avezorsoftware.com'; //Сюда введите Ваш email
      
      $body = "Name:" . $_REQUEST["name"] . "\n\nEmail: " . $_REQUEST["email"] . "\n\nPhone:" . $_REQUEST["phone"] . "\n\nMessage:\n" . $_REQUEST["message"];
      $headers = 'From: Blockchain Avezorsoftware <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $_REQUEST["email"];
      $subject = 'Avezorsoftware Blockchain Contact Us';
      
      mail($emailTo, $subject, $body, $headers);  
     }
?>