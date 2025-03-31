/* ---Operadores--- */

// Operadores aritmeticos

let A=10
let B=5

console.log('valor A: '+A)
console.log('valor B: '+B)

console.log(A+B) //suma simple
console.log(A-B) //resta simple
console.log(A/B) //division simple
console.log(A*B) //multiplicacion simple

console.log(A%B) //restante de la division
console.log(A**B) //elevar numero A por numero B (exponentes)

A++ //Para incrementar numeros de 1 en 1
console.log(A) 

B-- //Para disminuir numeros de 1 en 1
console.log(B) 

// Operadores de asignacion

let v1=5
console.log(v1)
v1+=10
console.log(v1)
v1-=10
console.log(v1)
v1*=10
console.log(v1)
v1/=10
console.log(v1)
v1**=10
console.log(v1)
v1%=10
console.log(v1)

// Operadores de comparacion
let C=4
let D=5
console.log(C<D) // verdadero si C es menor que D
console.log(C>D) // verdadero si C es mayor que D
console.log(C<=D) // verdadero si C es menor o igual que D 
console.log(C>=D) // verdadero si C es mayor o igual que D
console.log(C==D) // verdadero si C es lo mismo que D
console.log(C==4) // verdadero si C tiene el mismo valor que el numero
console.log(C=='4') // verdadero si C tiene un numero igual al numero en caracteres
console.log(C===D) // verdadero si C tiene el mismo numero y tipo de dato que D
console.log(C===4) // verdadero si C tiene el mismo numero y tipo de dato que el valor de al lado
console.log(C==='4') // verdadero si C tiene el mismo numero y tipo de dato que el valor de al lado
console.log(C!=D) // verdadero si C es distinto que D
console.log(C!=4) // verdadero si C es distinto al valor de al lado
console.log(C!==4) // verdadero si C es distinto en valor o tipo al valor de al lado
console.log(C!=='4') // verdadero si C es distinto en valor o tipo al valor de al lado

// lo siguiente funciona de manera que java interpreta que el numero 1 y 0 conservando su valor en codigo binario, por tanto, 1 sera true, y 0  sera false

console.log(1==true) // 1 es verdadero, por lo que es true
console.log(1==false) // 1 es verdadero, por lo que es false
console.log(0==true) // 0 es falso, por lo que es false
console.log(0==false) // 0 es falso, por lo que es true

// Truthy values o valores verdaderos

/* 
-todos los numeros negativos y positivos salvo 0
-booleano verdadero
-todas las cadenas de texto salvo las vacias
*/

// Falsy values o valores falsos

/* 
0
0n (bigint)
null
undefined
booleano falso
NaN
Cadenas de texto vacias
*/

// Operadores logicos

console.log(5<10 && 10<15) // si ambas comparaciones son verdaderas, sera verdadera, de lo contrario, si una o ambas son falsas el resultado sera falso
console.log(5>10 && 10<15) // esto sera falso por la primera comparacion
console.log(5<10 && 10>15) // esto sera falso por la segunda comparacion
console.log(5>10 && 10>15) // esto sera falso por ambas comparaciones

console.log(5<10 || 10<15) // or en cambio dara verdadero siempre y cuando alguna de las dos o ambas sean verdaderas
console.log(5>10 || 10<15) // esta sera verdadera por la segunda comparacion
console.log(5<10 || 10>15) // esta sera verdadera por la primera comparacion 
console.log(5>10 || 10>15) // esta sera falsa por que ambas son falsas

console.log(!(5>10 && 10>15)) // con esta secuencia con la exclamacion antes de las comparaciones, se declarara lo contrario al resultado de las comparaciones
console.log(!(5<10 && 10<15)) // esta dara falso, por que invirtio el resultado correcto de las comparaciones

// Operadores ternarios

//los operadores ternarios funcionaran con ? y :, se agregara una variable de valor booleano, de ser cierto, se ejecutara la sentencia entre el ? y el :, si es falso, se ejecutara la sentencia despues de :

const itscold=true
itscold ? console.log('si hay frio') : console.log('no hay frio') // aqui dara verdadero por que el valor de la variable es true, de lo contrario escribiria el opuesto