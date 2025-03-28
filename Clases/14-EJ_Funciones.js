/* ---EJERCICIOS: Funciones--- */

// 1: Crea una funcion que reciba dos numeros y devuelva su suma

function plus (a=0,b=0){

    console.log(a+b)

}

plus(10,10)

// 2: Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos

function overnum (array){
    let over = array[0]
    for (let i = 1;i < array.length;i++)
        if(array[i] > over){

            over = array[i]

        }
    return over;
}

let numbers = []
numbers = [1,2,3,4,5,6,7,8,9]
console.log(overnum(numbers))

// 3: Crea una funcion que reciba un string y devuelva el numero de vocales que contiene

function vocals(string){
let nuvo = 0
    for(let i=1; i <= string.length; i++){

        if(string[i]=='a' || string[i]=='e' || string[i]=='i' || string[i]=='o' || string[i]=='u'){
            
            nuvo+=1

        }

    }
return nuvo;
}

word='murcielago'
console.log(vocals(word))

// 4: Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas
let lower = ['todo','en','mayusculas']

function Riseup (array){
    return array.map(muerto => muerto.toUpperCase()) 
}

let x =Riseup(lower)
console.log(x)

// 5: Crea una funcion que reciba un numero y que devuelva true si es primo, y false si es contrario

function primito (Int){

    for(let i = 2; i <= Math.sqrt(Int); i++){

        if(Int%i == 0 ){
            return console.log('eres puto');
        }
    }   
    return console.log('eres primo');

}
let numerito = 77
primito(numerito) 

// 6: Crea una funcion que reciba dos arrays y devuelva un nuevo array que tenga contenga los elementos comunes entre ellos



// 7: Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares

function sumpa (array){
let sumita = 0
    for(let i = 1; i <= array.length; i++){

        if(array[i] / 2 != 0){

            sumita += array[i]
        }
    }
return console.log(sumita)  
}
let parsitos = [1,2,3,4,5,6,7,8,9]
sumpa(parsitos) // esto esta malo

// 8: Crea una funcion que reciba un array de numeros y devuelva un nuevo array con los numeros elevados al cuadrado 

let tosquare = ['todo','en','mayusculas']

function square (array){
    
    
    
}

let z = square(tosquare)
console.log(x)

// 9: Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso



// 10: Crea una funcion que calcule el factorial de un numero dado


