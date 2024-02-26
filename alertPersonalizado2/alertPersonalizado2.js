function displayMessage(msgText, msgType) {
    let html = document.querySelector("html");

    let panel = document.createElement("div"); //Creamos un elemento <div> y los asignamos a la variable panel
    panel.setAttribute("class", "msgBox"); //Le asignamos una clase de nombre "msgBox" al div al que referencia panel.
    html.appendChild(panel); //Añadimos el <div> que creamos como hijo del elemento <html>

    let msg = document.createElement("p"); //Creamos un elemento <p>
    msg.textContent = msgText; //Indicamos su contenido como un parametro de la función
    panel.appendChild(msg); //Lo añadimos como hijo del <div> referenciado por panel

    let closeBtn = document.createElement("button"); //Creamos un elemento <button>
    closeBtn.textContent = "x"; //Indicamos su contenido
    panel.appendChild(closeBtn); //Lo añadimos como hijo del <div> referenciado por panel

    closeBtn.onclick = function () { //Expresamos una funcion anonima que se ejecuta para el evento oncLick sobre closeBtn
        panel.parentNode.removeChild(panel); //Utilizamos la función del DOM API para eliminar el child panel.
    };

    if (msgType === "warning") { 
        msg.style.backgroundImage = "url(icons/warning.png)";
        panel.style.backgroundColor = "red";
    } else if (msgType === "chat") {
        msg.style.backgroundImage = "url(icons/chat.png)";
        panel.style.backgroundColor = "aqua";
    } else {
        msg.style.paddingLeft = "20px";
    }
}

let btn = document.querySelector("button"); //asignamos el elemento <button> del html a la variable btn
btn.onclick = function () {
    displayMessage("Your inbox is almost full — delete some mails", "warning");
}; //Llamamos a la función en el evento enclick pero no lo hacemos directamente sino dentro de una función anónima, ya que si llamamos a una función y utilizamos los () la función se ejecuta automáticamente y no espera al evento onclik ya que está en ambito inmediato


//Aqui un ejemplo usando función de flecha
/*
const btn = document.querySelector('button');
btn.addEventListener('click', () => displayMessage('Brian: Hi there, how are you today?', 'chat'));
*/