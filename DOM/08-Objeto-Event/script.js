/*

Objeto event

EL OBJETO REPRESENTA UN SUCESO QUE OCURRE EN EL NAVEGADOR, como un click, pulsar una tecla o el movimiento del mouse y proporciona informacion 
sobre las propiedades y metodos para manejarlo

Para aceder al objeto event (e) se pasa automsticamente como un argumento a la funcion manejadora.

Sintaxis

function funcionManejadora(event) {
// Codigo a ejecutar...
console.log(event) // Muestrra la lista de propiedades y metodos.
}

Propiedades del objeto event:

type: devueleve el tipo de evento
target: devuelve el elemento donde ocurre el evento
timeStamp: devuelve la marac de tiempo en milisegundos desde la carag de la pagina

code: devuelve el codigo de la tecla
key: devuelve el valor de la tecla presionada 

clientX: devuelve la posicion horizontal de puntero del mouse en relacion a la ventana del navegador
clientY: devuelve la poicion vertical del puntero del mouse en relacion con la ventana del navegador

*/

const button = document.getElementsByClassName("button");

/*console.log(button[0]);*/

button[0].addEventListener("click" , mostrarObjetoEvento);

/*Accedemos al objeto evento*/

function mostrarObjetoEvento(event) {
 console.log(event);
 console.log(event.type);
 console.log(event.target);
 console.log(event.timeStamp);
 console.log(event.target.innerText);
}

document.addEventListener("keydown" , function(e)
{
    console.log(e);
    console.log(e.type);
    console.log(e.code);
    console.log(e.key);
});

document.addEventListener("mousemove", (e) => {
    console.log(e.type);
    console.log("Cord x :" + e.clientX + "Cord Y" + e.clientY); 
});




