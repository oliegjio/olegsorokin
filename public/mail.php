<?php

$to = 'oliegjio@gmail.com';
$subject = 'OLEGSOROKIN.COM';
$message = 
    '(From: ' . $_POST['name'] . ')   ' .
    '(With E-Mail: ' . $_POST['email'] . ')   ' .
    'Message: ' . $_POST['message'];

mail($to, $subject, $message);
