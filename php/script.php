<?php 
$name = $_POST['nome'];
$email = $_POST['email'];
$phone = $_POST['tel'];
$message = $_POST['mensagem'];

$formcontent="De: $name \n Telefone: $phone \n Mensagem: $message";
$recipient = "daniellexsousa@gmail.com";
$subject = $_POST['assunto'];
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Erro! Tente novamente.");
echo "Obrigada! Sua mensagem foi enviada";
?>