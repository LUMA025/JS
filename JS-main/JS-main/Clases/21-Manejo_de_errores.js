/* ---Manejo de errores--- */

// Excepcion:

let NewObject // Esto no es mas que una demostracion de como se ve un mensaje de error, aunque ya se vea seguido xd.
// console.log(NewObject.name)

// Captura de errores:

// Try-catch:

try {
    console.log(NewObject.name)
    console.log('finaliza la ejecucion sin errores') // El try permite permite encontrar si se ejecuta un error dentro de si mismo, y de ejecutarse correctamente, en este caso se muestra un mensaje de que el codigo se ejecuto correctamente. 
}catch{
    console.log('a ocurrido un error') // Y el catch te permite enviar un mensaje en caso de que un error ocurra, aunque el contenido de esta parte de codigo puede ser lo que sea, siempre y cuando ocurra un error dentro de la seccion catch del codigo.
}
try {
    console.log(NewObject)
    console.log('finaliza la ejecucion sin errores') // En este caso el codigo no dara errores por lo tanto el mensaje dentro del try sera el que se vera por consola.
}catch{
    console.log('a ocurrido un error')
}

// Captura de error:

try {
    console.log(NewObject.name)
    console.log('finaliza la ejecucion sin errores')
}catch(error){
    console.log('A ocurrido un error: ', error.message) // esta es la manera en la que podemos ahorrarnos la gran cantidad de informacion que hay en la consola cada vez que ocurre un error, y aparte de eso, te especificara que es lo que fallo, utilizando .message.
}

// Finally:

try {
    console.log(NewObject.name)
    console.log('finaliza la ejecucion sin errores')
}catch(error){
    console.log('A ocurrido un error: ', error.message)
}finally{
    console.log('Este codigo se ejecuta siempre') // Si usamos finally, el codigo puede tener errores y mostrarlos en la consola si algo se ejecuto en el catch, pero lo que este dentro del finally se ejecutara igualmente sin importar el error que este dentro del catch, aunque si aparece algun otro error anterior al try catch, este no podra detenerlo.
}


// Lanzamiento de errores:

// Throw:

// throw new Error('Se ha producido un error'); // Esta simplemente es la manera de poder lanzar un error por nuestra cuenta, junto a un mensaje que se muestre con este error.

function sum(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error ('Esta operacion solo suma numeros')
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error ('Esta operacion solo suma numeros enteros')
    }
    if(a == 0 || b == 0){
        throw new SumIntegerError('Se esta intentando sumar cero', a,)
    }
    return a + b;
}
try{
//console.log(sum(10, 10))
console.log(sum('10', 10))
//console.log(sum(10, '10'))
//console.log(sum('10', '10'))
}catch(error){
    console.log('A ocurrido un error: ', error.message)
}

// Capturar varios tipos de errores:

try{
    //console.log(sum(10.1, 10))
    console.log(sum('10', 10))
    }catch(error){
        if(error instanceof TypeError){
            console.log('A ocurrido un error de tipo: ', error.message)
        }else if(error instanceof Error){
            console.log('A ocurrido un error: ', error.message)
        }
    }

// Excepciones personalizadas:

class SumIntegerError extends Error {
    constructor (mensaje, a, b){
        super(message)
        this.a + a
        this.b + b
    }
    printNumbers() {
        console.log(this.a, ' + ', this.b)
    }
}
try{
    console.log(sum(0, 10))
    }catch(error){
        console.log('Se ha producido un error personalizado: ', error.message)
        error.printNumbers()
    
    }