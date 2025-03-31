/* ---STRINGS--- */

// Concatenacion de cadenas

let nombre='luis'
let saludo='hola, '+ nombre
console.log(saludo) // junta ambos mensajes

// Longitud

console.log(saludo.length) // muestra la cantidad de caracteres del mensaje

// Acceso a caracteres

console.log(saludo[3])  //muestra el caracter especifico por su numero en cadena

//Metodos comunes

console.log(saludo.toUpperCase()) // todo se vuelven mayusculas
console.log(saludo.toLowerCase()) // todo se vuelven minusculas
console.log(saludo.indexOf('luis')) // menciona en que parte del mensaje comienzan los caracteres seleccionados 
console.log(saludo.includes('hola')) // para revisar si el contenido ingresaado esta en el mensaje
console.log(saludo.slice(0,5)) // para tomar partes especifiicas del mensaje
console.log(saludo.replace('hola', 'adios')) // para cambiar el contennido del mensaje en el punto designado por contennido nuevo

// Template literals (plantillas literales)

let mensaje=`asi es como uno
puedes tener saltos de
linea en el codigo rapidamente` // de esta manera se escribiran mensajes entre lineas en el codigo, conservando sus salto de linea
console.log(mensaje)

console.log(`buenos dias, ${saludo}!`) // esta es la manera de incorporar el contenido de una variable a un mensaje rapidamente usando acentos invertidos