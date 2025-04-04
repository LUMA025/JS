/* ---EJERCICIOS: Clases--- */

// 1: Crea una clase que reciba dos propiedades:

class clas {
    constructor(Name, Age){
        this.Name = Name
        this.Age = Age
    }
}
let newclas = new clas ('Luis Manuel', 20)
console.log(newclas)

// 2: Añade un metodo a la clase que utilice las propiedades:

class clas2 {
    constructor(Name, Age){
        this.Name = Name
        this.Age = Age
    }
    Descripcion() {
        console.log(`Tu nombre es: ${this.Name}. Y tienes ${this.Age} anos.`)
    }
}
let newclas2 = new clas2 ('Luis Manuel', 20)

// 3: Muestra los valores de las propiedades e invoca a la funcion:

console.log(newclas2)
newclas2.Descripcion()

// 4: Añade un metodo estatico a la primera clase:

class clas3 {
    constructor(Name, Age){
        this.Name = Name
        this.Age = Age
    }
    static Sum (a, b){
        return a + b;
    }
}

// 5: Haz uso del metodo estatico:

console.log(clas3.Sum(10, 5))

// 6: Crea una clase que haga uso de herencia:

class Descripcionpersonal{
    constructor(name){
        this.name = name
    }
    presentacion() {
        console.log(`Hola, mi nombre es ${this.name}`)
    }
}
class Descripciongeneral extends Descripcionpersonal{
    estado() {
        console.log('todo esta bien')
    }
}
let Yo = new Descripciongeneral('Luis')
Yo.presentacion()
Yo.estado()

// 7: Crea una clase que haga uso de getters y setters:

class getsetclas {
    #Name
    #Age
    constructor(Name, Age){
        this.#Name = Name
        this.#Age = Age
    }
    get Name() {
        return this.#Name
    }
    set Age(Newage){
        this.#Age = Newage
    }
    get Age() {
        return this.#Age
    }
}
let getsetnewclas = new getsetclas ('Luis Manuel', 20)
console.log(getsetnewclas.Name)
getsetclas.Age = 21
console.log(getsetclas.Age)

// 8: Modifica la clase con getters y setters para que use propiedades privadas:

// Perdon, me adelante.

// 9: Utiliza los get y set y muestra sus valores:

// Tambien me adelante con este

// 10: Sobrescribe un metodo de una clase que utilice herencia:

class Descripcioncambiada extends Descripcionpersonal{
    presentacion() {
        console.log('Hola, mi nombre es manuel')
    }
    estado() {
        console.log('todo esta bien')
    }
}
let Yocambiado = new Descripcioncambiada()
Yocambiado.presentacion()
