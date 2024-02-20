document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zatrzymaj domyślne zachowanie formularza
  
    let formData = new FormData(this);
  
    fetch('mailto:aga.choma02@gmail.com', {
      method: 'POST',
      body: formData
    }).then(function(response) {
      if (response.ok) {
        alert('Dane zostały wysłane pomyślnie!');
        this.reset();
      } else {
        alert('Wystąpił problem podczas wysyłania danych.');
      }
    }).catch(function(error) {
      alert('Wystąpił problem podczas wysyłania danych: ' + error.message);
    });
  });