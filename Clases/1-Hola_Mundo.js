/* ---Hola Mundo--- */

console.log("hola mundo")
console.log('hola mundo')
console.log(`hola mundo`) // Esta tiene la caracteristica de que el mensaje se puede ver en varias lineas.
/*console.log('hola mundo falso')*/
console.log('5')
console.log(5)
console.log(5+5)
console.log(5-5)
console.log(5*5)
console.log(5/5)
console.log(5**5)

/*Variables*/

// Var:

var prvar='prueba de variable var'
console.log(prvar)
prvar='prueva de cambio var'
console.log(prvar)

// Let:

let prlet='prueba de variable let'
console.log(prlet)
prlet='prueba cambio de variable let'
console.log(prlet)

// Const:

const prconst='prueba variable const'
console.log(prconst)

/* Tipos de datos */

// Cadena de texto:

let name='luis manuel'
let user_name='LUMA'
let email='luismanuel.rincon24@gmail.com'

// Numero:

let edad=20  // Entero.
let altura=1.80  // Decimal.

// Boolean:

let tonto=true
let listo=false

// Undefined:

let prueba_undefined
console.log(prueba_undefined) // Variable sin contenido.

// Null:

let nullpr=null // Retirar valor de variable.

// Symbol:

let symbolpr=Symbol('symbolpr') // Valores unicos.

// Bigint:

let bigintpr=BigInt(54841313841548435151321548494875148) // Permitir numero grande.
let bigintpr2=654874625762736576325634756n // Permitir numero grande de otra manera.

// Muestra de tipo de datos:

console.log(typeof name)
console.log(typeof edad)
console.log(typeof tonto)
console.log(typeof prueba_undefiined)
console.log(typeof nullpr)
console.log(typeof bigintpr)
console.log(typeof symbolpr)