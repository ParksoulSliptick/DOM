/*

Obtenemos un elemento de referencia

Este es el nodo de HTML donde vamos a crear un nuevo elemento

*/

const movies = document.getElementById ("movies");

/*

Crear un nuevo elemento usamos createElement

document.createElement(tipo.Elemento)

El tipo de elemento pasa como string "" o ''
Se debe guardar en una variable o constante

*/
const newMovie = document.createElement("li")

/*

Para agregar el elemento al DOM desde la referencai usamos el metodo append()

elementoReferencia.append(nuevoElemento)

El nuevo elemento no pasa como string

*/


movies.append(newMovie)

/*

Agregamos texto al nuevo elemento con innerText

elemento.innerText = valor

valor pasa como string "" o ''

*/

newMovie.innerText = "Transformers";


/*

Agregamos las clases al nuevo elemento con el metodo add

elemento.classList.add(clase)

La clase pasa como string
El metodo acepta mas de un parametro separandolos con comas ,

*/

newMovie.classList.add("list-item , bg-two")

/*

Reto agregamos un quinto elemento

*/


