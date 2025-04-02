/* ---ARRAYS--- */

// declaracion

let array=[] // de esta manera el array creado se declara vacio con cantidad de datos ilimitadas a asignar
let array2= new Array() // de esta manera el array creado se declara vacio con cantidad de datos limitadas a asignar, definida por el numero denttro de los parentesis
console.log(array)
console.log(array2)

// inicializacion

array=[1]
array2= new Array(1)
console.log(array)
console.log(array2)

array=[1,2,3,4,5]
array2= new Array(1,2,3,4,5) // sin embargo cuando se asignan varios valores en este tipo de inicializacion, sea del tipo que sea, este array pasara a comportarse como el que se inicializa con los corchetes
console.log(array)
console.log(array2)

array=['luis','manuel','rincon']
array2= new Array('luis','manuel','rincon')
console.log(array)
console.log(array2)

array=['luis','manuel','rincon',20,true]
array2= new Array('luis','manuel','rincon',20,true)
console.log(array)
console.log(array2)

array2=new Array(3) //  en el caso en el que utilizamos un array con limite definido, esta seria la manera de dar valores a cada ranura del array, y se mostraran por orden de numero ascendente
array2[0]='manuel'
array2[1]='luis'
array2[2]='rincon'
console.log(array2)

array2=new Array(3) //  si uno de los datos no poseen ningun valor, este se mostrara como vacio en su respectivo orden ascendente
array2[0]='manuel'
//array2[1]='luis'
array2[2]='rincon'
console.log(array2)

array =[]
array[2]='luis' // en este modo de incercion, el array ordenara automaticamente sus valores en orden ascendente, por lo que el valor 2 se asignara a la posicion 0, y el valor 3 a la posicion 1
//array[0]='manuel'
array[1]='rincon'
console.log(array)

// metodos comunes

array=[]
array.push('luis') // agrega un valor al final del array
array.push('manuel')
array.push('rincon')
array.push(20)

console.log(array)

array.pop() // elimina el ultimo valor del array

console.log(array)

console.log(array.pop()) // el pop en un array aparte de eliminar el ultimo valor de la lista, tambien puede devorlver ese valor eliminado para ser usado por otra funcion, como escribirlo con un console.log o darselo a una variable

// shift y unshift

array.shift() // funciona igual que el pop, solo que este elimina el primer valor de la lista

console.log(array)

array.unshift('luis','manuel','rincon') // este sirve para agregar valores al inicio del array, y se pueden agregar varios valores a la vez, como en este caso
console.log(array)

// length

array.length // este sirve para contar la cantidad de valores que hay dentro del array, y se puede usar para determinar si el array esta vacio o no, por ejemplo, si el valor es 0, el array esta vacio, si es mayor a 0, el array tiene valores dentro
console.log(array.length) // el resultado de este array es 3, por lo que tiene 3 valores dentro

// clear

array=[] // este sirve para limpiar el array
array[0] // este simplemente es otro metodo
console.log(array)

// slice

array=['luis','manuel','rincon',20,true]
array.slice(1,2) // este funciona para tomar valores en especificos de la lista por su posicion, pero tomara en cuenta solo el primer valor, y no el segundo, ya que este se considera el rango limite de la busqueda, en este caso solo devolvera el valor de  1
console.log(array.slice(1,2)) // de esta manera lo mostramos  en un console.log

// splice

array=['luis','manuel','rincon',20,true]
array.splice(1,2) // este sirve para eliminar valores buscandolos en la lista, pero el primer numero sera el inicio del conteo para eliminar valores, y segundo sera la cantidad de valores por eliminar incluido el primer valor de origen

array=['luis','manuel','rincon',20,true]
array.splice(1,0,'LUMA') // este sirve para anadir valores en lugares especificos en la lista, el primer numero sera el inicio del conteo, el segundo cuantos numeros seran afectados por el cambio, y en el tercer campo sera la informacion a agregar, al ser 0 la delimitaccion, estamos agregando la informacion luego del valor que delimita el rango
console.log(array)

array=['luis','manuel','rincon',20,true]
console.log(array)
array.splice(1,2,'LUMA') // este sirve para sustituir valores en la lista por un valor especifico, de elegir un rango de mas de 1 valor, estos se eliminaran dejando solo el nuevo valor ingresado, si en esta sentencia luego del valor a agregar continuamos con ',' podremos incluir varios valores para sustituir los antiguos en las posiciones respectivas o incluso anadir mas valores de los que se sustituyeron
console.log(array)

