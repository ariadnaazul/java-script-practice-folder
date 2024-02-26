//BUCLES PARA RECORRER COLECCIONES
//Bucle for of...
const cats = ["Leopardo", "Serval", "Jaguar", "Tigre", "Caracal", "León"];

for (const cat of cats) {
    console.log(cat);
}


//Bucle map()...
function toUpper(string) {
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);


//Bucle filter()...
function lCat(cat) {
    return cat.startsWith("L");
}

const filtered = cats.filter(lCat);

console.log(filtered);

//Usando expresiones de funciones
const filter = cats.filter((cat) => cat.startsWith("L"));
console.log(filter);


//OTROS BUCLES
//Bucle estandar for...

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Ejemplo con html
const results = document.querySelector("#results");

function calculate() {
    for (let i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResult}\n`;
    }
    results.textContent += "\n¡Finalizado!";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));


//HAcer con for lo mismo que con for of
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
//Sin embargo en casos así es mejor usar for of de ser posible


//Cuando usar for y cuando for of:

const myCats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "Mis gatos se llaman ";

for (const cat of myCats) {
    myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "Mis gatos se llaman Pete, Biggles, Jasmine, "
//Esta oración no es del todo coherente o no está tan bien formulada.



//for nos permite insertar una condición para manejar a ciertos elementos, por ejemplo el último, de manera distinta.
let myFavoriteCatsFixed = "Mis gatos se llaman ";

for (let i = 0; i < myCats.length; i++) {
    if (i === myCats.length - 1) {
        // Estamos al final del arreglo
        myFavoriteCatsFixed += ` y ${myCats[i]}.`;
    } else if (i === myCats.length - 2) {
        // Estamos al final del arreglo
        myFavoriteCatsFixed += `${myCats[i]}`;
    } else {
        myFavoriteCatsFixed += `${myCats[i]}, `;
    }
}

console.log(myFavoriteCatsFixed); // "Mis gatos se llaman Pete, Biggles y Jasmine."
//Este resultado otorga una oración mejor formulada.


//Bucle while

const myCats2 = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats2 = "Mis gatos se llaman ";
 
let i = 0; //La variable se declara fuera del bucle

while (i < myCats2.length) { 
    if (i === myCats2.length - 1) { //El resto es igual
        myFavoriteCats2 += ` y ${myCats2[i]}.`;
    } else if (i === myCats2.length - 2) {
        myFavoriteCats2 += `${myCats2[i]}`;
    } else {
        myFavoriteCats2 += `${myCats2[i]}, `;
    }

    i++; //La expresión final se ejecuta despues del bucle
}

console.log(myFavoriteCats2); // "Mis gatos se llaman Pete, Biggles y Jasmine."


//Bucle do...while...
let int = 0; 

do{
    if (int%2===0){
        console.log(int);
    }
    int++
} while(int<10); //La condición se esribe fuera del bucle. Si int comenzara en 12 por ejemplo, se imprimiria aunque no cumpliese la condición.


//SALIR DE BUCLES

//Salir con break
//Ejemplo con html buscar contacto
const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
];
const para = document.querySelector(".break p");
const input = document.querySelector(".break input");
const btn = document.querySelector(".break button");

btn.addEventListener("click", () => { //Al hacer click en el boton
    const searchName = input.value.toLowerCase(); //Se crea la variable que aloja el valor ingresado en minusculas
    input.value = ""; //Se vacíia el campo de busqueda, listo para una nueva busqueda 
    input.focus(); //Se focaliza el campo de busqueda
    para.textContent = ""; //Se vacía el contenido del parrafo preexistente
    for (const contact of contacts) { //para cada uno de los elementos de la colección contacts
        const splitContact = contact.split(":"); //divide el elemento mediante la subcadena ":"
        if (splitContact[0].toLowerCase() === searchName) { //y sí el primer fragmento luego de ser pasado a minusculas es igual al valor incregado en el campo de busqueda
            para.textContent = `El número de ${splitContact[0]} es ${splitContact[1]}.`; //Escribe el siguiente parrafo.
            break; //Interrumpe el bucle para que no siga examinando los elementos de la colección en vano
        }
    }
    if (para.textContent === "") { //Si la iterancia del bucle no logró encontrar una coincidencia, por lo cual nunca escribio un parrafo
        para.textContent = "Contacto no encontrado."; //Se escribe lo siguiente
    }
});


//OMITIR INTERACIONES

//Omitir con continue

const para2 = document.querySelector(".continue p");
const input2 = document.querySelector(".continue input");
const btn2 = document.querySelector(".continue button");

btn2.addEventListener("click", () => { //Al hacer click en el boton
    para2.textContent = "Resultado: "; //El resultado se vacía
    const num = input2.value; //Se crea una variable con el numero ingresado
    input2.value = ""; //Se vacía el campo de texto
    input2.focus(); //Se focaliza
    for (let i = 1; i <= num; i++) { //Ejecutar mientras que i sea menor o igual al número ingresado
        let sqRoot = Math.sqrt(i); //Se crea una variable con la raíz cuadrada de cada número
        if (Math.floor(sqRoot) !== sqRoot) { //probamos si la raiz cuadrada es un entero comparandola con sí misma al ser redondeada al numero entero más cercano
            continue; //Si es falso este número no nos interesa, por lo que continuamos y saltamos a la siguiente iteración
        }
        para2.textContent += `${i} `; //Si el valor dio distinto a falso, entonces concatenamos su valor y lo imprimimos en un parrafo.
    }
});


//Hacer lo mismo sin continue, en este caso no se omiten iteraciones sino que solo se imprimen las que retornan true al probar la condición
//Pero puede haber casos donde sea conveniente omitir iteraciones.
/*
btn2.addEventListener("click", () => { //Al hacer click en el boton
    para2.textContent = "Resultado: "; //El resultado se vacía
    const num = input2.value; //Se crea una variable con el numero ingresado
    input2.value = ""; //Se vacía el campo de texto
    input2.focus(); //Se focaliza
    for (let i = 1; i <= num; i++) { //Ejecutar mientras que i sea menor o igual al número ingresado
      let sqRoot = Math.sqrt(i); //Se crea una variable con la raíz cuadrada de cada número
      if (Math.floor(sqRoot) === sqRoot) { //probamos si la raiz cuadrada es un entero comparandola con sí misma al ser redondeada al numero entero más cercano
        para2.textContent += `${i} `; //Si es igual imprimimos su valor
      }
    }
  });
  */

