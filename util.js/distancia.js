function calcularNuevaPosicion(latitud, longitud) {
    // Radio medio de la Tierra en metros (aproximadamente)
    const radioTierra = 6371000;

    // Convertir la distancia de metros a radianes
    const distanciaEnRadianes = 1 / radioTierra;

    // Convertir latitud y longitud a radianes
    const latitudEnRadianes = (latitud * Math.PI) / 180;
    const longitudEnRadianes = (longitud * Math.PI) / 180;

    // Calcular nuevas coordenadas
    const Latitud = latitud + (distanciaEnRadianes * (180 / Math.PI));
    const Longitud = longitud + (distanciaEnRadianes * (180 / Math.PI) / Math.cos(latitudEnRadianes));

    // Devolver las nuevas coordenadas
    return { Latitud,Longitud };
}

module.exports = calcularNuevaPosicion