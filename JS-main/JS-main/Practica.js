/* ---Hola mundo--- */

console.log("hola mundo")
console.log('hola mundo')
console.log(`hola mundo`) // esta tiene la caracteristica de que el mensaje se puede ver en varias lineas
/*console.log('hola mundo falso')*/
console.log('5')
console.log(5)
console.log(5+5)
console.log(5-5)
console.log(5*5)
console.log(5/5)
console.log(5**5)

/*Variables*/

//var

var prvar='prueba de variable var'
console.log(prvar)
prvar='prueva de cambio var'
console.log(prvar)

//let

let prlet='prueba de variable let'
console.log(prlet)
prlet='prueba cambio de variable let'
console.log(prlet)

//const

const prconst='prueba variable const'
console.log(prconst)

/*tipos de datos*/

//cadena de  texto
let name='luis manuel'
let user_name='LUMA'
let email='luismanuel.rincon24@gmail.com'

//numero
let edad=20  //entero
let altura=1.80  //decimal

//boolean
let tonto=true
let listo=false

//undefined
let prueba_undefined
console.log(prueba_undefined) //variable sin contenido

//null
let nullpr=null //retirar valor de variable

//symbol

let symbolpr=Symbol('symbolpr') //valores unicos

//bigint

let bigintpr=BigInt(54841313841548435151321548494875148) //permitir numero grande
let bigintpr2=654874625762736576325634756n //permitir numero grande 2

//muestra de tipo de datos

console.log(typeof name)
console.log(typeof edad)
console.log(typeof tonto)
console.log(typeof prueba_undefiined)
console.log(typeof nullpr)
console.log(typeof bigintpr)
console.log(typeof symbolpr)

/* --EJERCICIOS:primeros pasos-- */

// 1: Escribe un comentario en una linea (XD)

// 2: Escribe un comentario en varias lineas

/* aqui
lo
resolvi*/

// 3: Declarar variables con valores asociados a todos los tipos de datos primitivos

let Ec='Ejercicio de caracteres'
let En=24
let Eb=true
let Eu=undefined
let Enu=null
let Es=Symbol('simbolo')
let Ebn=88798746513516816165415468354651n

// 4: Imprime por consola el valor de todas las variables

console.log(Ec)
console.log(En)
console.log(Eb)
console.log(Eu)
console.log(Enu)
console.log(Es)
console.log(Ebn)

// 5: Imprime por consola el tipo de todas las variables

console.log(typeof Ec)
console.log(typeof En)
console.log(typeof Eb)
console.log(typeof Eu)
console.log(typeof Enu)
console.log(typeof Es)
console.log(typeof Ebn)

// 6: Modifica el contenido de las variables por otro del mismo tipo

Ec=('prueba de cambio de contenido')
En=25
Eb=false
Eu=undefined
Enu=null
Es=('simbolo 2')
Ebn=8n

// 7: Modifica el contenido de las variables por otro de distinto tipo

Ec=1
En=('cambio de tipo')
Eb=null
Eu=('cambio de contenido undefined')
Enu=26
Es=('cambio de tipo symbol')
Ebn=('cambio de tipo bigint')

// 8: Declara constantes con valores asociados a todos los tipos de datos primitivos

const Ecp=('prueba caracter permanente')
const Enp=26
const Ebp=true
const Eup=undefined
const Enup=null
const Esp=Symbol('simbolo 3')
const Ebnp=68461651615168116516816516561n

// 9: A continuacion modifica los valores de las constantes

Ecp=('prueba cambio caracter permanente')
Enp=27
Ebp=false
Eup=undefined
Enup=null
Esp=Symbol('simbolo 4')
Ebnp=6n

// 10: Comenta las lineas que produzcan algun tipo de error al ejecutarse

/* el error relacionado con las variables constant ocurre debido a que una variable constant intento ser cambiada o modificar su valor, 
cuando esto no se puede*/

/* siiiiii primera fase lista*/