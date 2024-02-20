function sendEmail() {
    var formData = new FormData(document.getElementById("contactForm"));

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./server.php", true); // Tutaj podaj adres URL Twojego skryptu obsługującego wysyłkę e-maila
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Wiadomość została wysłana.");
            document.getElementById("contactForm").reset();
        } else {
            alert("Wystąpił błąd podczas wysyłania wiadomości.");
        }
    };
    xhr.onerror = function() {
        alert("Wystąpił błąd podczas wysyłania wiadomości.");
    };
    xhr.send(formData);
}