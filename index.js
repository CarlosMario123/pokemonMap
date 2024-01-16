const { json } = require('express');
const calcularPosicion = require("./util.js/distancia")
const incrementarValor = require("./util.js/incrementarValor")
const MandarPokemones = require("./pokemon/MandarPokemones")
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 4000 }); 


const clientes = new Map();
wss.on('connection', (cliente) => {
  clientes.set(cliente,1);
  console.log("Cliente conectado");

  cliente.on('message', (mensaje) => {
    console.log(mensaje.toString('utf-8'));
    mensaje = JSON.parse(mensaje)
    const posicion = calcularPosicion(mensaje.latitud,mensaje.longitud);

    incrementarValor(cliente,clientes);
    console.log(clientes.get(cliente))

    if(clientes.get(cliente) == 2){
      MandarPokemones().then((result)=>{
        const ubiPokemon = {
           pokemon:result,
            posicion
        }
          cliente.send(JSON.stringify(ubiPokemon))
     })
    }
     

  });
});
