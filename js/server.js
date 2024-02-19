const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware do parsowania danych z formularza
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint do obsługi formularza
app.post('/send-email', (req, res) => {
    const { email, message } = req.body;

    // Konfiguracja transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'twoj.email@gmail.com',
            pass: 'twoje_haslo'
        }
    });

    // Utwórz opcje wiadomości e-mail
    const mailOptions = {
        from: 'twoj.email@gmail.com',
        to: 'aga.choma02@gmail.com',
        subject: 'Nowa wiadomość z formularza',
        text: `E-mail: ${email}\nWiadomość: ${message}`
    };

    // Wyślij e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Błąd podczas wysyłania e-maila:', error);
            res.status(500).send('Wystąpił błąd podczas wysyłania e-maila.');
        } else {
            console.log('E-mail został wysłany:', info.response);
            res.status(200).send('Wiadomość została wysłana.');
        }
    });
});

// Uruchom serwer
app.listen(PORT, () => {
    console.log(`Serwer uruchomiony na porcie ${PORT}`);
});