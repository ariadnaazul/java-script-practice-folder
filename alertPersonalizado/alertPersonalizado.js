function displayMessage() {
    let html = document.querySelector("html");

    let panel = document.createElement("div"); //Creamos un elemento <div> y los asignamos a la variable panel
    panel.setAttribute("class", "msgBox"); //Le asignamos una clase de nombre "msgBox" al div al que referencia panel.
    html.appendChild(panel); //Añadimos el <div> que creamos como hijo del elemento <html>

    let msg = document.createElement("p"); //Creamos un elemento <p>
    msg.textContent = "This is a message box"; //Indicamos su contenido
    panel.appendChild(msg); //Lo añadimos como hijo del <div> referenciado por panel

    let closeBtn = document.createElement("button"); //Creamos un elemento <button>
    closeBtn.textContent = "x"; //Indicamos su contenido
    panel.appendChild(closeBtn); //Lo añadimos como hijo del <div> referenciado por panel

    closeBtn.onclick = function () { //Expresamos una funcion anonima que se ejecuta para el evento oncLick sobre closeBtn
        panel.parentNode.removeChild(panel); //Utilizamos la función del DOM API para eliminar el child panel.
    };

}

displayMessage(); //Llamamos a la función
let btn = document.querySelector("button"); //asignamos el elemento <button> del html a la variable btn
btn.onclick = displayMessage; //Llamamos a la función en el evento enclick
