/* ---EJERCICIOS: Desestructuracion y propagacion--- */

NewArray = [1,2,3,4,5]
let person = {
    name: `luis`,
    age: 20,
    alias: `LUMA`
}

// 1: Usa desestructuracion para extraer los primeros elementos de un array:

let [Value1, Value2, Value3] = NewArray
console.log(Value1)
console.log(Value2)

// 2: Usa desestructuracion en un array y asigna un valor predeterminado a una variable:

let [Value4 = 0, Value5 = 0, Value6 = 0, Value7 = 0, Value8 = 0, Value9 = 0] = NewArray
console.log(Value9)

// 3: Usa una desestructuracion para extraer dos propiedades de un objeto:

let {name, age} = person
console.log(name)
console.log(age)

// 4: Usa desestructuracion para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombres diferentes:

let {name: Name, age: Age} = person
console.log(Name)
console.log(Age)

// 5: Usa desestructuracion para extraer dos propiedades de un objeto anidado:

let person1 = {
    name: `luis`,
    age: 20,
    Trabajo: {
        Name: 'programador',
        Exp: '1'
    }
}
let {name: name2, Trabajo:{Name: Trabajoname, Exp: TrabajoExp}} = person1
console.log(Trabajoname)
console.log(TrabajoExp)

// 6: Usa propagacion para combinar dos arrays en uno nuevo:

let NewArray2 = [6,7,8,9,10]
let NewArray3 =[...NewArray, ...NewArray2]
console.log (NewArray3)

// 7: Usa propagacion para crea una copia de un array:

let NewArray4 = [...NewArray3]
console.log(NewArray4)

// 8: Usa propagacion para combinar dos objetos en uno nuevo:

let person2 = {...person, ...person1}
console.log(person2)

// 9: Usa propagacion para crear una copia de un objeto:

let person3 = {...person}
console.log(person3)

// 10: Combina desestructuracion y propagacion:

let superperson = {...person3, ...person1}
let {name: supername, age: superage, Trabajo:{Trabajo: supertrabajo, Exp: superexp}} = superperson
console.log(supername, superage, supertrabajo, superexp)