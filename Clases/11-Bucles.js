/* ---BUCLES--- */

// for

for (let i = 0;i<5;i++){ // el bucle for te permite ejecutar repetidamente una cadena de codigo en base a sus parametros, una variable para iterar de valor definido, la condicion que se tendra que cumplir para que la iteracion se de, y la modificacion a la variable para llegar a su detencion.
console.log('hola!')
}
const numbers = [1,2,3,4,5,6,7,8,9,10]

// for

for (let i = 0;i<5;i++){
    console.log(`Elemento: ${numbers[i]}`) // aqui estamos haciendo que el codigo dentro del for reproduzca en la consola el valor dentro suyo con el orden numero asociado tomando el cuenta el valor del momento que tenga i
    }
for (let i = 0;i<numbers.length;i++){ // de esta manera hacemos lo mismo pero ahora la condicion para que el  bucle se repita es que el valor de iteracion sea menor a la cantidad de valores que tiene el array, esto hace que este for se ejecute hasta terminar de escribir todos los valores del array en el terminal
    console.log(`Elemento: ${numbers[i]}`)
    }

// while

i=1
while (i < 6){ // while funciona de manera distinta, este solo requiere la condicion para iterarse, por lo que usara como valor iterable una variable externa a el, y el modo por el que este dejara  de ejecutar depende de lo que hagamos con esa variable dentro del codigo

    console.log(`hola ${i}`)
    i++
}

// do while
i=1
do {  // el do while hace que el codigo contenido de la iteracion este antes de su condicion, lo que hace que este se ejecute al menos una vez antes de detenerse, en caso de que no se cumpla la condicion de iterar

    console.log(`hola ${i}`)
    i++

}while(i<6)

 i=6
do {

    console.log(`hola ${i}`)
    i++

}while(i<6)

// for of

let text = 'murcielago'

let caja = ['perro','gato','tortuga','loro','hamster']

let lista = new Set (['necronomicon','elemento','libro3','libro4','libro5'])

let base = new Map ([

    [1,'enero'],
    [2,'febrero'],
    [3,'marzo'],
    [4,'abril'],
    [5,'mayo'],
    [6,'junio'],
    [7,'julio'],
    [8,'agosto'],
    [9,'septiempre'],
    [10,'octubre'],
    [11,'noviembre'],
    [12,'diciembre']
    
    ])



for (let valor of caja){ // el for of tambien itera codigo dentro de si, pero su sintaxis cambia ya que solo pedira la cantidad de veces que va a iterarse y en estos casos estamos utilizando varias estructuras para este fin  

    console.log(valor) // aqui el for se repetira la cantidad de datos que tenga el array

}

for (let valor of lista){ // en este otro lo hara por la cantidad de datos que tenga el set

    console.log(valor)

}

for (let valor of base){ // y aqui lo hara por la cantiadad de claves o datos (clave / valor) que tenga dentro el map

    console.log(valor)

}

for (let valor of text){ // por probar podemos hacer que el for se repita por la cantidad de letras que tenga una cadena de texto

    console.log(valor)

}

// break y continue

for (let i = 0 ; i < 10 ; i++ ){ // por ultimo break y continue funcionan para saltarse una iteracion utilizando un if, y de misma manera podemos hacer con el break, solo que cuando el break se cumple la iteracion se detendra por completo

    if(i == 5){

    continue

    }else if( i == 7){
    break

    }
    console.log(i)
    
    }