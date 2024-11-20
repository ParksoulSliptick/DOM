/*

DOM

Organiza los elementos del documento en "nodos" e un arbol jerarquico

Nodo -> es el elemnto individual de nuestro documento

Tipos de nodo

1. NODO DE DOCUMENTO
2. NODO DE ELEMENTO
3. NODO DE ATRIBUTO
4. NODO DE TEXTO
5. NODO DE COMENTARIO

*/

/*Nodo de documento

Este nodo representa el documento completo de html, incluye el contenido de desde la "raiz" - root, hata los elementos hijos

Para acceder usamos

-> document

*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);


/*

Nodo de elemento

Para seleccionar nodos de elementos usamos 

getElementsByTagName("etiqueta")

Se escribe despues del 
*/


/*

let title = document.getElementsByTagName
("p");

console.log(title.length)
*/


/*

Nodo de atributo

Son los nodos qu accedemos a traves de su clase o de su id 

getElementById("etiqueta")
getElementByClassName("etiqueta")


querySelector("nombreSelector")
querySelectorAll("nombreSelector")

*/

/*

let title = document.getElementById ("title");

console.log(title.innerText)
console.log(title.id)
console.log(title)

let texts = document.getElementsByClassName("paragraph")

console.log(texts);
console.log(texts[0].textContent);
console.log(texts[1].textContent);

*/


// let titulo = document.querySelector("h1"); // Tag 
let titulo = document.querySelector("#title");// Id
//let titulo = document.querySelector(".title"); //Class

console.log(titulo)

//let parrafos = document.querySelectorAll("p");//Tag
//let parrafos = document.querySelectorAll("#paragraph");//Id
let parrafos = document.querySelectorAll(".paragraph");//Class

console.log(parrafos)

/*

Nodo de Texto

Son los elementosa de texto de contenido e las etiquetas de html

.innerText
.textContent

*/

let subtitle = document.querySelector(".subtitle");

console.log(subtitle.innerText);
console.log(subtitle.textContent);

/*
Nodos de comentario

Tienen un valor de 8 dentro del DOM

*/

let comentario = document.COMMENT_NODE;

console.log(comentario);