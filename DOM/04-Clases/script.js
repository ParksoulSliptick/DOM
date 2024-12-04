/*

Accedemos al primer item de la lista 

*/

const botanas = document.getElementsByTagName(`li`);


/*

Propiedad classlist

Accedemos a la lista de clases que tiene un elemento

 elemento.classList

 Devuelve un DOM Token List (Listado de clases en el DOM) en tipo array

*/ 

console.log(botanas[0].classList);
console.log(botanas[0].classList[0]); 

/*

 Para agregar clases usamos el metodo add

  elemento.classList.add(clase)

  Nombre de la clase pasa como string entre "" o ''
 
*/

botanas[1].classList.add("bg-lightpink");

/*

Verificr si existe una clkase en un elemento con el metodo contains ()

elemento.classList.contains(clase)

Devuelve true si existe la clase
Devuelve false si no existe la clase

*/

console.log( botanas[2].classList.contains("botana") )
console.log( botanas[2].classList.contains("bg-lightblue") )

/*

Para eliminar una clase usamos el metodo remove()
 
elemento.classList.remove(clase)

La clase pasa como un string entre "" o ''

*/

botanas[3].classList.remove("bg-lightpink");
botanas[3].classList.remove("botana");
