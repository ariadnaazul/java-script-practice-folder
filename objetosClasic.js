//OOP Clasica
class Person { //Declara una clase Person
    name; //Declara una propiedad name

    constructor(name) { //Declara un constructor
        this.name = name; //Inicializa la propiedad
    }

    introduceSelf() { //Declara un método
        console.log(`¡Hola!, soy ${this.name}`);
    }
}

const gil = new Person("Gil");

gil.introduceSelf(); // ¡Hola!, soy Gil

//Omitir el constructor
//En caso de que no necesites algún tipo de inicialización, puedes omitir al constructor, en este caso un constructor por defecto es generado.

class Animal {
    sleep() {
        console.log("zzzzzzz");
    }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'


//Herencia
class Professor extends Person { //Extends indica la herencia
    teaches; //Propiedad de Professor

    constructor(name, teaches) { //El constructor toma un nuevo parámetro o argumento
        super(name); //Hereda la inicialización de la clase superior
        this.teaches = teaches; //Inicializa la nueva propiedad
    }

    introduceSelf() { //Sobreescribe el método pra professor
        console.log(
            `Mi nombre es ${this.name}, yo seré tu profesor de ${this.teaches}`,
        );
    }

    grade(paper) { //Agrega un nuevo método
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

const walsh = new Professor("Walsh", "Psicología");
walsh.introduceSelf(); // 'Mi nombre es Walsh, yo seré tu profesor de Psicología'

walsh.grade("mi tarea"); // una calificación aleatoria


//Encapsulamiento
//Propiedades privadas
class Student extends Person {
    #year; //Propiedad privada (empiezan con #)

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(
            `¡Hola! me llamo ${this.name} y estoy en el año ${this.#year}.`,
        );
    }

    canStudyArchery() {
        return this.#year > 1;
    }
}

const summers = new Student("Summers", 2);

//Podemos crear un objeto Student que puede acceder a la propiedad #year internamente, sin embargo, si algún código que se encuentre afuera de la clase intenta acceder a la propiedad #year, el navegador lanzará un error:
summers.introduceSelf(); // ¡Hola! me llamo Summers y estoy en el año 2.
summers.canStudyArchery(); // true

//summers.#year; // SyntaxError (Error de sintaxis)

//Métodos privados
//Solo pueden ser llamados por los propios métodos del objeto
class Example {
    somePublicMethod() {
        this.#somePrivateMethod(); //Método privado
    }

    #somePrivateMethod() {
        console.log("¿Me llamaste?");
    }
}

const myExample = new Eaxmple();

myExample.somePublicMethod(); // '¿Me llamaste?'

//myExample.#somePrivateMethod(); // SyntaxError (Error de Sintaxis)
