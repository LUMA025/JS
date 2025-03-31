NewArray = [1,2,3,4,5]
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

// sintaxis en arrays

let [arrayvalu0, arrayvalu1, arrayvalu2, arrayvalu3, arrayvalu4, arrayvalu5] = NewArray
console.log(arrayvalu0)
console.log(arrayvalu1)
console.log(arrayvalu2)
console.log(arrayvalu3)
console.log(arrayvalu4)
console.log(arrayvalu5)

// sintaxis de arrays con valores predeterminados

let [arrayvalu6 = 0, arrayvalu7 = 0, arrayvalu8 = 0, arrayvalu9 = 0, arrayvalu10 = 0, arrayvalu11 = 0] = NewArray
console.log(arrayvalu6)
console.log(arrayvalu7)
console.log(arrayvalu8)
console.log(arrayvalu9)
console.log(arrayvalu10)
console.log(arrayvalu11)

// ignorar elementos array

let [arrayvalu12 = 0, , , arrayvalu15 = 0] = NewArray
console.log(arrayvalu12)
console.log(arrayvalu15)

// sintaxis en objects

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// sintaxis de arrays pero con valores predeterminados

let {name2, age2, alias2, email = `luismanuel.rincon@gmail.com`} = person
console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

// sintaxis objects con nuevos nombres de variables

let {alias: alias3, name:name3, age:age3} = person
console.log(alias3)
console.log(name3)
console.log(age3)

// objetos anidados

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

let {name:name4, job:{name: jobname}} = persona3
console.log(name4)
console.log(jobname)

// Propagacion (...)

// sintaxis para arrays

let NewArray2 = [...NewArray]
let Newarray3 = [...NewArray, `esto`, `es`, `nuevo`]
console.log(Newarray3)

// combinacion de arrays

let Newarray4 = [...NewArray2,...Newarray3]
console.log(Newarray4)

// sintaxis objects

let person4 = {...person}
console.log(person4)
let person5 = {...person, ...person4}
console.log(person5)
let person6 = {...person, Sexo: `Hombre`}
console.log(person6)