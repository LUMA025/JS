/* ---PROCESS--- */

// console.log(process) // Muuuuuuucha informacion que por el momento no se va a usar, simplemente es demostrativo.
// console.log(process.env) // Mas o menos lo mismo, informacion del sistema que esta ejecutando este programa.

// console.log(process.argv) // esto te permite interactual con la terminal, anadiendo por ejemplo caracteres pero que no esten ligados al numero 1 o dos debido a que gracias a argv, podremos ver en 0 la ubicaciion de node en la maquina, y en 1 la ubicacion del archivo que se esta ejecutando, para luego mostrar los caracteres que uno quiera introducir en la terminnal.
// console.log(process.argv[2]) // Estas siguientes consultas son para acceder especificamente a los dos primeros caracteres que anadimos en terminal, denotados por el 3 y el 4 debido a que esta es su ubicacion en la consola, por que el 0 y el uno es para la ubicacion del node y la ubicacion del archivo ejecutado.
// console.log(process.argv[3])

for (let i = 2; i < process.argv.lengt; i++){
    console.log(process.argv[i])
}

console.log(process.memoryUsage())