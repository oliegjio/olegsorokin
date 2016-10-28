<?php

$to = 'oliegjio@gmail.com';
$subject = 'OLEGSOROKIN.COM';
$message = 'Message: ' . $_POST['message'] .
           '<br>From: ' . $_POST['name'] .
           '<br>With E-Mail: ' . $_POST['email'];
// $headers = 'From: oliegjio@gmail.com' . '\r\n' .
           // 'Reply-To: NOREPLY' . '\r\n' .
           // 'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message);
