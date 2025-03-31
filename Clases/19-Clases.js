/* ---Clases---  */

class Person {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis:

let person = new Person(`Luis`, 20, `LUMA`)
console.log(person)
console.log(typeof person)

// Valores por defecto:

class DefaultPerson {
    constructor(name = `Sin nombre`, age = `sin edad definida`, alias = `Sin alias`){
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let defaultperson = new DefaultPerson()
console.log(defaultperson)
defaultperson = new DefaultPerson(`Luis manuel`, 20, `LUMA025`)
console.log(defaultperson)

// Acceso a propiedades:

console.log(defaultperson.alias)
console.log(defaultperson [`alias`])
defaultperson.alias = `LUMA`
console.log(defaultperson.alias)

// Funciones en clases:

class Person2 {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
    Walk() {
        console.log(`La persona camina`)
    }
}
let person2 = new Person2(`Luis`, 20, `LUMA`)
person2.Walk()

// Propiedades privabas:

class PrivatePerson {
    #bank
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}
let person3 = new PrivatePerson(`LUIS`, 21, `luma`, `24072004`)
console.log(person3.bank)
person3.bank = `20040724`
console.log(person3.bank) // the cake is a lieeeeeeee

// Getters y Setters:

class GetSetPerson {
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name(){
        return this.#name
    }
    set bank(Newbank){
        this.#bank = Newbank
    }
    get bank(){
        return this.#bank
    }
}
let person4 = new GetSetPerson(`luis`, 20, `LUMA`, `24072004`)
console.log(person4)
console.log(person4.name)
person4.bank = `new acount`
console.log(person4.bank)

// Herencia:

class Animal{
    constructor(name){
        this.name = name
    }
    sound(){
        console.log(`Sonido generico`)
    }
}

class Perro extends Animal{
    sound(){
        console.log(`woof`)

    }
    Correr(){
        console.log(`El perro corre`)
    }
}

class Pez extends Animal{
    constructor(name, size){
        super(name)
    }
    Nadar(){
        console.log(`El pez nada`)
    }
}

let Mipez = new Pez(`Dory`, 30)
let Miperro = new Perro(`Doky`)
Miperro.Correr()
Miperro.sound()
Mipez.Nadar()
Mipez.sound()

// Metodos estaticos:

class Matoperations{
    static sum(a, b){
        return a + b

    }
}
console.log(Matoperations.sum(10, 10))