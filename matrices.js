//Matrices
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ["tree", 795, true]; //Pueden alvergar cualquier tipo de dato.

console.log(sequence);
console.log(random);


//Cambiar valores de elementos
let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];

console.log(shopping.length); //5
console.log(shopping[1]); //milk

shopping [1] = "butter"; //cambia el valor del elemento en la posicion 1
console.log(shopping[1]); //butter


//Matriz multidimensional
let multi2 = ["tree", 795, [0, 10, 20, 30]];
console.log (multi2 [2] [2]); //20 

let multi3 = ["tree", 795, [0, 10, 20, [35, 36, 37]]];
console.log (multi3 [2] [2] [1]); //Undefined. Solo funciona hasta dos niveles.


//Métodos de matrices

//Método .split()
// Toma como parámetro el caracter que quieres separar de la cadena, y devuelve las subcadenas entre el separador como elementos en una matriz.
let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArray = myData.split(",");

console.log (myData); //Devuelve un string
console.log (myArray); //Devuelve un array con cada elemento
console.log (myArray[myArray.length - 1]); //Devuelve el último elemento del array

//Método .join()
//Une elementos de una matriz colocando de por medio el parametro dado.
let myNewString = myArray.join(",");
console.log (myNewString);

//Método .toString
//Convierte el contenido de un array en un unico string, a diferencia de .join NO permite establecer el valor del elemento separador.
let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log (dogNames.toString());


//Método .push
//Agrega uno o varios elementos al final del array
let fruits = ["apple", "strawberry", "banana"]
console.log (fruits);
fruits.push("kiwi");
console.log (fruits);
fruits.push("coco", "peach");
console.log(fruits);

//Método .pop
//Elimina el último elemento del array
let moreFruits = ["orange", "grape", "lime", "lemon"];
console.log (moreFruits);

//El elemento eliminado se puede guardar en una variable
let lastOne = moreFruits.pop(); //la variable lastOne guarda el elemento eliminado.
console.log (lastOne); //"lemon"

console.log (moreFruits); //["orange", "grape", "lime"];
moreFruits.pop(); 
console.log(moreFruits);  //["orange", "grape"];

lastOne += ", " + moreFruits.pop(); //concatena los valores 
console.log(lastOne); //lemon grape


//Método .unshift
//Agrega uno o varios elementos al principio del array
let ciudades = ["Neuquen", "Bariloche", "Mendoza"];
console.log (ciudades); //[ "Neuquen", "Bariloche", "Mendoza" ]
ciudades.unshift("Rawson");
console.log (ciudades); //[ "Rawson", "Neuquen", "Bariloche", "Mendoza" ]

//Método .shift
//Elimina el primer elemento del array
let firstCity = ciudades.shift(); //La variable firstCity guarda el elemento eliminado.
console.log (firstCity); // "Rawson"
console.log (ciudades); //[ "Neuquen", "Bariloche", "Mendoza" ]

//-----------------------------------------------------------------------

//Operadores rest y spread

const spreadArray = [1, 2, 3, 4];

//spread permite a un elemento iterable ser expandido
const newSpreadArray = [...spreadArray];  
console.log(newSpreadArray);

const invocaionArray = [spreadArray]
console.log(invocaionArray);


//siempre que utilice rest en un   objeto desestructurado, el operador rest producirá un objeto de propiedades.

const {primero, segundo, ...otraInfo} = {primero: 1, segundo: 2, tercero: 3, cuarto: 4};

console.log(otraInfo)


//structuresClon para copias profundas.

const clon = structuredClone(spreadArray)
console.log(clon);