NewArray = [1,2,3,4,5] // Aca simplemente estamos declarando un nuevo array y objeto para usar en la clase.
let person = {
    name: `luis`,
    age: 20,
    alias: `LUMA`
}
let myValue = NewArray[1]
console.log(myValue)
let myName = person.name
console.log(myName)

/* ---Destructuracion---  */

// Sintaxis en arrays:

let [arrayvalu0, arrayvalu1, arrayvalu2, arrayvalu3, arrayvalu4, arrayvalu5] = NewArray // Asi es como podemos seccionar el contenido de un array y pasarselo a multiples variables para que puuedan utilizarlas, lo que vendria siendo propagar sus datos.
console.log(arrayvalu0)
console.log(arrayvalu1)
console.log(arrayvalu2)
console.log(arrayvalu3)
console.log(arrayvalu4)
console.log(arrayvalu5)

// Sintaxis de arrays con valores predeterminados:

let [arrayvalu6 = 0, arrayvalu7 = 0, arrayvalu8 = 0, arrayvalu9 = 0, arrayvalu10 = 0, arrayvalu11 = 0] = NewArray // Esta es una manera de evitar de que las variables que creemos tengan campos vacios, en caso de que el campo en el array este vacio, se podra hacer esto para evitar que la varaible quede como undefined, y en cambio se quede con un valor numerico 0.
console.log(arrayvalu6)
console.log(arrayvalu7)
console.log(arrayvalu8)
console.log(arrayvalu9)
console.log(arrayvalu10)
console.log(arrayvalu11)

// Ignorar elementos array:

let [arrayvalu12 = 0, , , arrayvalu15 = 0] = NewArray // Si queremos guardar datos en un orden especifico en un conjunto de variables, podremos eleir cuales tomaremos saltandonos las que no necesitamos en orden del array, usando este espaciado en comas.
console.log(arrayvalu12)
console.log(arrayvalu15)

// Sintaxis en objects:

let {name, age, alias} = person // De esta manera podremos hacer lo mismo pero utilizando un objeto, sin embargo estas poseeran el nombre que poseen los valores dentro del objeto.
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis de arrays pero con valores predeterminados:

let {name2, age2, alias2, email = `luismanuel.rincon@gmail.com`} = person // Aca lo que estamos haciendo no es crear una variable en la que guardaremos el email, sino introducir en el objeto una nueva variable que contenga lo que deseemos.
console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

// Sintaxis objects con nuevos nombres de variables:

let {alias: alias3, name:name3, age:age3} = person // De esta otra manera podremos adquirir el valor de las variables y dentro de un objeto y asignarlas a otras variables de nombres a determinar. 
console.log(alias3)
console.log(name3)
console.log(age3)

// Objetos anidados:

let persona3 = { // Esta es la manera en la que podemos crear objetos dentro de otros objetos, a esto se le llama anidacion.
    name: 'luis',
    age: 20,
    alias: 'LUMA',
    walk: function(){
        console.log('la persona camina')
    },
    job:{
        name:'me gusta aqui',
        experiencia: 'unos pocos dias',
        work(){
            console.log('la persona trabaja')
        }
    }
}

let {name:name4, job:{name: jobname}} = persona3 // Asi podremos asignarle a nuevas variables, el valor de variables dentro de un objeto anidado.
console.log(name4)
console.log(jobname)

// Propagacion (...):

// Sintaxis para arrays:

let NewArray2 = [...NewArray] // Asi es como podremos propagar informacion de un array a otro, en otras palabras hacer una copia.
let Newarray3 = [...NewArray, `esto`, `es`, `nuevo`] // Y este de aqui es de como propagar un array a otro array aparte de incluir nueva informacion.
console.log(Newarray3)

// Combinacion de arrays:

let Newarray4 = [...NewArray2,...Newarray3] // Esta seria la manera de unir dos o mas arrays en uno solo.
console.log(Newarray4)

// Sintaxis objects:

let person4 = {...person} // Esta es la manera de propagar la informacion de un objeto a otro, es decir, una copia.
console.log(person4)
let person5 = {...person, ...person4} // Esta es la manera de poder juntar los valores de dos o mas objetos dentro de un mismo objeto.
console.log(person5)
let person6 = {...person, Sexo: `Hombre`} // Por ultimo, asi se pueden juntar un objeto dentro de un objeto aparte de nueva informacion que se quiera anadir al nuevo objeto. 
console.log(person6)