let randomNumber = Math.floor(Math.random() * 100) + 1;

/*
document es un objeto JS
querySelector es un selector CSS
El método focus() está almacenada dentro de document y disponible para elementos como <label> 
*/



const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus(); //Colocar automáticamente el cursor en el campo de texto <input> tan pronto como se cargue la página


function checkGuess() {
    let userGuess = Number(guessField.value); //Establece el valor actual ingresado dentro del campo de texto
    if (guessCount === 1) { //Verifica si este es el primer intento del jugador
        guesses.textContent = "Intentos anteriores: ";
    }
    guesses.textContent += userGuess + " "; //Agrega el valor actual de userGess al final del parrafo

    if (userGuess === randomNumber) { //Verifica si la respuesta del jugador es igual al randomNumber
        lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = ""; //Borramos el contenido del cuadro de información de intentos
        setGameOver(); //Ejecutamos la función
    } else if (guessCount === 10) { //Comprueba si el intento es el último turno del jugador
        lastResult.textContent = "¡¡¡Fin del juego!!!";
        setGameOver();
    } else { //Si el jugador no acerto pero tampoco se le acabaron los intentos
        lastResult.textContent = "¡Incorrecto!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "¡El número es muy bajo!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "¡El número es muy grande!";
        }
    }

    guessCount++; //Agregamos 1 a la variable gessCount para gastar el turno
    guessField.value = ""; //Vaciamos el valor del campo de texto
    guessField.focus(); //Lo enfocamos de nuevo, listo para ingresar un nuevo valor
}

guessSubmit.addEventListener("click", checkGuess); //Argumentos: Tipo de evento "click" y código que queremos ejecutar "checkGess()"

function setGameOver() {
    //Desabilita el campo de texto
    guessField.disabled = true;
    guessSubmit.disabled = true;
    //Nuevo elemento <button>
    resetButton = document.createElement("button");
    resetButton.textContent = "Iniciar nuevo juego";
    document.body.append(resetButton);
    //Escucha de evento en el nuevo botón
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1; //Vuelve a poner gessCount en 1

    const resetParas = document.querySelectorAll(".resultParas p"); //Selecciona los parrafos dentro del <div> y crea una lista
    for (let i = 0; i < resetParas.length; i++) { //Recorre cada parrafo asignando al textcontent una cadena vacía
        resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton); //Elimita el boton de inicio

    //Habilita los elementos del formulario
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = ""; //Los vacía
    guessField.focus(); //Los enfoca

    lastResult.style.backgroundColor = "white"; //Elimina el color de fondo de lastResult

    randomNumber = Math.floor(Math.random() * 100) + 1; //Genera un nuevo número al azar para que no vuelvas a adivinar el mismo número
}
