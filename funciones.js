//ESTRUCTURA
function hello() {
    console.log("hello");
}

hello(); //Invocar a la función despues de declararla

//Las funciones se elevan "Hoisting" por lo que podemos:
bye(); //Invocar a la función antes de declararla 

function bye() {
    console.log("bye");
}

//PARAMETROS
const myNumber = Math.random(); //Algunas fucniones no requieren parámetro
console.log(myNumber);

const myText = "I am a string";
const newString = myText.replace("string", "sausage"); //Varios parámetros se separan por comas
console.log(newString);


//Algunas funciones tienen parámetros opcionales.
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'


//Parámetros por defecto
function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!


//FUNCIONES ANONIMAS

(function () {
    alert("hello");
});


const textBox = document.getElementById("textBox");

//Funcion declarada
function logKey(event) { //Se declara la función logKey que imprime el nmbre de la tecla presionada
    console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey); //La función (o método) addEventListener recibe a logKey como parámetro.


//Los mismo con funcion anonima
textBox.addEventListener("keydown", function (event) { //La funcion necesaria para imprimir el nombre de la tecla presionada se 'expresa' como funcion anónima dentro del parámetro
    console.log(`You pressed "${event.key}".`);
});


//Funciones de flecha
//Se trata de una forma alternativa de 'expresar' funciones anónimas
textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}".`);
});

//Si la función toma un solo paármetro se puede omitir parentesis.
textBox.addEventListener("keydown", event => {
    console.log(`You pressed "${event.key}".`);
});


//Si la función contiene sólo una línea que es un return statement se pueden omitir los apartados y la palabra clave return
const cats = ["Leopardo", "Serval", "Jaguar", "Tigre", "Caracal", "León"];

//Funcion tradiciional
function toUpper(string) {
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);
console.log(upperCats);


//Función de flecha
const lowerCats = cats.map(cats => cats.toLowerCase()); //Devuelve implicitamente la expresión.
console.log(lowerCats);

//Quitamos las llaves del ejemplo anterior porque es una función de una linea.
textBox.addEventListener("keydown", event =>
    console.log(`You pressed "${event.key}".`),
);


//VARIABLES LOCALES VS GLOBALES
const x = 1; //x es una variable global

function a() {
    const y = 2; //y y z son variables locales de la funcion a() y b()
    output(y);
}

function b() {
    const z = 3;
    output(z);
}

function output(value) {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = `Value: ${value}`;
}

output(x); //Devuelve el valor de x  
//output(y); //Uncaught ReferenceError: y is not defined porque no puede acceder a variables que no son globales o no estan declaradas dentro de la función
//output(z); //Se frena la ejecusión del código

a(); //Si podemos invocar a la función a() o b() que devuelven la ejecusión de la función output() que es una función global por lo que se puede accceder a ella desde cualquier parte del código
b();


//RETORNO DE FUNCIONES
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) { //Creamos una función que retorna un número al cuadrado
    return num * num;
}

function cubed(num) { //Creamos una función que retorna un número al cubo
    return num * num * num;
}

function factorial(num) { //Creamos una función que retorna el factorial de un numero
    var x = num;
    while (x > 1) {
        num *= x - 1;
        x--;
    }
    return num;
}

input.addEventListener("change", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) { //Si el contenido ingresado no es un numero
        para.textContent = "You need to enter a number!";
    } else { //De lo contraro se asume que se ha ingresa un numero, y se imprime un texto incluyendo los resultados que retornan las funciones anteriores
        para.textContent = `${num} squared is ${squared(num)}. `;
        para.textContent += `${num} cubed is ${cubed(num)}. `;
        para.textContent += `${num} factorial is ${factorial(num)}. `;
    }
});
