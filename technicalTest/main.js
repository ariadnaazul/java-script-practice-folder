//Palindromos

function palindromo (text){
    let reversedText = text.split('').reverse().join('');  
     return text === reversedText;
}

console.log("Bob es un palindromo: " + palindromo("bob"));



///buscar una palabra en una frase y devolver cuantas veces aparece en ella.


function coincidencias (frase, busqueda){
    let texto_limpio = frase.toLowerCase().replace("/[,!¡?¿.-;]/gi", "");
    let resultado = 0;
    if (texto_limpio.includes(busqueda)){
        let palabras = texto_limpio.split(' ');
        let mapa = {};
        for (let palabra of palabras){
            if (mapa[palabra]) {
                mapa[palabra]++;
            } else{
               mapa[palabra]=1;  
            }
            resultado = mapa[busqueda];
        }
    }else{
        resultado = 0;
    }
    
    return resultado;

    
}

console.log(
    coincidencias("hola, soy una palabra en una frase. Palabra", "palabra")
);




//inlcudes tiene menos soporte que indexOf


//darle la vuelta a los caracteres de una cadena solo con estructuras de control, sin usar metodos

function invertir (texto){
    let invertido  ="";
    for (let letra of texto){
        invertido = letra + invertido;
         
    }
    return invertido;
}

console.log("texto invertido:", invertir("hola soy un texto invertido"));



//Dibujar un cuadrado hueco con asteriscos


function lado(numero){
    let lado = "";
    for  (let i=0 ;i<= numero; i++){
        lado+="*"
    };
    return lado;       
};


function cuadrado (numero){
    let dibujo = lado(numero) + "\n";

    let contenido= "";

    for (let i=2 ;i< numero ; i++ ){
        contenido ="*";

        dibujo += contenido +"" 
    } 


    dibujo += lado(numero);

    return dibujo;
}


console.log(lado(4));

console.log(cuadrado(4));