const btn = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => { //Este ejemplo utiliza una función anonima de flecha
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}); //El método recibe dos parámetros, el evento que debe detectar y la fucnión que se ejecutara


//Tambien es válido crear una funcion declarada manejadora con su propia formula
function changeBackground() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
//Ambas funciones funcionan de la misma forma


//REMOVIENDO DETECTORES
btn.removeEventListener("click", changeBackground); //Anula la declaración anterior

//AbortSignal
const controller = new AbortController();

btn.addEventListener(
    "click",
    () => {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    },
    { signal: controller.signal },
); // se pasa una AbortSignal a este manejador

controller.abort(); // remueve cualquier manejador de evento asociado con este controlador.
//Para programas pequeños y simples, limpiar los rastros de manejadores de eventos sin utilizar resulta innecesario. Sin embargo, para programas más complejos, puede traer mejoras de eficiencia


//OBJETOS EVENTO
//Esta función cambia el color del botón en sí
function bgChange(e) { //Por convención se usa: e, event o evt
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol; //La propiedad target del objeto evento siempre es una referencia al elemento sobre el cual ocurrió el evento
    console.log(e);
}

btn.addEventListener("click", bgChange);


//Evitar comportamiento por defecto con event
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") { //Si no se ha rellenado alguno de los campos
    e.preventDefault(); //Previene el envio por defecto
    para.textContent = "¡Necesitas completar ambos campos!"; //Imprime un mensaje
  }
});


//BURBUJEO DE EVENTOS o event bubbling
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `Hiciste clic en un elemento ${e.currentTarget.tagName}\n`;
}

const container = document.querySelector("#container"); 
container.addEventListener("click", handleClick); //Agregamos un manejador para el evento click en el padre del <button> y funciona de la misma manera

//Si agregamos manejadores de evento al boton y al body. El click del boton se lanza primero, seguido por el click en el padre <div> y luego en el padre de este <body>
//Para describir esta situación, decimos que el evento burbujea hacia arriba 
const button = document.querySelector(".onMe");

//document.body.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);


//Captura de eventos
//En este caso, el orden de los mensajes está invertido: el manejador de evento del <body> se lanza primero, seguido del manejador del <div> y por el último el manejador del <button>:
const output2 = document.querySelector("#output2");
function handleClick(e) {
  output2.textContent += `Hiciste clic en un elemento ${e.currentTarget.tagName}\n`;
}

const container2 = document.querySelector("#container2");
const button2 = document.querySelector(".onMe2");

//document.body.addEventListener("click", handleClick, { capture: true });
container2.addEventListener("click", handleClick, { capture: true });
button2.addEventListener("click", handleClick);

//Por defecto, casi todos los manejadores de eventos están registrados en la fase de burbujeo, lo cual tiene sentido la mayoría de veces. Pero puede ser util pasarlo a captura


//Delegación de eventos
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

//Gracias al burbujeo el cambio de color sucede primero sobre <p> luego sobre <div> y luego sobre #container
const container3 = document.querySelector("#container3");
container3.addEventListener(
  "click",
  (event) => (event.target.style.backgroundColor = bgChange()),
);
container3.addEventListener("click", bgChange);



//Esta porción de código burbujea hasta el div, por lo que el container queda excluido
const div = document.querySelector(".tile");
div.addEventListener(
  "click",
  (event) => (event.target.style.backgroundColor = bgChange()),
);
div.addEventListener("click", bgChange);

