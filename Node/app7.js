/* ---MODULO FS pt2--- */

const fs = require('fs')
/*
fs.appendFile('Main.html', '<p>Hola<p>', (err) => {
if(err){
    throw err
}
console.log('archivo actualizado')
}) */

fs.writeFile('Main.html', 'Contenido nuevo',(err) => {
    if(err){
        throw err
    }
    console.log('Contenido reemplazado exitosamente')
})

fs.unlink('index.html',(err) => {
    if(err){
        throw err
    }
    console.log('El archivo se elimino exitosamente')
})