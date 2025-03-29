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