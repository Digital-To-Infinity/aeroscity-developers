<?php
// Prevent any extraneous output
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Headers for CORS and JSON
header("Access-Control-Allow-Origin: *"); // For development; restrict in production
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Read JSON input
$input = file_get_contents("php://input");
$data = json_decode($input, true);

// Validate JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON provided"]);
    exit;
}

// Extract and sanitize fields
$name = isset($data['name']) ? trim($data['name']) : '';
$company = isset($data['company']) ? trim($data['company']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// Validate required fields
if (empty($name) || empty($company) || empty($phone)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing required fields (Name, Company, or Phone)"]);
    exit;
}

// Email Configuration
$to = "xyz@gmail.com"; // Admin email
$subject = "New Contact Form Submission - Aerocity Developers";

$email_content = "<h2>New Contact Request</h2>";
$email_content .= "<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>";
$email_content .= "<p><strong>Company:</strong> " . htmlspecialchars($company) . "</p>";
$email_content .= "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
$email_content .= "<p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>";
$email_content .= "<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";

// Email Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// Important: Set From header to something valid on your server, or use the user's email if allowed by your mail server policy.
// Ideally, use a fixed sender like no-reply@yourdomain.com and set Reply-To to the user's email.
$headers .= "From: no-reply@aerocitydevelopers.com" . "\r\n";
if (!empty($email)) {
    $headers .= "Reply-To: " . $email . "\r\n";
}

// Send Email
if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Message sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send email"]);
}
?>
