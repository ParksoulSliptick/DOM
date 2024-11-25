/*

Seleccionar el elemento h1 a traves de su clase

*/

const titulo = document.querySelector(".titulo");


/*

Mostramos el modo seleccionado

Nodo expandido -> <h1>...<h1>
Nodo abstracto -> h1.titulo

Algunos navegadores optimizan la representacion de los nodos en la consola 

*/

console.log(titulo);

/*

Objeto style

Accedemos a el usando la notacion de punto (.)

 elemento.style

El resultado en CSS Style Declaration,  es una lista de que representa todas las propiedades de estilo de un elemento

Unicamente muestra el valor de los estilos en linea declarados directamente en el elemento html

*/

console.log(titulo.style);

/*

Propiedades de estilo

Accedemos a las propiedades usando la notacion del punto (.)

 elemento.style.nombrePropiedad

 A diferencia de CSS, las propiedades en JS las escribimos usando el formato camelCase.

  CSS -> backgroung-color (kebab-case)
  JS ->  backgroungColor  (camelCase)

*/

console.log("Valores en linea" + "Color:" + titulo.style.color + "- Fondo: " + titulo.style.backgroundColor)

/*

Commit "Acceso a estilos con JavaScript"

*/

