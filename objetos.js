//Declarar una variable de tipo objeto
var persona = {};

//Se puede inicializar despues de declararse
persona = {
    nombre: { //Objetos dentro de objetos. Esto se llama espacio de nombre secundario (sub-namespace)
        pila: 'Bob', //persona.nombre.pila -> expected output 'Bob'
        apellido: 'Smith'
    },
    edad: 32,
    genero: "masculino",
    intereses: ["música", "esquí"],
    bio: function () {
        alert(
            `${this.nombre.pila} ${this.nombre.apellido} tiene ${this.edad} años. Le gusta ${this.intereses[0]} y ${this.intereses[1]}.`,
        );
    },
    saludo: function () {
        alert("Hola, Soy " + this.nombre.pila + ". "); //this es igual al objeto donde se esta escribiendo el código
    },
};

const myDataName = 'height';
const myDataValue = '1.75m';
persona[myDataName] = myDataValue;

//Obtener miembros de objetos (buscado o recuperar)
//Notación de corchetes
console.log(persona["edad"]);
//Notación de punto
console.log(persona.genero);

//Establecer miembros de objetos (actualizar)
persona.edad = 45;
persona["nombre"]["apellido"] = "Cratchit";

console.log(persona["edad"]);
console.log(persona["nombre"]["apellido"]);
console.log(persona.nombre.apellido);

//Establecer miembros de objetos (crear nuevos)

persona["ojos"] = "avellana";
persona.despedida = function () {
    alert("¡Adiós a todos!");
};

console.log(persona["ojos"]);

//Establecer dinamicamente nombres y valores de los miembros
var nombrePerzonalizado = "altura";
var valorPerzonalizado = "1.75m";
persona[nombrePerzonalizado] = valorPerzonalizado;
console.log(persona["altura"]);



//PROTOTIPOS

//Función constructor
function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        // First define a string, and make it equal to the part of
        // the bio that we know will always be the same.
        var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
        // define a variable that will contain the pronoun part of
        // the second sentence
        var pronoun;

        // check what the value of gender is, and set pronoun
        // to an appropriate value in each case
        if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
            pronoun = 'He likes ';
        } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
            pronoun = 'She likes ';
        } else {
            pronoun = 'They like ';
        }

        // add the pronoun string on to the end of the main string
        string += pronoun;

        // use another conditional to structure the last part of the
        // second sentence depending on whether the number of interests
        // is 1, 2, or 3
        if (this.interests.length === 1) {
            string += this.interests[0] + '.';
        } else if (this.interests.length === 2) {
            string += this.interests[0] + ' and ' + this.interests[1] + '.';
        } else {
            // if there are more than 2 interests, we loop through them
            // all, adding each one to the main string followed by a comma,
            // except for the last one, which needs an and & a full stop
            for (var i = 0; i < this.interests.length; i++) {
                if (i === this.interests.length - 1) {
                    string += 'and ' + this.interests[i] + '.';
                } else {
                    string += this.interests[i] + ', ';
                }
            }
        }

        // finally, with the string built, we alert() it
        alert(string);
    };
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
};

//Crear una instancia de un objeto
let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

/* 
Cada instancia de un objeto hereda las propiedades y métodos del objeto prototipo del constructor
Y tambien las del objeto prototipo del objeto prototipo del constructor
En este caso Objeto() es el pbjeto prototipo del objeto prototipo del constructor
los métodos y propiedades no se copian de un objeto a otro en la cadena del prototipo. Ellos son accedidos subiendo por la cadena
*/

//La propiedad __proto__ contiene el objeto prototipo del constructor del objeto
console.log(person1.__proto__);
console.log(person1.__proto__.__proto__);

//Comprobar las propiedades de los prototipos existentes
console.log(Person.prototype);
console.log(Object.prototype);

//prototipo de los objetos globales
console.log(String.prototype); //Comprobamos todos los metodos y propiedades disposnibles para el prototipo String, los cuales son heredados por las instancias de este objeto prototipo, cada vez que definimos una variable de tipo string, esta es una instancia del objeto String que hereda los miembros disponibles, como lenght.


//Create()
var person2 = Object.create(person1); //Lo que hace create() es crear un nuevo objeto a partir de un objeto prototipo específico. Aquí, la person2 se crea utilizando la person1 como objeto prototipo. 

console.log(person2.__proto__);


//Propiedad constructor
//las propiedades definidas en la propiedad prototype (cuyo valor es un objeto que contiene una propiedad constructor que apunta a la función constructor original) de una función de constructor se hacen disponibles a todas las instancias de objetos creadas utilizando el constructor

console.log(person1.constructor); //apunta a la función Persona()


//Se puede crear una instancia accediendo al constructor como un método de un objeto instanciado
let person3 = new person1.constructor("Karen", "Stephenson", 26, "female", [
    "playing drums",
    "mountain climbing",
]);

//Esto funciona. No se necesita usarlo con frecuencia, pero puede ser realmente útil cuando se quiera crear una instancia nueva y por alguna razón no se tenga disponible fácilmente una referencia al constructor original.


//Devolver el nombre del objeto del que el constructor es una instancia
person1.constructor.name;



//Modificar prototipos
//Al modificar la propiedad prototype del constructor toda la cadena de herencia se ha actualizado dinámicamente;automáticamente hace que este nuevo método esté disponible en todas las instancias del objeto creadas desde el constructor
Person.prototype.farewell = function () {
    alert(this.name.first + " ha dejado el edificio. ¡Adiós por ahora!");
};
//Esto funciona mejor con métodos que con propiedades. Es mejor definir las propiedades dentro del constructor


//De hecho, un patrón bastante común para la mayoría de definiciones de objetos es declarar las propiedades dentro del constructor, y los métodos en el prototipo. Esto hace el código más fácil de leer, ya que el constructor sólo contiene las definiciones de propiedades, y los métodos están en bloques separados.

// Constructor con definiciones de propiedades

function Test(a, b, c, d) {
    // definiciones de propiedad
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

// Definición del primer método

Test.prototype.x = function () {
    if (this.a > this.b) {
        console.log("a superó a b");
    } else {
        console.log("a no lo consiguó");
    }
};

// Definición del segundo método

Test.prototype.y = function () { 
    let max = Math.max(this.c, this.d);
    return max;
};

// etc.

//Crear una instancia de un objeto
let test1 = new Test(1, 5, 10, 3);

console.log(test1.y());
test1.x();




