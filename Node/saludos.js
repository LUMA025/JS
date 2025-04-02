function saludar(nombre){
    return `hola amigo ${nombre}`;
}

function saludarholamundo(nombre){
    return`hola mundo, soy ${nombre}`
}

// module.exports.saludar = saludar
// module.exports.saludarholamundo = saludarholamundo

// Otra manera puede ser puede ser creando un objeto que almacenne las funciones o codigo utilizando un solo module.exports

// de esta manera

module.exports = {
    saludar: saludar,
    saludarholamundo: saludarholamundo
}


