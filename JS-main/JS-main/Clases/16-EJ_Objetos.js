/* ---EJERCICIOS: Objetos--- */

// 1: Crea unn objeto con 3 propiedades

let obj1 = {
    Nombre: `Luis`,
    Edad: 20,
    Sexo: `Hombre`
}

// 2: Accede y muestra su valor

console.log(obj1)

// 3: Agrega una nueva propiedad

obj1.Nombre = `Luis Manuel`
console.log(obj1.Nombre)

// 4: elimina una de las 3 primeras propiedades

delete obj1.Sexo
console.log(obj1.Sexo)

// 5: agrega una funcion e invocala

obj1.Func = function(Estado){
    console.log(`Estoy bien`)
}
obj1.Func()

// 6: itera las propiedades del objeto

for(let key in obj1){
    console.log(key + `: ` + obj1[key])
}

// 7: crea un objeto anidado

obj1.obj2 ={
    Estado: `Soltero`,
    Altura: `1.83`,
    Cabello: `Negro`
}
console.log(obj1.obj2)

// 8: accede y muestra el valor de las propiedades

console.log(obj1,obj1.Func())

// 9: comprueba si los 2 objetos creados son iguales

let obj3 = {
    Nombre: `Luis`,
    Edad: 20,
    Sexo: `Hombre`
}

let obj2 = {
    Nombre: `Luis`,
    Edad: 20,
    Sexo: `Hombre`
}
console.log(obj2 == obj3)

// 10: comprueba si dos propiedades diferentes son iguales

console.log(obj2.Nombre == obj3.Nombre)