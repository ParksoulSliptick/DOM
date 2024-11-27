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