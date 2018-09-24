<?php

if (trim($_POST['name']) != '') {
    $name = trim($_POST['name']);
}

if (trim($_POST['email']) == '') {
    $hasError = true;
} else {
    $email = trim($_POST['email']);
}

if (trim($_POST['phone']) != '') {
    $phone = trim($_POST['phone']);
}

if (trim($_POST['message']) != '') {
    if (function_exists('stripslashes')) {
        $message = stripslashes(trim($_POST['message']));
    } else {
        $message = trim($_POST['message']);
    }
}
if (!isset($hasError)) {
    $emailTo = 'info@avezorsoftware.com';

    $body = "Name:" . $name . "\n\nEmail: " . $email . "\n\nPhone:" . $phone . "\n\nMessage:\n" . $message;
    $headers = 'From: Blockchain Avezorsoftware <' . $emailTo . '>' . "\r\n" . 'Reply-To: ' . $email;
    $subject = 'Avezorsoftware Blockchain Contact Us';

    mail($emailTo, $subject, $body, $headers);
}
?>