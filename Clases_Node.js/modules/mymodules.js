/* console.log(module) */

const mywebaddress = "LUMA.com";
const boolenito = true;
const amigos = ["Luis", "Jhon", "Jeanna", "Rosines", "Maria"];
const dia = 4;
const datos = {
  // Aca se pueden exportar todo tipo de valores, como arrays, objetos, funciones, etc.
  Nombre: "luis manuel",
  Edad: 20,
};

/* const grupo ={
    mywebaddress: mywebaddress,
    boolenito: boolenito,
    amigos: amigos,
    dia: dia,
    datos: datos
}
module.exports = grupo */

/* module.exports = {     
    mywebaddress: mywebaddress,
    boolenito: boolenito,
    amigos: amigos,
    dia: dia,
    datos: datos
}
 */
// De esta forma tambien se pueden exportar los nombres de las variables dentro del mismo export sin la necesidad de crear una constante con dichos objetos.

module.exports = {
  mywebaddress,
  boolenito,
  amigos,
  dia,
  datos,
};

// Y de esta otra manera no haria falta crear una variable nueva por cada dato a exportar, simplemente nombrandola, esta se puede exportar con el nombre que tiene en su archivo de origen con sus datos asociados.

/* 
module.exports.amigos = amigos
module.exports.datos = datos
module.exports.dia = dia
module.exports.boolenito = boolenito
module.exports.mywebaddress = mywebaddress
 */

// Esta es la manera de exportar datos en especificos de este archivo de manera rapida, utilizando el mismo nombre que maneja en este archivo.

/* console.log(module) */
