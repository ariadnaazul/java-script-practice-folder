//if statement
if (1 < 3) {
    console.log("1 mayor que 3");
}


//if statement sin llaves
if (2 < 3) console.log("2 mayor que 3"); //No recomendado


//if else statement
if (3 < 3) {
    console.log("3 mayor que 3");
} else {
    console.log("3 no es mayor que 3");
}


//if else statement sin llaves
if (4 < 3) console.log("4 mayor que 3"); //No recomendado
else console.log("4 no es mayor que 3");


//else if statement - encadenamiento
let seleccionar = document.querySelector(".clima1 select");
let parrafo = document.querySelector(".clima1 p");

seleccionar.addEventListener("change", establecerClima);

function establecerClima() {
    let eleccion = seleccionar.value;

    if (eleccion === "soleado") {
        parrafo.textContent =
            "El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.";
    } else if (eleccion === "lluvioso") {
        parrafo.textContent =
            "Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.";
    } else if (eleccion === "nevando") {
        parrafo.textContent =
            "Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.";
    } else if (eleccion === "nublado") {
        parrafo.textContent =
            "No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.";
    } else {
        parrafo.textContent = "";
    }
}


//if else anidado
function establecerClima() {
    let eleccion = seleccionar.value;
    let temperatura = 88;

    if (eleccion === "soleado") { //if anidado
        if (temperatura < 86) {
            parrafo.textContent =
                "Está a " +
                temperatura +
                " grados afuera — agradable y soleado. Vamos a la playa, o al parque, y comer helado.";
        } else if (temperatura >= 86) {
            parrafo.textContent =
                "Está a " +
                temperatura +
                " grados afuera — ¡QUÉ CALOR! Si deseas salir, asegúrate de aplicarte bloqueador solar.";
        }

    } else if (eleccion === "lluvioso") {
        parrafo.textContent =
            "Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.";
    } else if (eleccion === "nevando") {
        parrafo.textContent =
            "Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.";
    } else if (eleccion === "nublado") {
        parrafo.textContent =
            "No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.";
    } else {
        parrafo.textContent = "";
    }

}


//Operadores Lógicos
//AND: todas las condiciones se cumplen
if (1<3 && 2>3) {
    console.log ("verdadero");
} else{
    console.log("falso");
}
//Expected output: falso

//OR: al menos una condición se cumple
if (1<3 || 2>3) {
    console.log ("verdadero");
} else{
    console.log("falso");
}
//expected output: verdadero

//NOT: niega todo
if (!(1<3 || 2>3)) {
    console.log ("verdadero");
} else{
    console.log("falso");
}
//Expected output: falso


//switch statement
let select = document.querySelector(".clima2 select");
let para = document.querySelector(".clima2 p");

select.addEventListener("change", setWeather);

function setWeather() {
  let choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "Afuera hoy hace sol y es agradable. ¡Usa pantalones cortos! Ve a la playa o al parque y tómate un helado.";
      break;
    case "rainy":
      para.textContent =
        "Afuera llueve; llévate un impermeable y un paraguas y no te quedes fuera mucho tiempo.";
      break;
    case "snowing":
      para.textContent =
        "La nieve está cayendo, ¡está helada! Lo mejor es quedarse en casa con una taza de chocolate caliente o ir a construir un muñeco de nieve.";
      break;
    case "overcast":
      para.textContent =
        "No llueve, pero el cielo está gris y sombrío; Podría cambiar en cualquier momento, así que lleva un impermeable por si acaso.";
      break;
    default:
      para.textContent = "";
  }
}

//Operador ternario
let select3 = document.querySelector(".tema select");
let html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select3.onchange = function () {
  select3.value === "black"
    ? update("black", "white")
    : update("white", "black");
};

//Podría hacerse lo mismo con if else statement, pero a veces un operador ternario es más simple.
/*
select3.onchange = function () {
    if (select3.value === "black"){
      update("black", "white");
    } else {
      update("white", "black");
    }
  };
*/