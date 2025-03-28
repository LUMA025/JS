/* ---EJERCICIOS: Bucles--- */

// 1: crea un bucle que imprima los numeros del 1 al 20

/*for (let i = 1 ; i <= 20 ; i++){

console.log( i )

}*/

// 2: crea un bucle que sume todos los numeros del 1 al 100

/*let plus = 0
for(let i = 0 ; i <= 100 ; i++){
    plus += i
}
console.log(plus)*/

// 3: crea un bucle que imprima todos los numeros entre 1 y 50

/*i=1
while(i<49){
i++
console.log(i)
}*/

// 4: dado un array de nombres, usa un bucle para para imprimir cada nombre en la consola

/*let caja = ['uno','dos','tres','cuatro','cinco']

for (let numeros of caja){

    console.log(numeros)

}*/

// 5: escribe un bucle que cuente el numero de bocales en una cadena de texto 

/*let conteo = 'cinco'
i=1
for(let cuenta of conteo){

console.log('numero '+i+': '+cuenta)
i++

}*/

// 6: dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto

let caja = [1,2,3,4,5,6]
let multi = 1
for (let i = 0; i < caja.length; i++) {  
    multi *= caja[i];  
}  
 console.log(multi)

// 7: escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {  
    console.log(`5 x ${i} = ${5 * i}`);  
}  

// 8: Usa un bucle para invertir una cadena de texto

let text = 'reversa'
let rever = '';  
    for (let i = text.length - 1; i >= 0; i--) {  
        rever += text[i];  
    }  
console.log(rever)

// 9: Usa un bucle para generar los primeros 10 numeros de la secuencia fibonacci

let fibo = 10

const cajita = [];  
    cajita[0] = 0;  
    cajita[1] = 1;  

    for (let i = 2; i < fibo; i++) {  
        cajita[i] = cajita[i - 1] + cajita[i - 2];  
    }  
    console.log(cajita)

// 10: dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10

let supercajita = [45,23,1,5,64,6,76,34]
let overdiez = []

for (let i = 0; i < supercajita.length; i++) {  
    if (supercajita[i] > 10) {  
        overdiez.push(supercajita[i]);  
    }  
}  
console.log(overdiez)
