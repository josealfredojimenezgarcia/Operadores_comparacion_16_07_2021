
// let a=4, b=4;

// let a='Dios te Ama'
// let b='Dios te Ama'

// console.log(`El a= ${a}  es mayor o igual b= ${b}`, a>=b)
// console.log(`El a= ${a}  es menor que b= ${b}`, a<b)
// console.log(`El a= ${a}  es menor o igual b= ${b}`, a<=b)
// console.log(`El a= ${a}  es igual b= ${b}`, a==b)
// console.log(`El a= ${a}  es mayor b= ${b}`, a>b)

// console.log('');
// console.log('');

// console.log(`El a= ${a}  es igual b= ${b}`, a==b)
// console.log(`El a= ${a}  es menor o igual que b= ${b}`, a<=b)
// console.log(`El a= ${a}  es menor  b= ${b}`, a<b)
// console.log(`El a= ${a}  es mayor b= ${b}`, a>b)
// console.log(`El a= ${a}  es mayor igual b= ${b}`, a>=b)

// console.log('');
// console.log('');

// console.log(`El a= ${a}  es diferente b= ${b}`, a!=b)

// //identico en tipo de dato y dato; deben ser iguales el tipo de dato y el dato.
// console.log(`El a= ${typeof a}  es identico  b= ${typeof b}`, a===b)

// console.log(`El a= ${typeof a}  es igual  b= ${typeof b}`, a==b)

// // NO Diferente tiene que variar un dato  o tipo de dato para que sea true
// console.log(`El a= ${typeof a}  NO diferente  b= ${typeof b}`, a !== b)


let a=8, b=20

console.log('');
console.log('');

console.log(`El a= ${a}  es igual b= ${b}`, a==b)// PARA este caso se evalua el contenido de las varbiales 8 NO ES IGUAL  20. Resultado es FALSE.

console.log(`El a= ${a}  es menor o igual que b= ${b}`, a<=b) // PARA este caso se evalua el contenido de las varbiales 8 SI ES MENOR  O IGUAL 20. Se cumple una de las dos condiciones de la comparación de los contenidos de las variables. Resultado es TRUE.
console.log(`El a= ${a}  es menor  b= ${b}`, a<b) // Para este caso se evalua el contenido de las varbiales 8 NO ES MAYOR  20. Resultado es TRUE.
console.log(`El a= ${a}  es mayor b= ${b}`, a>b) // PARA este caso se evalua el contenido de las varbiales 8 NO ES MAYOR  20. Resultado es FALSE.

console.log(`El a= ${a}  es mayor igual b= ${b}`, a>=b) // esta evalua el contenido de las varbiales 8 NO ES MAYOR O IGUAL QUE 20. Resultado es FALSE.

console.log('');
console.log('');

console.log(`El a= ${a}  es diferente b= ${b}`, a!=b) // Este evalúa el contenido de las variables las cuaels son diferentes sus contenidos ('datos'): 8 es diferente de 20. TRUE.

//identico en tipo de dato y dato; deben ser iguales el tipo de dato y el dato.
console.log(`El a= ${typeof a}  es identico  b= ${typeof b}`, a===b) //Para este caso a y b  el contenido de las variables son diferentes, pero el tipo de dato es igual 'number'. varía contenido de las variables: 8 no es igual a 20. falla una de las dos condiciones. Resultado: FALSE.

console.log(`El a= ${typeof a}  es igual  b= ${typeof b}`, a==b) //Para este caso los datos que contienen las variables a y b son diferentes, es decir no son iguales. tipos de datos son iguales 'number'. esta comparación valora el contenido de la variable. resultado FALSE.

// NO Diferente tiene que variar un dato  o tipo de dato para que sea true
console.log(`El a= ${typeof a}  NO diferente  b= ${typeof b}`, a !== b)  //Se cumple que es verdad debido que uno de los dos datos es diferente, para este caso es diferente, es decir a=8 y b=20, da resultado TRUE.