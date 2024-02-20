document.getElementById('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var comment = document.getElementById('comment').value;


    var mailto_link = 'mailto:aga.choma02@gmail.com?message=Wiadomość ze strony&body=Imię: ' + name + '%0D%0AE-mail: ' + email + '%0D%0AWiadomość: ' + message;

    window.open(mailto_link);
});