// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth); //El alto y ancho coinciden con las dimensiones del navegador
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// function to generate random color

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//Constructor
function Ball(x, y, velX, velY, color, size) {
    this.x = x; //posición horizontal
    this.y = y; //posición vertical
    this.velX = velX; //velocidad horizontal
    this.velY = velY; //velocidad vertical
    this.color = color; //color
    this.size = size; //tamaño
}

//Métodos del prototipo
Ball.prototype.draw = function () {
    ctx.beginPath(); //Declara que empezamos a dibujar una forma en el canva
    ctx.fillStyle = this.color; //Define el color de la forma
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //arc traza un arco. x e y son la posición del centro size define el radio y el resto es el comienzo y el final en radianes
    ctx.fill(); //Finaliza el dibujo y rellena el area de la curva según fillStyle
};


//Actualizar los datos de la pelota
Ball.prototype.update = function () {
    if (this.x + this.size >= width) { //if verifica si la pelota ha alcanzado el borde del canva
        this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
        this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
        this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
        this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
};

Ball.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {
        var dx = this.x - balls[j].x;
        var dy = this.y - balls[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = `rgb(${random(0, 255)},${random(
            0,
            255,
          )},${random(0, 255)})`;
        }
      }
    }
  };
  




//Declaramos una variable donde guardar las pelotas
var balls = [];


//Bucle de animación
function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; //Define el fondo del canva como negro semitransparente
    ctx.fillRect(0, 0, width, height); //Dibuja un rectangulo en todo el ancho y alto del canva. Esto es para cubrir el dibujo del instante anterior antes de actualizar el nuevo dibujo. La semitransparencia permite recrear el efecto de estela

    while (balls.length < 25) { //Mientras que haya menos de 25 pelotas guardadas en la variable
        var size = random(10, 20);
        var ball = new Ball(  //Se crea una nueva pelota usando valores aleatorios
            // la posición de las pelotas, se dibujará al menos siempre
            // como mínimo a un ancho de la pelota de distancia al borde del
            // canvas, para evitar errores en el dibujo
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
            size,
        );
        balls.push(ball); //Se agrega la nueva pelota al array
    }

    for (var i = 0; i < balls.length; i++) { //Se recorre el array 
        balls[i].draw(); //Se dibuja
        balls[i].update(); // y se actualizan los datos en cada una de ellas, así se conservarán las nuevas posiciones y velocidades para el siguiente intervalo de animación
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop); //Se ejecuta la animación de nuevo
    

    /*
    cuando este método está continuamente ejecutándose y llama a la misma función, esto ejecutará la función de animación un determinado número de veces por segundo para crear una animación fluida. Esto se realiza normalmente de forma recursiva — lo que quiere decir que la función se llama a sí misma cada vez que se ejecuta, de esa manera se ejecutará una y otra vez de forma continua.
    */
}
loop(); //Llama a la función de animación



