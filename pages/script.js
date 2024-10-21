function jugar() {
    const signoCorrecto = "capricornio";
    const signoUsuario = prompt("¿Cuál es tu signo del zodiaco?");

    if (signoUsuario) {
        const signoUsuarioNormalizado = signoUsuario
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, ""); // Elimina los acentos

        if (signoUsuarioNormalizado === signoCorrecto) {
            alert("¡Felicidades! Has acertado.");
        } else {
            alert("Lo siento, no has acertado. Inténtalo de nuevo.");
        }

        // Preguntar si desea regresar a la página principal
        const deseaRegresar = confirm("¿Deseas regresar a la página principal?");
        
        if (deseaRegresar) {
            // Redirigir a la página principal
            window.location.href = "../index.html"; // Cambia "index.html" por la URL de tu página principal
        }
    }
}
function regresar(){
    window.location.href = "../index.html";
}