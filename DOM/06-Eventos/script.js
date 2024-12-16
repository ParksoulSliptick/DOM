
/*

Evento

Un evento es una accion o suceso que ocurre en el navegador o en un elemento DOM, puede ser iniciado por el usuario o por el sistema y pueden ser *manejados* mediante JavaScript

Manejar eventos

Significa escribir codigo que *reacciono* de cierta manera cuando algo especifico suceda, para manejar evento s es i mportante conocer algunos conceptos claves

1-. Target (Blanco)

El elemento target es ele elemento del DOM en el que ocurrira el evento. Este se encuentra dentro del objeto evento (event) y se accede mediante la propiedade event.target

2-. Event Listener (Escuchador)

El event listener es el "oido" que esta atenta a que ocurra un evento en un elemento especifico, usamos el metodo addEventListener para ecuchar eventos

3-. Trigger (Disparador)

Es simplemente el desencantado que provoca que un evento ocurra. Es la accion que realiza el usuario o el sistema para activar el evento

* Hacer clic
* Mover el raton
* Escribir en un imput

4. Event Handler (Manejador)

El event handler es la funcion que se ejecuta cada vez que ocurre el evento, con codigo JS le decimos que hace el event handler.

* Mostrar un mensaje
* Cambiar de color
* Lanzar una alerta
* ...

Sintaxis

target.eventListener(trigger  , eventHandler)

- target: elemento donde ocurre el evento
- listener: Escucha y detecta el evento
- trigger: La accion que ocurre en ele evento
- handle: La funcion que se ejecuta al ocurrir el evento


/*

Seleccionar el elemento

*/

const button = document.getElementById("button");

/*

Manejar el evento

*/

button.addEventListener("click" ,  mostrarMensaje );

/*

Definir la funcion

*/

function mostrarMensaje() {
    console.log("Le pikaste!")
}


