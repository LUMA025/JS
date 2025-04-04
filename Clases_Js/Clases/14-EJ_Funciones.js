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

let Array1 =[1,2,3,4,5,6,7,8,9]
let Array2 =[2,4,6,8,10,12,14,16,18]
function Samest (array1, array2){
    let Setsam =new Set(array2)
    let ArrayN =[]
    for(let i of array1){
        if(Setsam.has(i)){
            ArrayN.push(i)
        }
    }
    return ArrayN;
}
let Array3 = Samest(Array1,Array2)
console.log(Array3)

// 7: Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares

function sumpa (array){
let sumita = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            sumita += array[i]
        }
    }
return sumita;  
}
let noparsitos = [1,2,3,4,5,6,7,8,9]
let parsitos = sumpa(noparsitos)
console.log(parsitos) 

// 8: Crea una funcion que reciba un array de numeros y devuelva un nuevo array con los numeros elevados al cuadrado 

function Ele2 (array){
let DoEle2 =[]
    for(let i of array){
        DoEle2.push(i*i)
    }
return DoEle2
}
let NoCuad = [1,2,3,4,5,6,7,8,9]
let Cuad = (Ele2(NoCuad))
console.log(Cuad)

// 9: Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function DoRever (array){
    let NowRever =[]
        for(let i of array){
            NowRever.unshift(i)
        }
    return NowRever;
    }
let NoRever = [1,2,3,4,5,6,7,8,9]
let Rever = (DoRever(NoRever))
console.log(Rever)

function DoReverW (array){
    let NowReverW =[]
        for(let i of array){
            NowReverW.push(i.split('').reverse().join('')); 
        }
    return NowReverW;
    }
let NoReverW = [`revertido`,`oditrever`]
let ReverW = (DoReverW(NoReverW))
console.log(ReverW)

// 10: Crea una funcion que calcule el factorial de un numero dado

function DoFac (Int){
let NowFac = 1
    for(let i = Int; i > 0; i--){
        NowFac *= i
    }
return NowFac;
}
Num = 5
Fac = DoFac(Num)
console.log(Fac)