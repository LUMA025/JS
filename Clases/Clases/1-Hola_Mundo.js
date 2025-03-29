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