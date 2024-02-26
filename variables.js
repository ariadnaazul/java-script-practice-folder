//INICIALIZACIÓN DE VARIABLES
//Las variables se pueden inicializar en la misma linea en la que se declaran, pero también puede hacerse en lineas separadas.

let name = "Ariadna";
let age; 

age = 23;

//Las variables declaradas con var se pueden inicializar antes de declararse ya que la declaración se va a elevar de todas formas.
weight = "57";
var weight;


//ELEVACIÓN DE VARIABLES (HOISTING)

//Las variables declaradas con var se elevan, o sea que su declaración es movida al inicio de la ejecusión, no así sus valores.

console.log(pais); //Undefined
var pais ="Argentina";
console.log(pais); //Argentina

// Mismo error ya que aunque la variable fue declarada antes de la primera solicitud, su valor no fue inicilaizado.
var localidad;
//console.log(localidad); //Undefined
localidad ="Gonzalez Catán";
console.log(localidad); //Gonzalez Catan


/*
let y const no se elevan, por lo que...
No se puede acceder a una variable let o constante const si todavía no fue declarada e inicializada.
Ademas...Este error frena la ejecusión del código y lo que este debajo no se ejecutará
*/

//console.log(provincia); // can't access lexical declaration 'provincia' before initialization
let provincia ="Buenos Aires";
console.log(provincia); //Buenos Aires


//Las funciones tambien pueden elevarse al igual que las variables declaradas con  var.

saludar(); // Salida: ¡Hola!
function saludar() {
  console.log("¡Hola!");
}


//SOBREESCRIBIR VARIABLES
var color = "rojo";
console.log(color); //rojo

var color = "azul"
console.log(color); //azul

/*
La consola devuelve ambos console.log
Pero si le preguntamos directamente por color devuelve "azul" ya que var permite sobreescribir variables y volver a declararlas
*/

let dia = "Lunes";
console.log(dia);

//let dia = "Martes";
console.log(dia); //Uncaught SyntaxError: redeclaration of let dia

/*
Let no se puede volver a declarar.
Esto no solo frena la ejecusión sino que el código completo no se ejecuta
*/


//Aunque las variables let no se pueden volver a declarar si se puede actualizar su valor.
dia = "Miercoles";
console.log(dia); //Miercoles


//TIPOS DE VARIABLES

let myNumber = 500; //Number
let myOtherNumber = "500"; //String
/*
>typeof myNumber = number
>typeof myOtherNumber = string
*/

let test = 6 < 3; //Boolean
/*
>test
>false
*/

let myFruitArray = ["apple", "orange", "peach"]; //Array
/*
>myFruitArray [0]
>apple
*/

let dog = { name: "Spot", breed: "Dalmatian" }; //Objeto
/*
>dog.name
>"Spot"
*/


