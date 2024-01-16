function generarNumeroAleatorio(minimo, maximo) {
    if (minimo > maximo) {
        // Intercambiar los valores si el mínimo es mayor que el máximo
        [minimo, maximo] = [maximo, minimo];
    }

    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

module.exports = generarNumeroAleatorio