/* ---SETS--- */

// declaracion

let set= new Set() // este es una especie de array

// inicializacion

set=new Set('luis','manuel','rincon',20,true) // de esta manera el set solamente te dira cuantas letras tiene la palabra del listado, y aparte te las mostrara una por una
console.log(set)

set=new Set(['luis','manuel','rincon',20,true]) // mientras que con esta manera, dentro de corchetes, este funcionara como un array cualquiera, y lo  representa de manera distinta en la consola
console.log(set)

// metodos comunes

// add y delete

set.add('luismanuel.rincon24@gmail.com') // este sirve para agregar valores al final de la lista en el set, y no tiene limite de valores a agregar, por lo que se pueden agregar varios valores a la vez, como en el caso de los arrays
console.log(set)

set.delete('luismanuel.rincon24@gmail.com') // este funciona para eliminar informacion en lugares especificos de la lista, pero para eliminarlo se debe escribir el valor a eliminar dentro de la lista, es decir, no lo busca por ubicacion, sino por el valor que tiene dentro, y si no existe ese valor en la lista, no pasara nada
console.log(set)

console.log(set.delete(20)) // de esta manera el set eliminra el valor de la lista y aparte mandara una verificacion a la consola indicando que el valor existio y se elimino, de no existir el valor en un principio, devolveria un false
console.log(set)

// has

console.log(set.has('luis')) // el has sirve solo para comprobar si un valor existe dentro del set, y devolvera para true de existir o false de no existir, aparte este se puede usar fuera de un console log para darle funcion a ese valor booleano que resulta
console.log(set.has('luismanuel')) // en este caso el valor no existe, por lo que devolvera un false

// size

console.log(set.size) // este sirve para contar la cantidad de valores que hay dentro del set, y se puede usar para determinar si el set esta vacio o no, el dato que devuelve puede ser utilizado por otros procesos

// convertir un set a array

array= Array.from(set) // de esta forma podemos pasar la informacion de un set un array, manteniendo los valores y sus pociciones

// convertir un array a set

set = new Set(array) // de forma hacemos exactamente lo mismo pero de array a set

// por ultimo, la diferencia mas significativa entre los arrays y los sets, es que los sets no permiten ingresar datos repetidos, ya que es un valor unico e introducirlo de nuevo seria hacer enfasis en que ya esta enlistado

// Mapas

// declaracion

let map= new Map() // el map esta compuesto de dos elementos a diferencia de los arrays y los sets, el primero es una clave y el segundo un valor a que da acceso esa clave, estos tienen relacion diirecta
console.log(map)

// inicializacion

map=new Map([

['nombre','luis'],
['edad',20],
['apellido','rincon']

])
console.log(map) // de esta manera es que podemos ingresar informacion dentro de un map, definiendo primero su clave y luego su valor, utilizando corchetes y comas para separar los datos

// metodos y propiedades

// set

map.set('alias','LUMA') // este sirve para poder agregar nuevos datos al map, estos se apilaran al final de los datos
console.log(map)

map.set('nombre','luis manuel') // de esta manera podemos cambiar el valor de una clave ya existente
console.log(map)

// un dato importante es que en los mapas no puueden existir dos claves iguales, pero los valores que pueden tener estas claves si pueden repetirse, esto es parecido a como funciona un set

// get

map.get('nombre') // get sirve para poder extraer el valor asociado a una clave, y que esta se pueda utilizar fuera del map, como por ejemplo en un console log
console.log(map.get('nombre'))

// has

map.has('nombre') // has sirve para comprobar la existencia de una clave dentro del map, devolviendo un booleano
console.log(map.has('nombre'))

// delete

map.delete('nombre') // este sirve para borrar una clave y con ella su valor asociado
console.log(map)

// clear

map.clear() // este es simple, limpiar todas las claves y valores del mapa
console.log(map)

// keys

map=new Map([

    ['nombre','luis'],
    ['edad',20],
    ['apellido','rincon']
    
    ])

console.log(map.keys()) // esta se utiliza para mostrar todas las claves del mapa

// values

console.log(map.values()) // esta se utiliza para mostrar todas las variables del mapa

// size

console.log(map.size) // este sirve para contar la cantidad de valores que hay dentro del mapa

// entries

console.log(map.entries()) // esta nos muestra todas las claves y los valores del mapa
