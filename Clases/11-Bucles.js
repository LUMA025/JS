/* ---BUCLES--- */

// for

for (let i = 0;i<5;i++){

console.log('hola!')

}

const numbers = [1,2,3,4,5,6,7,8,9,10]

// for

for (let i = 0;i<5;i++){

    console.log(`Elemento: ${numbers[i]}`)
    
    }


for (let i = 0;i<numbers.length;i++){

    console.log(`Elemento: ${numbers[i]}`)
    
    }

// while

i=1
while (i < 6){

    console.log(`hola ${i}`)
    i++
}

// do while
i=1
do {

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



for (let valor of caja){

    console.log(valor)

}

for (let valor of lista){

    console.log(valor)

}

for (let valor of base){

    console.log(valor)

}

for (let valor of text){

    console.log(valor)

}

// break y continue

for (let i = 0 ; i < 10 ; i++ ){

    if(i == 5){

    continue

    }else if( i == 7){
    break

    }
    console.log(i)
    
    }