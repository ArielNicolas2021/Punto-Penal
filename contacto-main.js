function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var tipoConsulta = document.getElementById("tipoConsulta").value;
    var consulta = document.getElementById("consulta").value;

    // Realiza la validación aquí, por ejemplo, asegúrate de que los campos no estén vacíos
    if (nombre === "" || apellido === "" || correo === "" || telefono === "" || tipoConsulta === "default" || consulta === "") {
        alert("Por favor, complete todos los campos.");
        return false; // Evita el envío del formulario si hay campos vacíos
    }
    return true; // Permite el envío del formulario si todos los campos están llenos
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}