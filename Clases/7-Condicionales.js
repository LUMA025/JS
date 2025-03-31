/* ---Condicionales--- */

// if (si) y else (otra cosa)

let edad=20
if(edad == 20){

console.log('la edad es '+edad)

}else if(edad <18){

console.log('eres menor de edad')

}else{

console.log('la edad no es '+edad)

}

// operadores ternarios (de nuevo -__-)

const revision = edad == 20 ? 'tienes 20 anos' : 'no tienes 20 anos'
console.log(revision)

// switch

// este se utiliza cuando se va a utilizar una misma variable para determinar varios procesos logicos

let day=2
let dayname

switch(day){
    case 0:
        dayname='lunes'
        break
    case 1:
        dayname='martes'
        break
    case 2:
        dayname='miercoles'
        break
    case 3:
        dayname='jueves'
        break
    case 4:
        dayname='viernes'
        break
    case 5:
        dayname='sabado'
        break
    case 6:
        dayname='domingo'
        break
    default:
        dayname='numero de dia incorrecto'
}

console.log(dayname)