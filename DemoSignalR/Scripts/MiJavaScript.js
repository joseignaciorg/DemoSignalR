$(document).ready(function () {
    //Realizo conexion con el servidor
    var chat = $.connection.chatHub;

    //Llamamos a mensajeEnviado 
    chat.client.mensajeEnviado = function (nombre, mensaje) {
        //Guardamos el nombre del usuario y su mensaje
        var guardaNombre = nombre;
        var guardaMensaje = mensaje;

        //mostramos el nombre de usuario  el mensaje en la pagina
        $('#mensajesChat').append('<li><strong>' + guardaNombre + '<strong>:&nbsp;&nbsp;' + guardaMensaje + '</li>');
    };
    //Pedimos al usuario su nombre
    var nombrePrompt = prompt("Introduce tu nombre de usuario:");
    $("#mensaje").focus();

    //abro la conexion con el hub y manejo el evento click del boton 
    $.connection.hub.start().done(function () {
        $('#btnEnviar').click(function () {

            chat.server.enviar(nombrePrompt, $('#mensaje').val());

            $('#mensaje').val("").focus();
        });
    });
});