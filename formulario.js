function validarFormulario() {
    var nombre = document.forms["miFormulario"]["nombre"].value;
    var correo = document.forms["miFormulario"]["correo"].value;
    var telefono = document.forms["miFormulario"]["telefono"].value;

    if (nombre === "" || correo === "" || telefono === "") {
        alert("Debe completar todos los campos");
        return false;
    }

    if (isNaN(telefono)) {
        alert("El campo Teléfono debe ser numérico");
        return false;
    }

    if (correo.indexOf("@") === -1 || correo.indexOf(".") === -1) {
        alert("Debe ingresar un correo válido");
        return false;
    }

    alert("Formulario enviado con éxito");
    return true;
}