<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

if (!empty($_POST['botcheck'])) {
    echo json_encode(['success' => true, 'message' => 'Request accepted']);
    exit;
}

function form_value(string $key): string
{
    return trim((string) ($_POST[$key] ?? ''));
}

function single_line(string $value): string
{
    return preg_replace('/[\r\n]+/', ' ', trim(strip_tags($value))) ?? '';
}

function message_text(string $value): string
{
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    return trim(strip_tags($value));
}

$firstName = single_line(form_value('first_name'));
$lastName = single_line(form_value('last_name'));
$email = filter_var(form_value('email'), FILTER_SANITIZE_EMAIL);
$phone = single_line(form_value('phone'));
$occasion = single_line(form_value('occasion'));
$eventDate = single_line(form_value('event_date'));
$message = message_text(form_value('message'));
$sourceUrl = single_line(form_value('source_url'));

if ($firstName === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid name and email address']);
    exit;
}

$to = 'cakes@kinglakecakes.com';
$from = 'cakes@kinglakecakes.com';
$fullName = trim($firstName . ' ' . $lastName);
$replyName = $fullName !== '' ? $fullName : 'Website Enquiry';
$safeReplyName = addcslashes($replyName, "\\\"");
$replyTo = '"' . $safeReplyName . '" <' . $email . '>';
$subject = 'New Kinglake Cakes Enquiry';

$body = implode("\n", [
    'New enquiry from kinglakecakes.com',
    '',
    'Name: ' . $fullName,
    'Email: ' . $email,
    'Phone / WhatsApp: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Occasion: ' . ($occasion !== '' ? $occasion : 'Not selected'),
    'Event Date: ' . ($eventDate !== '' ? $eventDate : 'Not provided'),
    '',
    'Your Vision:',
    $message !== '' ? $message : 'Not provided',
    '',
    'Source: ' . ($sourceUrl !== '' ? $sourceUrl : 'https://kinglakecakes.com/'),
    'IP Address: ' . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown'),
]);

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Kinglake Cakes Website <' . $from . '>',
    'Reply-To: ' . $replyTo,
    'X-Mailer: PHP/' . phpversion(),
]);

$sent = @mail($to, $subject, $body, $headers, '-f ' . $from);

if (!$sent) {
    $sent = @mail($to, $subject, $body, $headers);
}

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail server could not send the enquiry']);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Enquiry sent']);
