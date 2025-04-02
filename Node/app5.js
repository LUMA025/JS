/* ---TIMERS--- */

function mostrartema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}
setTimeout(mostrartema, 5000, 'Node.js') // El  setTimeiout te permite darle a la consola un cronometro que le indique que esta debe compilar luego de cierto tiempo de retraso, en este caso lo estamos retrasando 5 segundos, ya que cada segundo se representa por 1000 milisegundos.

function sumar (a, b){
    console.log(a + b)
}
setTimeout(sumar,3000,8,8) // Aqui se puede ver que los dos primeros parametros son para identificar la funcion que se va a ejecutar en ese timeout, y la cantidad de tiempo que demorara, luego de eso se puede seguir con los valores que requiera la funcion para funcionar seguidos de comas.

console.log('Esta linea va a estar ubicada antes de set immediate')
setImmediate(mostrartema, 'Node.js') // SetImmediate te permite darle prioridad a un procesamineto en especifico y lo ejecuta luego de los procesos sincronos del sistema, osea los procesos que esten dentro de la linea de ejecucion consicutiva normal del codigo, lo que este en el setimmediate se ejecuta justo despues.
console.log('Esta linea va a estar ubicada luego de set immediate')

// setInterval(mostrartema,3000,'Node.js') // SetInterval hace que una ejecucion se repita indefinidamente cada cierta cantidad de tiempo definida en el mismo SetInterval, este modulo tambien puede recibir parametros para utilizar en funciones que requieran mas de un parametro exactamente de la misma forma que se puede hacer con el settimeout.

