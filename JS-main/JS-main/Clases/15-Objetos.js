/* ---Objetos--- */

// sintaxis

let person ={ //Los objetos son un tipo de variable especial que puede cumplir el rol de una estructura compleja, esta puede guardar variables con sus propias keys como los mapas, estas tambien pueden almacenar funciones o incluso otros objetos
    name: 'luis',
    age: 37,
    alias: 'LUMA'
}

// Acceso a propiedades

// notacion por punto

console.log(person.name) // de esta manera podemos mostrar el valor de un dato almacenado en un objeto en la consola, por medio de su key

// notacion de  corchetes

console.log(person['name']) // otra manera de anotar los datos

// modificacion de propiedades

person.name = 'luis manuel' // de esta manera se puede cambiar el contenido de una variable en un objeto
console.log(person.name)

console.log(typeof person.age) // asi se puede ver el tipo de dato que posee una variable en un objeto
person.age = '37'
console.log(typeof person.age) // aqui vemos como el tipo de valor de la variable age cambio de String a Int luego de cambiarlo
console.log(person.age)

// eliminar propiedades

delete person.age  // aqui lo que estamos haciendo es eliminar la variable age, por lo que ahora se mostrara como undefined
console.log(person.age)

// nueva propiedad

person.email = 'luismanuel.rincon24@gmail.com' // de esta forma es como podemos agregar una nueva variable ingresando su key y el valor deseado
person ['age'] = 20
console.log(person)

// metodos (funciones)

let person2 ={ // asi es como podemos almacenar funciones dentro de objetos
    name: 'luis',
    age: 20,
    alias: 'LUMA',
    walk: function(){
        console.log('la persona camina')
    }
}

person2.walk() // y de esta forma podemos llamar a la funcion dentro de un objeto

// anidacion de objetos

let persona3 = { //esta es la union de todo lo antes dicho, un objeto con variables y un objeto dentro, que a su vez tiene mas variables y una funcion
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
console.log(persona3) // aqui mostramos el contenido del objeto en suu totalidad
console.log(persona3.job.experiencia) // aqui mostramos el valor de una de las variables dentro del objeto dentro del objeto pincipal
console.log(persona3.job.work) // y aqui llamamos a la fucion dentro del objeto que a su vez esta dentro del objeto principal

let persona3p = {
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
            console.log(`la ${this.name} persona trabaja`) // y por ultimo esta es la manera de en un console.log se pueda mostrar un mensaje que contenga una variable dentro del objeto dentro del objeto principal
        }
    }
}
console.log(persona3p.job.work())

// igualdad de objecs

let person4 ={ // aca experimentamos al intentar comprobar si un objeto, una variable, y el valor de esa variable son iguales
    name: 'luis',
    age: 37,
    alias: 'LUMA'
}

person ['name'] = 'luis'
console.log(person == person4) // los objetos entre si por mucho que tengan el mismo contenido no seran considerados lo mismo
console.log(person === person4) // por ende tampoco esta manera de representarlo funcionara
console.log(person.name === person4.name) // sin embargo la cosa cambia cuando comparamos el valor de una variable dentro de de los objetos, el contenido de estas si pueden ser considerados iguales

// iteracion

for(let value in person4){ // el for in es practicamente lo mismo que un for of a la hora de usar un array, solo que tomara como referencia un objeto
    console.log(value) // y consecuentemente mostrara su key en este caso
}

for(let value in person4){
    console.log(value + ': ' + person[value]) // y la key junto con su valor adjunto en este otro caso
}

// funciones como objects

function personfun(name,age){ // aca tenemos una manera de poder utilizar a una funcion como objeto, pero esto no es nada recomendable asi que este ejemplo es meramente demostrativo
    this.name = 'luis'
    this.age = 20
}

let person5 = new personfun ('luis',20)
console.log(person5)
console.log(person5.name)
console.log(typeof person)
console.log(typeof persona5)

