<?php

// show errors during debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// allow only POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status"=>"error","message"=>"Invalid request"]);
    exit;
}

// read JSON body from React
$data = json_decode(file_get_contents("php://input"), true);

// sanitize inputs
$name = htmlspecialchars(trim($data['name'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(trim($data['subject'] ?? ''));
$message = htmlspecialchars(trim($data['message'] ?? ''));

// validate
if (!$name || !$email || !$subject || !$message) {
    echo json_encode([
        "status"=>"error",
        "message"=>"All fields are required"
    ]);
    exit;
}

try {

    $mail = new PHPMailer(true);

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = "smtp.hostinger.com";
    $mail->SMTPAuth = true;

    $mail->Username = "support@lgindustry.in";
    $mail->Password = "Lgindustry@123";

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // sender
    $mail->setFrom("support@lgindustry.in","LG Industry Website");

    // admin receiver
    $mail->addAddress("support@lgindustry.in");

    // reply to customer
    $mail->addReplyTo($email,$name);

    // email content
    $mail->isHTML(false);

    $mail->Subject = $subject;

    $mail->Body =
"You have received a new enquiry from the website.

Name: $name
Email: $email
Subject: $subject

Message:
$message
";

    $mail->send();

    echo json_encode([
        "status"=>"success",
        "message"=>"Email sent successfully"
    ]);

} catch (Exception $e) {

    echo json_encode([
        "status"=>"error",
        "message"=>$mail->ErrorInfo
    ]);

}