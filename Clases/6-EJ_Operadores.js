/* ---EJERCICIOS:operadores--- */

// 1: Crear una variable por cada operacion aritmetica

let n1=10
console.log(n1+10)
let n2=5
console.log(n2-4)
let n3=15
console.log(n3/3)
let n4=4
console.log(n4*2)
let n5=8
console.log(n5%2)
let n6=1
console.log(n6**100)

// 2: Crear una variable por cada tipo de operacion de asignacion, que haga uso de las variables utilezadas para las operaciones aritmeticas

n1+=10
console.log(n1)
n2-=4
console.log(n2)
n3/=3
console.log(n3)
n4*=2
console.log(n4)
n5%=2
console.log(n5)
n6**=100
console.log(n6)

// 3: Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion

n1=10
n2=5
n3=15
n4=4
n5=8
n6=1

console.log(n1<n3)
console.log(n1>=n2)
console.log(n1==10)
console.log(n1!=n3)
console.log(n6<n4)

// 4: Imprime 5 comparaciones falsas con diferentes operadores de comparacion

console.log(n1>n3)
console.log(n1<=n2)
console.log(n1!=10)
console.log(n1==n3)
console.log(n6==='1')

// 5: Utiliza el operador logico and

console.log(n3>=10 && n4>=n1) //(falso)
console.log(n1===10 && (n6**100)==1)

// 6: Utiliza el operador logico or

console.log(n3<=n6 || (n5/n4)==2)

// 7: Combina ambos operadores logicos

console.log(n6<=n3 && n2!=n4 || (n3-5)+(n1+4)==15)

// 8: Anade alguna negacion

console.log(!(n3*3==30))

// 9: Utiliza el operador ternario

let tengo_Hambre=true
tengo_Hambre ? console.log('no tenngo hambre :D') : console.log('si tengo hambre .__.')

// 10: Combina operadores aritmeticos, de comparacion y logicos

console.log(n6<=n3 && n2!=n4 || (n3-5)+(n1+4)==15) // ya lo hice anteriormente \_('u')_/