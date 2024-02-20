document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Zatrzymaj domyślne zachowanie formularza
      let formData = new FormData(this);
  
      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert('Dane zostały wysłane pomyślnie!');
          this.reset();
        } else {
          alert('Wystąpił problem podczas wysyłania danych.');
        }
      }).catch(error => {
        alert('Wystąpił problem podczas wysyłania danych: ' + error.message);
      });
    });
  });