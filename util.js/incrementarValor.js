// Función para incrementar el valor de una clave en el Map
function incrementarValor(clave,clientes) {
    const valorActual = clientes.get(clave);
  
    // Incrementar el valor
    let nuevoValor = valorActual + 1;

    if(nuevoValor == 51){
         nuevoValor = 0;
    }
    // Actualizar el valor asociado a la clave
    clientes.set(clave, nuevoValor);
}

module.exports = incrementarValor;