const http = require("http");

/* http.createServer(function (request, response) {

    response.write('Hola broder')
    response.end()
}).listen(3000) */

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.write("bienvenido al servidor");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("acerca de");
    return response.end();
  }

  response.write(`
        <h1>No se encontro</h1>
        <p>Esta pagina no existe</p>
        <a href="/">Volver a la pagina principal</a>
        `);
  response.end();
});

server.listen(3000);

console.log("servidor escuchando en el puerto 3000");
