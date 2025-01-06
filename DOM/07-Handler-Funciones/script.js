/*

Handler-Funciones

El handler en un evento es una funcion que se ejecuta cuando el evento ocurre

Hay tres formas de escribir la funcion handler

1.Como una funcion externa
2.Como una funcion anonima
3.Como una funcion flecha

Fncion externa:

Esta funcion se escribe por fuera del evento y se pasa como argumento el addEventListener

function funcionManejadora(){
    // Codigo a ejecutar
  }

  elemento.addEventListener (tipoEvento , handler)

  Funcion Anonima

  Esta funcion se escribr dentro del evento y no tiene nombre

  elemento.addEventListener(tipoEvento , function(){ // Codigo a ejecutar } );

  Funcion Flecha

  Esta funcion se escriben dentro del evento, no tiene nobre, pero es mas concisa

  elemento.addEventListener(tipoEvento , () => { // Codigo a ejecutar } )

  Cuando el codigo que se ejecuta tiene mas de 1 linea se debe escrbir entre las llaves
  Si el codigo que se ejecuta solo tiene 1 linea, se pueden omitir las llaves



*/

const externa = document.getElementById("externa")
const anonima = document.getElementById("externa")


/*Funcion externa*/

function funcionExterna() {
    console.log("Click en el boton externa!")
};

externa.addEventListener('click', funcionExterna);

/* Funcion anonima */

anonima.addEventListener('click', function(){
    console.log('Click en el boton anonimo')
});

/* Funcion flecha */

flecha.addEventListener('click', () => console.log('Click en el boton flecha'));


