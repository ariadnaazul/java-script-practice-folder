const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));

/*
Deberías ver que cuando haces clic en el botón, la caja y el video que contiene son mostrados. Pero cuando haces clic en el video, éste empieza a reproducirse pero, ¡la caja se oculta de nuevo!

El video se encuentra dentro del <div>, ya que es parte de él, por lo tanto, hacer clic en el video ejecuta ambos manejadores de eventos, ocasionando este comportamiento.
*/

//llamar al método stopPropagation() en el objeto evento dentro del manejador del evento 'click' para el elemento <video> evitará que el evento burbujee hacia la caja de más arriba. 
video.addEventListener("click", (event) => {
    event.stopPropagation();
    video.play();
});