using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace DemoSignalR
{
    public class ChatHub : Hub
    {
        public void enviar(string nombre, string mensaje)
        {
            Clients.All.mensajeEnviado(nombre, mensaje);
        }
    }
}