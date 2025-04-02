/* ---EXPORTACION DE MODULOS--- */

// Exportacion de modulos:

export function add(a, b){
    return a + b
}
console.log(add(10,10))

// Exportacion de propiedades:

export let pi = 3.141
export let Nombre = 'Luis Manuel'

// Exportacion por defecto:

export default function sus(a, b) {
    return a - b;
}

// Exportacion de clases:

export class Circulo{
    constructor(radio){
        this.radio = radio
    }
    area() {
        return Math.PI * Math.pow(this.radio,2)
    }
    perimetro() {
        return 2 * Math.PI * this.radius
    }
}