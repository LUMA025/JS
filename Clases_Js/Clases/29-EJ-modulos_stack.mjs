// Solo para las exportaciones hacia los ejercicios de modulos:

// Funcion:
export function Exfunc (n1, n2){
    return n1 + n2
}

// Propiedad:

export let Expro = 'Nada mas para comprobar importacion'

// Clase:

export class Exclass {
    constructor(Nombre , Edad){
        this.Nombre = Nombre
        this.Edad  = Edad
    }
}

// Exportaciones por defecto (incorrectas predefinidamente): 

// Funcion:

/* export default function DefExFun(a, b) {
    return a - b;
}*/

// Propiedad:

// export default DefExPro = 'este mensaje no se mostrara nunca se mostrara'

// Clase:

/*export default class DefExclass {
    constructor(Nombre , Edad){
        this.Nombre = Nombre
        this.Edad  = Edad
    }
}*/