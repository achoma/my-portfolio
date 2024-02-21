// ----------------- Sending messages from a form------------------------------------------
const form = document.getElementById('contactForm');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Your message has been sent successfully!');
                form.reset();
            } else {
                alert('Oops! There was a problem sending your message. Please try again later.');
            }
        });




        