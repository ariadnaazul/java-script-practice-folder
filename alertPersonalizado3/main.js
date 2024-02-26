function displayMessage(msgText, msgType, funcion) {
    let msgArea = document.querySelector(".msgArea");
    let panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    msgArea.appendChild(panel);

    let msg = document.createElement("p"); 
    msg.textContent = msgText; 
    panel.appendChild(msg);

    let closeBtn = document.createElement("button");
    closeBtn.textContent = "Cancelar";
    panel.appendChild(closeBtn);

    let agreeBtn = document.createElement("button");
    agreeBtn.textContent = "Continuar";
    panel.appendChild(agreeBtn);

    closeBtn.onclick = function () { //Expresamos una funcion anonima que se ejecuta para el evento oncLick sobre closeBtn
        panel.parentNode.removeChild(panel); //Utilizamos la función del DOM API para eliminar el child panel.
    };

    agreeBtn.onclick = function () {
        funcion;
    }

    if (msgType === "warning") { 
        panel.style.backgroundColor = "red";
    } else if (msgType === "info") {
        panel.style.backgroundColor = "aqua";
    } else {
        msg.style.paddingLeft = "20px";
    }


}