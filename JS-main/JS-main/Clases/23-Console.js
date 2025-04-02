/* ---Console--- */

// Log:

console.log('hola mundo al final')

// Error:

console.error("Este mensaje es un error.")
console.error('Este es un error al conectarse a la base de datos', new Error('Conexion fallida.')) // Solo demostrativo.

// Warn:

console.warn('Este mensaje es una advertencia')

// Info:

console.info('Este mensaje es informativo')

// Table:

let Table = [
    ['Luis',20],
    ['Jhon',20],
    ['Juan',21]
]

console.table(Table)

let Data = [
    {name: 'Luis', age: 20},
    {name: 'Jhon', age: 20},
    {name: 'Juan', age: 21},
]
console.table(Data)

// Grupo:

console.group('Usuario: ')
console.log('Nombre: Brais')
console.log('Edad: 20')
console.groupEnd()
console.log('Aqui se acaba el grupo')

// Time:

console.time('tiempo de ejecucion')
for(let i = 0; i <= 1000; i++){
}
console.timeEnd('tiempo de ejecucion')

// Assert:

let age= 18
console.assert(age >= 18, 'el usuario debe ser mayor de edad')
age= 15
console.assert(age >= 18, 'el usuario debe ser mayor de edad')

// Count:

console.count('click')
console.count('click')
console.count('click')
console.countReset('click')
console.count('click')

// Trace:

function funa(){
    funb()
}

function funb(){
    console.trace('seguimiento de la ejecucion')
}

funa()

// Clear:

console.clear()