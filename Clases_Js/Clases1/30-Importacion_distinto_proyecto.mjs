// Para finalizar, exportar una funcion, propiedad y clase desde otra carpeta:

// Funcion:
export function ExProfunc (n1, n2){
    return n1 + n2
}

// Propiedad:

export let ExPropro = 'Nada mas para comprobar importacion'

// Clase:

export class ExProclass {
    constructor(Nombre , Edad){
        this.Nombre = Nombre
        this.Edad  = Edad
    }
}
