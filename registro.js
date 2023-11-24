$(document).ready(function() {
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();

        let username = $('#username').val().trim();
        let email = $('#email').val().trim();
        let password = $('#password').val().trim();
        const confirmPassword = $('#confirmPassword').val().trim();

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        let user = {
            username: username,
            email: email,
            password: password
        };

        console.log(user);
        // Aquí se podria agregar la lógica para enviar el usuario al servidor y almacenarlo en una base de datos.
    });
});