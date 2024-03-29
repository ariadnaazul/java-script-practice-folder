//Strings
let cadena1 = "Esto es una cadena de texto con comillas dobles";
let cadena2 = 'Esto es una cadena de texto con comillas simples';
let mensaje = `Hola, mi nombre es ${cadena2} y tengo ${cadena1} años.
y puedo saltar de renglon`;

console.log (cadena1);
console.log (cadena2);


var cadena3 = 'Would you eat a "fish supper"?';
var cadena4 = "I'm feeling blue.";

console.log (cadena3);
console.log (cadena4);

// var cadena5 = 'I've got no right to take my place...'; //Error

//Concatenación
var one = "Hello, ";
var two = "how are you?";
var joined = one + two;

console.log(joined);

console.log (joined+ " I've missed you.")


//Números vs Strings

let num1 = 2;
let cadena5 = " dias";

console.log (num1 + cadena5); //2 dias. Convierte el número en string.


//Convertir strings en numeros
var myString = "123";
var myNum = Number(myString);

/*
> typeof myNum;
> "number"
> myNum
> 123
*/

//Convertir numeros en strings
var myFalseNum = String (myNum);

/*
> typeof myFalseNum;
> "string"
> myFalseNum
> "123"
*/

//Convertir numeros en strings mediante el método toString().
var myOtherString = myNum.toString(); 

/*
> typeof myOtherString;
> "string"
> myOtherString
> "123"
*/

//Metodos con cadenas
//Cada declaración es una instancia del objeto string. En java script todo es un objeto. Asi que cada string hereda metodos.

//Método .lenght
console.log (one.length); //7
console.log (one[0]); // H
console.log (two[two.length-1]); // ?


//Método .indexOf
console.log (two.indexOf("how")); // 0 porque devuelve la posicion del caracter inicial.
console.log (two.indexOf("juice")); // -1 porque no se encuentra
console.log (two.indexOf("how")!==-1); // true porque how si se encuentra por lo que el resultado de indexOf es diferente a -1

//Podemos usar indexOf para saber si una subcadena esta presente dentro de otra cadena.
function encontrado (){
    if (two.indexOf("how")!==-1) { //Si el indexOf de how en la variable two retorna distinto a -1 
        console.log ("Se encontró how"); //la consola dice que how se ha encontrado
    }else{
        console.log ("No se encontró how"); //De lo contrario la consola dice que how no se ha encontrado, ya que si indexOf retorna -1 es porque la subcadena how no se encuentra dentro de two.
    }
}

encontrado (); //Exportamos la funcion

//Método .slice
console.log (two.slice(4,11)); //are you
//El primer parámetro es la posición del caracter en la que comenzar a extraer, y el segundo parámetro es la posición del caracter posterior al último a ser extraído.
console.log (two.slice(4)); //are you?
//Para extraer todos los caracteres restantes de una cadena después de cierto caracter, no necesitas incluir el segundo parámetro.


//Metodos to lower y upper case
console.log(one.toLowerCase()); 

console.log(one.toUpperCase());


//Método .replace
console.log(two.replace("how are you?", "are you ok?")); // are you ok? 

console.log(two); //how are you? La variable no se actualiza

