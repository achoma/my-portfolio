// $(document).ready(function(){
//     $('#submitForm').click(function(e){
//         e.preventDefault();
        
//         // Pobierz dane z formularza
//         var name = $('#name').val();
//         var email = $('#email').val();
//         var subject = $('#subject').val();

//         var message = $('#message').val();
        
//         // Wyślij dane na serwer
//         $.ajax({
//             url: 'send_email.php', // Ścieżka do pliku obsługującego wysyłkę e-maila
//             method: 'POST',
//             data: {
//                 name: name,
//                 email: email,
//                 subject: subject,

//                 message: message
//             },
//             success: function(response){
//                 // Obsłuż odpowiedź po wysłaniu
//                 alert('E-mail został wysłany!');
//                 // Wyczyść formularz po udanej wysyłce
//                 $('#name').val('');
//                 $('#email').val('');
//                 $('#subject').val('');
//                 $('#message').val('');
//             },
//             error: function(xhr, status, error){
//                 // Obsłuż błąd
//                 alert('Wystąpił błąd podczas wysyłania e-maila.');
//                 console.error(error);
//             }
//         });
//     });
// });