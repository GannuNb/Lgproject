<?php
// Enable error display for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Get data from React frontend
$data = json_decode(file_get_contents("php://input"), true);

// Extract and sanitize input
$name = trim($data['name']);
$email = trim($data['email']);
$subject = trim($data['subject']);
$message = trim($data['message']);

if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit;
}

// Set email parameters
$to = "support@lgindustry.in"; // Admin's email
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

$body = "You have received a new enquiry from the website:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Subject: $subject\n";
$body .= "Message:\n$message\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Email sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to send email.']);
}
?>
