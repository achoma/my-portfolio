<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comment = $_POST["comment"];
    
    // Adres e-mail, na który ma być wysłana wiadomość
    $to = "aga.choma02@gmail.com";
    $subject = "Wiadomość ze strony internetowej";
    $body = "Imię: $name\nE-mail: $email\nWiadomość:\n$message";
    
    // Wysłanie e-maila
    if (mail($to, $subject, $body)) {
        echo "Wiadomość została wysłana.";
    } else {
        echo "Wystąpił błąd podczas wysyłania wiadomości.";
    }
}
?>
