/* ---IMPORTS Y EXPORTS CON EL ARCHIVO "SALUDOS"--- */

// const saludos = require("./saludos.js")  // Esta es la manera de traer al paquete de exportacion completo, para luego utilizarlo desestructurandolo en la cita del las exportaciones
// para lo que tendriamos que usar nuestras exportaciones de la siguiente manera: "  console.log(saludos.saludarholamundo('Luis Manuel'))  " para especificar que dato de todas las exportaciones vamos a usar

const { saludarholamundo, saludar } = require("./saludos.js") // o desestructurar especificamentee el dato, la funcion o el codigo que necesitamos para no tener que especificar a la hora de utilizar la funcion en este caso
console.log(saludarholamundo('Luis Manuel')) // Permitiendonos usar esa especcificacion de manera mas rapida en el codigo
console.log(saludar('Luis Manuel')) // Claro, siempre y cuando especifiquemos los campos de la exporttacion que vamos a utilizar al principio en el import

