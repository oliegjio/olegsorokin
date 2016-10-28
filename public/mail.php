<?php

$to = 'oliegjio@gmail.com';
$subject = 'OLEGSOROKIN.COM';
$message = 'Message: ' . $_POST['message'] .
           '\nFrom: ' . $_POST['name'] .
           '\nWith E-Mail: ' . $_POST['email'];
$headers = 'From: olegsorokin.com' . '\r\n' .
           'Reply-To: NOREPLY' . '\r\n' .
           'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
