/* ---EJERCICIOS: Estructuras--- */
// 1: crea un array que almacene 5 animales

let caja = ['perro','gato','tortuga','loro','hamster']

// 2: anade dos o mas, uno al principio y otro al final

caja.push('hormiga')
caja.unshift('iguana')

// 3: elimina el que se encuenntra en tercera posicion

caja.splice(3,1)

// 4: Crea un set que almacene 5  libros

let lista = new Set (['necronomicon','elemento','libro3','libro4','libro5'])

// 5: anade dos o mas, uno de ellos repetido

lista.add('libro6')
lista.add('libro7')
lista.add('necronomicon')

// 6: Elimina uno concreto a tu eleccion

lista.delete(('libro7'))

// 7: Crea un mapa que asocie el numero del mes a su nombre

let base = new Map ([

[1,'enero'],
[2,'febrero'],
[3,'marzo'],
[4,'abril'],
[5,'mayo'],
[6,'junio'],
[7,'julio'],
[8,'agosto'],
[9,'septiempre'],
[10,'octubre'],
[11,'noviembre'],
[12,'diciembre']

])

// 8: comprueba si el mes numero 5 existe en el mapa e imprime su valor

console.log('la exixtencia del mes cinco es: '+ base.has(5)+' y su nombre es: ' + base.get(5))

// 9: anade al mapa una clave con un array como que almacene los meses de verano

let meses=['julio','agosto','septiembre']
base.set('array' , meses)
console.log(base)

// 10: crea un array, transformalo en un set y luego almacenalo en un mapa

let cambio = ['solo','para','cambiar']
let cambio1 = new Set (cambio)
let cambio2 = new Map ([

['cambio 1',cambio]

])

console.log(cambio2)