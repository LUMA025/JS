/* ---EXPORTACION DE MODULOS--- */

import { add, Circulo, Nombre, pi } from "./25-Exportacion_de_modulos.mjs"
import sus from "./25-Exportacion_de_modulos.mjs"

// Impotacion de modulos:

console.log(add(10, 10))

// Importar propiedades:

console.log(pi)
console.log(Nombre)

// Importacion por defecto:

console.log(sus(10 , 5))

// Importacion de clases:

let circle = new Circulo(5)
console.log(circle.radio)
console.log(circle.area().toFixed(2))
console.log(circle.perimetro().toFixed(5))

// Proyecto modular:

// import { Circulo }  from "./clases/Myclass.js"

// Modulos externos:

