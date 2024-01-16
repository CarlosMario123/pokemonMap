//importacion de random
const generarNumeroAleatorio = require("../util.js/aleatorio")
//funcion asincrona para traer pokemon de maner aleatori solo imagnes


async function getPokemon(){
  //generamos el numero aleatorio 
    let number = generarNumeroAleatorio(1,1000);
    let apiRuta = `https://pokeapi.co/api/v2/pokemon/${number}`;

    try{
        const respuesta = await fetch(apiRuta);

        //si todo sale bien obtenemos el json de la respuesta
        const data = await respuesta.json();
        const rutaImg = data.sprites.other.home.front_default
      
        return rutaImg;
    }catch(e){
        console.log("hubo un error");
        console.log(e)
    }

}


module.exports = getPokemon;