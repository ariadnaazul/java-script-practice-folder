 //Tipos de números

let numEntero = 2;
let numFloat = 2.5;
let numBinario = 10110;
let numOctal = 37;

let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;


//Operadores aritmeticos


console.log (num1 + num3 * num2 / num4) // = num1 + [num3 * (num2 / num4)]
// Expected output: 25 

console.log (num1 % 3); 
// Expected output: 1 (3*3=9 y 10-9=1)


//Precedencia de Operadores

console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let a;
let b;

console.log((a = b = 5)); // es igual a escribir a = (b = 5);
// Expected output: 5

console.log(3 + 10 * 2); // muestra 23
console.log(3 + (10 * 2)); // muestra 23 porque los paréntesis son superfluos
console.log((3 + 10) * 2); // muestra 26 porque los paréntesis cambian el orden


//Cortocircuitos
/* 
Estan por encima que () 
a || (b * c); // evalúa primero `a`, luego produce `a` si `a` es "true"
a && (b < c); // evalúa primero `a`, luego produce `a` si `a` es "false"
a ?? (b || c); // evalúa primero `a`, luego produce `a` si `a` no es `null` ni `undefined`
a?.b.c; // evalúa primero `a`, luego produce `undefined` si `a` es `null` ó `undefined
*/


//Operadore de Incremento y Decremento

/* Postincremento: 
> numEntero++ 
> 2 //Devuelve el valor original de la variable antes de ser incrementada
> numEntero 
> 3
*/

/* Preincremento:
> ++numEntero
> 3 //Devuelve el valor de la variable incrementada
*/

/* Solo se pueden incrementar o decrementar variables declardas
> ++1
> 
*/


//Asociatividad

console.log (4 / 2 / 10); //Es lo mismo que ((4 / 2) / 10 ) porque la división es asociativa a la izquierda
// Expected output: 5

console.log (2 ** 3 ** 2); //Es lo mismo que (2 ** (3 ** 2)) porque la epotencia es asociativa a la derecha
// Expected output: 512 


//Operadores de Asignación
console.log (num1 += 5); // 15
console.log (num4 -= num2); // 20
console.log (num4 /= num2); // 1 porque a num4 ya se le restó num2 y ahora vale 20
console.log (num1 -= 5); //10 porque num1 valia 15 desde que le sumamos 5


//Operadores de comparación

let num11 = 10;
let num12 = 5*2;
let string = "10"
let num13 = 20;

console.log (num11 === num12); //true
console.log (num11 !== num12); //false
console.log (num11 == string); //true
console.log (num11 > num13); //false
console.log (num11 < num13); //true
console.log (num11*2 >= num13); //true