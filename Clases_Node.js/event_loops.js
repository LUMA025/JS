const http = require('http')

/* console.log('primero')

setTimeout(() => {
    console.log('segundo')

}, 3000)

console.log('tercero') */

const server = http.createServer((request,response) =>{
    if (request.url === '/') {
        response.write('bienvenido al server')
        return response.end()
    }

    if (request.url === '/about') {
        for (let i = 0; i < 100000; i++) {
            console.log(Math.random() * i)
        }
        return response.end('acerca de')
    }
    response.end('no encontrado')
})

server.listen(3000)
console.log('server en el puerto 3000')