/* ---FUNCIONES--- */

// Simple

function NewFun(){ // las funciones simples pueden ser creadas y llamadas en cualquier momento del codigo, estas tendran codigo dentro y podra ejecutarse mientras el parametro que pide se cumpla

console.log('la funcion sirve')

}

NewFun()

// Con parametros

function NewFunPar(nombre){ // en esta se especifica un parametro, que es la existencia de la variable nombre, luego dentro de la funcion se hara usa de este parametro para ejecutar un codigo

console.log(`hola ${nombre}`)

}

NewFunPar('luis')
NewFunPar('manuel')

// Funciones anonimas

const NewFunPar2 = function (nombre){ // una funcion anonima se puede asociar a una variable, a la cual se le da un dato que sera adquirido como parametro por la funcion dentro de ella

console.log(`hola ${nombre}`)

}

NewFunPar2  ('luis manuel')

// Funciones flecha

const Flecha = (nombre) => { // las funciones flecha son mas faciles de escribir, luego de escribir una variable se debe colocar el parametro que necesita  para funcionar y terminar con un =>{} y dentro de estas llaver ira el codigo

    console.log(`hola ${nombre}, la flecha funciona`)

}

Flecha('luis manuel')


const Flecha2 = (nombre) => console.log(`hola ${nombre}, la flecha funciona`) // esta es solo una manera mas facil de escribir el mismo codigo

Flecha('luis manuel')

// Parametros

function Plus (a,b) { // esta es otra manera de darle parametros a una funcion, puede pedir dos variables, y luego usar dichas variables en su codigo interno, en este caso, una suma

    console.log(a + b)

}

Plus(8 , 8)

function DefPlus (a=0,b=0) { // este es un mero seguro por si se da el caso de que los valores son nulos, asi se evita un error, y simplemente sigue haciendo la suma, 0+0=0

    console.log(a + b)

}

DefPlus()

// Retorno de valores

function Mult (a = 0 , b = 0){ // en este caso se puede devolver un valor hasta afuera de una variable, para utilizarla en otros codigos

    return a * b

}

console.log(Mult(5 , 5))

// Funciones anidadas

function Ext (){ // aca se demuestra que dentro de funciones pueden haber otras funciones, y estas solo funcionara dentro de su funcion padre

    console.log('externa')

    function Int(){

        console.log('interna')

    }

    Int()

}

Ext()

// Funciones de orden superior

function SiFun(func, param){ // aqui se puede usar una funcion como parametro para otra funcion, y en caso de que la funcion externa necesite un parametro para funcionar, tambien se le podra colocar

}

SiFun(Flecha2('funcion insside funcion'))

// For Each

Newarray = [1,2,3,4,5]

Newset = new Set (['Valor1','Valor2','Valor3'])

map=new Map([

    ['nombre','luis'],
    ['edad',20],
    ['apellido','rincon']
        
    ])

Newarray.forEach((valor => console.log(valor))) 

Newarray.forEach(function(valor){ 
    
    console.log(valor)

}) 

Newset.forEach((valor => console.log(valor))) 

Newset.forEach(function(valor){ 
    
    console.log(valor)

}) 

map.forEach((valor => console.log(valor))) 

map.forEach(function(valor){ 
    
    console.log(valor)

}) 

// por ultimo un for each es una especie de for combinado con un constructor, donde el valor que determina la cantidad de iteraciones que hara el for sera a su vez la variable de la funcion que esta dentro, en este caso se probo con cada constructor, donde cada uno escribira por consola sus propios valores