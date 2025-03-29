/* ---Objetos--- */

// sintaxis

let person ={
    name: 'luis',
    age: 37,
    alias: 'LUMA'
}

// Acceso a propiedades

// notacion por punto

console.log(person.name)

// notacion de  corchetes

console.log(person['name'])

// modificacion de propiedades

person.name = 'luis manuel'
console.log(person.name)

console.log(typeof person.age)
person.age = '37'
console.log(typeof person.age)
console.log(person.age)

// eliminar propiedades

delete person.age
console.log(person.age)

// nueva propiedad

person.email = 'luismanuel.rincon24@gmail.com'
person ['age'] = 20
console.log(person)

// metodos (funciones)

let person2 ={
    name: 'luis',
    age: 20,
    alias: 'LUMA',
    walk: function(){
        console.log('la persona camina')
    }
}

person2.walk()

// anidacion de objetos

let persona3 = {
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
console.log(persona3)
console.log(persona3.job.experiencia)
console.log(persona3.job.work)

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
            console.log(`la ${this.name} persona trabaja`)
        }
    }
}
console.log(persona3p.job.work())

// igualdad de objecs

let person4 ={
    name: 'luis',
    age: 37,
    alias: 'LUMA'
}

person ['name'] = 'luis'
console.log(person == person4)
console.log(person === person4)
console.log(person.name === person4.name)

// iteracion

for(let value in person4){
    console.log(value)
}

for(let key in person4){
    console.log(key + ': ' + person[key])
}

// funciones como objects

function personfun(name,age){
    this.name = 'luis'
    this.age = 20
}

let person5 = new personfun ('luis',20)
console.log(person5)
console.log(person5.name)
console.log(typeof person)
console.log(typeof persona5)

