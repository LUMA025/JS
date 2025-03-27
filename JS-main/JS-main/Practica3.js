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

/* ---EJERCICIOS:Strings--- */

// 1: concatena dos cadenas de texto

let v1='Esta '
let v2=v1+'Prueba'
console.log(v2)

// 2: muestra la longitud de una cadena de texto

console.log(v2.length)

// 3: muestra el primer y ultimo caracter de un string

console.log(v2[10])
console.log(v2[0])

// 4: convierte a mayusculas y minusculas un string

console.log(v2.toUpperCase())
console.log(v2.toLowerCase())

// 5: crea una cadena de texto en varias lineas

let lg= `asi se hace
un mensaaje largo 
entre varias lineas`
console.log(lg)

// 6: interpola el valor de una variable en un string

console.log(`terminando ${v2}!`)

// 7: reemplaza todos los espacios en blanco de un string por guiones

console.log(v2.replace(' ','-'))

// 8: comprueba si una cadena de texto tiene una palabra en concreto

console.log(v2.includes('Esta'))

// 9: comprueba si dos  strings son iguales

let v3= 'Esta Prueba'
console.log(v2==v3)

// 10: comprueba si dos strings tienen la misma longitud

console.log('primer mensaje: '+v2.length,'segundo mensaje: '+v3.length)
console.log(v2.length == v3.length)