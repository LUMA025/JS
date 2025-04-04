/* ---EJERCICIOS: Modulos--- */

import { ExProclass, ExProfunc, ExPropro } from "../Clases1/30-Importacion_distinto_proyecto.mjs";
import sus from "./25-Exportacion_de_modulos.mjs";
import { Exclass, Exfunc, Expro } from "./29-EJ-modulos_stack.mjs";

// 1: Exportar una funcion: 

export function Exporfunc (n1, n2){
    return n1 + n2
}

// 2: Exportar una constante:

export let Exporpro = 'Nada mas para comprobar importacion'

// 3: Exportar una clase:

export class Exporclass {
    constructor(Nombre , Edad){
        this.Nombre = Nombre
        this.Edad  = Edad
    }
}

// 4: Importar una funcion:

console.log(Exfunc('Luis ', 'Manuel'))

// 5: Importa una constante:

console.log(Expro)

// 6: Importa una clase:

let NewExclass = new Exclass('Luis Manuel', 20)
console.log(NewExclass)

// 7: Exporta una funcion, una constante y una clase por defecto (si se puede):

/* Todos los ejercicios aqui abajo son representaciones de como seria exportar funciones, propiedaades y clases 
de manera default, pero existen varias restriccione, primero es que en las clases anteriores ya se exportaron valores default,
por lo que en este apartado de ejercicios todos no compilarian por el choque entre los demas modulos de la clase,
y por ulltimo no se pueden enviar cualquier tipo de valores en exports e imports default, solo estan estandarizadas las funciones*/

/* export default function DefExFun(a, b) {
    return a - b;
}*/

// export default DefExPro = 'este mensaje no se mostrara nunca se mostrara'

/*export default class DefExclass {
    constructor(Nombre , Edad){
        this.Nombre = Nombre
        this.Edad  = Edad
    }
}*/

// 8: Importa una funcion, una constante y una clase por defecto (si se puede):

console.log(sus(20, 10)) // en esta ocasion importe una funcion directamente de la clase de importaciones, que ya esta ligada a funcion default de este proyecto, pero no se podran realizar las siguientes importaciones

// 9: Exporta una funcion, una constante y una clase desde una carpeta:

// exportar funciones es practicamente igual que exportar datos entre la misma carpeta, lo que cambia es la importacion

// 10: Importa una funcion, una constante y una clase desde una carpeta:

// Funcion:

console.log(ExProfunc('Luis ', 'Manuel'))

// Constante:

console.log(ExPropro)

// Clase:

let NewExProclass = new ExProclass('Luis Manuel', 20)
console.log(NewExclass)