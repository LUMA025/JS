/* const web = require('./modules/mymodules') */

// Asi podremos importar la informacion que exportamos en mymodules y asignar dicha informacion a una variable en este caso de nombre web.

const {
  datos,
  amigos,
  boolenito,
  dia,
  mywebaddress,
} = require("./modules/mymodules");

// De esta manera podremos especificar el contenido que queremos sacar del export en mymodules, asi estas mismas variables vendran a main para poder utilizarlas en cualquier cosa por ejemplo un console.log.

// console.log(web)

// Asi llamariamos al objeto que almacena todas las variables impportadas, para especificar una se tendria que escribir console.log(web.amigos) por ejemplo.

/* console.log(datos);
console.log(amigos);
console.log(boolenito);
console.log(boolenito);
console.log(mywebaddress);
console.log(dia); */

// Mientras que de esta manera podremos llmanar a cada variable individualmente gracias a que las importamos como variables independientes sin estar ligadas a un objeto y con su nombre original en el archivo fuente, osea mymodules.

/* ---Carpeta math--- */

const mathoperations = require ("./math/index")

// Aqui aprendimos a exportar e immportar funciones que nos permitan utilizar dichas funciones en los archivos que necesitemos, en este caso practicamos con operaciones matematicas.

console.log(mathoperations.div(10, 10))
console.log(mathoperations.add(10, 10))
console.log(mathoperations.mul(10, 10))
console.log(mathoperations.sus(10, 10))