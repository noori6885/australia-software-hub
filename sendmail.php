
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "noureen.webdev@gmail.com";
    $subject = "New Contact Form Message";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo "Message sent successfully!";
}
?>
