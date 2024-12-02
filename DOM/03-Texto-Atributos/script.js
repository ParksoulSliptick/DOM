/*

Seleccionamos los elementos por su id

*/


const titulo = document.getElementById("title");
const lista = document.getElementById("list");

/*

Los mostramos por consola

*/

console.log(titulo)
console.log(lista)

/*

innerText

Devuelve un "string" del contenido visible dentro de de un elemento

elemento.innerText

Excluye los elementos ocultos
Excluye los 
*/

console.log(">>> Con innerText")
console.log(titulo.innerText)
console.log(lista.innerText)

/*

textContent

Devuelve un "string" de lcontenido viisble dentro de un elemento 

    elemento.textContent

    Incluye los espacios
    Incluye los elementos ocultos
    Excluye las etiquetas html

*/

console.log(">>> Con textContent")
console.log(titulo.textContent)
console.log(lista.textContent)

/*

innerHTML

Devuelve un "string" con la estructura interna del elemento seleccionado

 elemento.innerHTML

*/

console.log(">>> Con innerHTML")
console.log(titulo.innerHTML)
console.log(lista.innerHTML)

/*

Modificar el contenido con innerText

Asignamos el valor al elemento seleccionado

elemento.innerText = "string"

*/

titulo.textContent = "Mis Pokemones";
lista.textContent = "Cargando...";

/*

Modificar el contenido con innerText

Asignamos el valor al elemento seleccionado incluyendo las etiquetas HTML

elemento.textContent = "<tag>...</tag>"

*/

titulo.innerHTML = "¡Amigos <span>Pokemones</span>!";
lista.innerHTML = "<li>Snorlax</li> <li>Meow</li>";


/*

getAttribute()

Devuelve el valor del elemento que indicamos

elemento.getAttribute(atributo)

*/

const enlace = document.getElementsByTagName("a");

console.log(enlace[0].getAttribute("href"))

/*

removeAttribute()

Eliminar el valor del atributo  de um elemento

    elemento.removeAttribute(atributo)

*/

enlace[0].removeAttribute("href");

console.log(enlace[0].getAttribute("href"));


/*

setAttribute()

Asigna un atributo y un valor a un elemento

    elemento.setAttribute(atributo, valor)

    Sobreecribir un atributo ya declarado
    Crear un nueno atributo y un valor

*/

enlace[0].setAttribute("href", "https://www.youtube.com/watch?v=rQuv8b-IYt0&list=LL&index=3");

console.log(enlace[0].getAttribute("href"));

/* Antes */

console.log(enlace[0].getAttribute("target"));

enlace[0].setAttribute("target", "_blank");

/* Despues */

console.log(enlace[0].getAttribute("target"));
