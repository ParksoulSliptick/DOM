/*

Metodos de navegacion

Nos permiten movernos entre los elementos relacionados del DOM

*/

/* Refeencias */

const parent = document.getElementById(`parent`)
const child = document.getElementById(`child`)
const sibling = document.getElementById(`sibling`)

// parentNode -> Devuelve el nodo padre del elemento 

console.log(child.parentNode);

// childNodes -> Devuelve la coleccion de todos los nodos hijos, incluyendo elementos, texto, comentarios

console.log(parent.childNodes);

// children -> Devuelve una coleccion de los nodos hijos que son elementos. Ignora nodos de texto o comentarios

console.log(parent.children);

//firstChild -> Devuelve el primer nodo hijo, puede ser un nodo de texto, comentario o elemento

console.log(parent.firstChild);

//firstElementChild -> Devuelve el primer nodo ijo que sea un elemento

console.log(parent.firstElementChild);

//lastChild -> Devuelve el ultimo nodo hijo, puede ser nodo de texto, comentario o elemento 

console.log(parent.lastChild);

//lastElementChild -> Devuelve el ultimo nodo hijo que sea un elemento 

console.log(parent.lastElementChild);

//nextSibling -> Devuelve el siguiente nodo hermano, puede ser nodo de texto, comentario o elemento

console.log(child.nextSibling);
console.log(sibling.nextSibling);

//nextElementSibling -> Devuelve el siguiente nodo hermano que sea un elemento 

console.log(child.nextSiblingElement);
console.log(sibling.nextSiblingElement);

// previousSibling -> Deveuelve el anterior nodo hermano, puede ser un nodo de texto, comentario o elemento

console.log(child.previousSibling);
console.log(sibling.previousSibling);

// previousSiblingElement -> Deveuelve el anterior nodo hermano que sea un elemento

console.log(child.previousElementSibling);
console.log(sibling.previousElementSibling);


