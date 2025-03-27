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

/* ---EJERCICIOS: Condicionales--- */

// 1: imprime por consola tu nombre si una variable toma su valor



// 2: imprime por consola un mensaje si el usuario y contrasena coincide con unos establecidos

let name='luis rincon'
let pass='24072004'
if(name!='luis rincon'){

console.log('el nombre de usuario es incorrecto')

}else if(pass!='24072004'){

console.log('la contrasena ingresada es incorrecta')

}else{

console.log('bienvenido')

}

// 3: verifica si un numero es positivo, negativo o 0 e imprime un mensaje

let num=0

if(num>=1){console.log('el numero es positivo')}else if(num<=-1){console.log('el numero es negativo')}else{console.log('el numero es 0')}

// 4: verifica si una persona puede votar o no e identifica cuantos anos le faltan

let age=10
if(age>=18){
    console.log('eres mayor de edad, puedes votar')
}else if(age<18 && age>=1){
    
    age= 18 - age
    console.log('eres menor de edad y te faltan: '+ age +' anos')

}else{
    console.log('la edad no es valida')}

// 5: Usa el operador ternario para asignar el valor 'adulto' o 'menor' a una variable dependiendo de la edad

const ageover = age >=18 ? 'adulto' : 'menor'
console.log(ageover)

// 6: muestra en que estacion del ano nos encontramos dependiendo del valor de una variable mes

mes= 'mayo'
switch(mes){

case 'enero':
case'febrero':
case'marzo':
console.log('es invvierno')
break

case'abril':
case'mayo':
case'junio':
console.log('es primavera')
break

case'julio':
case'agosto':
case'septiembre':
console.log('es verano')
break

case'octubbre':
case'noviembre':
case'diciembre':
console.log('es otono')
break

default:
console.log('el mes no es valido')
break
}

// 7: muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior

switch(mes){

case 'enero':
    console.log('el mes tiene 31 dias') 
break

case 'febrero':
    console.log('el mes tiene 28 dias')
break

case 'marzo':
    console.log('el mes tiene 31 dias')
break

case 'abril':
    console.log('el mes tiene 30 dias')
break

case 'mayo':
    console.log('el mes tiene 31 dias')
break

case 'junio':
    console.log('el mes tiene 30 dias')
break

case 'julio':
    console.log('el mes tiene 31 dias')
break

case 'agosto':
    console.log('el mes tiene 31 dias')
break

case 'septiembre':
    console.log('el mes tiene 30 dias')
break

case 'octubre':
    console.log('el mes tiene 31 dias')
break

case 'noviembre':
    console.log('el mes tiene 30 dias')
break

case 'diciembre':
    console.log('el mes tiene 31 dias')
break

default:
console.log('el mes no es valido')
break
}

// 8: usa un switch para imprimir para imprimir un saludo diferente dependiendo del idioma

let idioma= 'ingles'
switch('espanol'){

    case'espanol':
        console.log('hola')
    break
    case'ingles':
        console.log('hello')
    break
    case'italiano':
        console.log('ciao')
    break
    default:
        console.log('no tenemos ese idioma en la base de datos')

}

// 9: usa un switch para hacer de nuevo el ejercicio 6

// ya esta echo \_(^v^)_/

// 10: usa un switch para hacer de nuevo el ejercicio 7

// ya esta echo \_(^v^)_/
