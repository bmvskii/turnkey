<?php
  //Если ошибок нет, отправить email
  if(isset($_POST['submit'])) {
    //Проверка Поля ИМЯ
     if(trim($_POST['name']) == '') {
      $hasError = true;
     } else {
     $name = trim($_POST['name']);
     }
    //Проверка правильности ввода EMAIL
     if(trim($_POST['email']) == '')  {
      $hasError = true;
     } else {
      $email = trim($_POST['email']);
     }
     if(trim($_POST['phone']) == '')  {
      $hasError = true;
     } else {
      $phone = trim($_POST['phone']);
     }
    //Проверка наличия ТЕКСТА сообщения
     if(trim($_POST['message']) == '') {
      $hasError = true;
     } else {
      if(function_exists('stripslashes')) {
        $message = stripslashes(trim($_POST['message']));
      } else {
        $message = trim($_POST['message']);
      }
     } {
      if(!isset($hasError)) {
        $emailTo = 'evg.rogovoy@gmail.com'; //Сюда введите Ваш email
      
        $body = "Name:" . $name . "\n\nEmail: " . $email . "\n\nPhone:" . $phone . "\n\nMessage:\n" . $message;
        $headers = 'From: Blockchain Avezorsoftware <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
        $subject = 'Avezorsoftware Blockchain Contact Us';
      
        mail($emailTo, $subject, $body, $headers);
      }  
     }
?>