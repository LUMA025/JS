/* ---MODULO FS--- */

const fs = require('fs')
fs.readFile('Node/Main.html', 'utf-8', (err,contenido) => { // El fs.readfile nos permite ver el contenido de un archivo, en este caso, el contenido de un archivo html
    if(err){
        // console.log(err) // Esta es otra menera de mostrar que hubo un error a la hora de ejecutar el codigo, pero este no detendra la ejecucion del resto del codigo despues de el.
        throw err // Sin embargo esta manera de lanzar un error para el codigo en seco, cuando el error pasa, ningun otro codigo puede ejecutarse luego
    }else{
        console.log(contenido) // Y este console.log de aqui permite ver el contenido del html en el compilador.
    }
    console.log('Mensaje...') // Por ejemplo, de saltar el error por el throw, este mensaje no saldria, pero con el console.log(err) si lo haria.
})

fs.rename('Node/Main.html', 'Main.html' , (err) =>{
    if(err){
        throw err
    }else{
        console.log('Nombre cambiado exitosamente ') 
    }
})
