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

Metodo de propiedad 

Asignar el valor de la propiedad de estilo en el elemento seleccionado seleccionado

  elemento.style.nombrePropiedad = "Valor"

  Forma mas directa y legible de asignar propiedades
  Solo admite asignar propiedades con formato camelCase

*/

titulo.style.color = "orange"
titulo.style.backgroundColor = "gray"

console.log("Valores asignados con JavaScript" + "Color:" + titulo.style.color + "- Fondo: " + titulo.style.backgroundColor)


/*

Metodo setProperty()

Asignamos una propiedad de estilo al elemento seleccionado

  elemento.style.setPrperty(nombrePropiedad, valor, important)

  Mas flexible y poderoso
  Las propiedades se escriban en formato kebab-case
  Parametro "important" es opcional

*/

titulo.style.setProperty("color", "darkblue");
titulo.style.setProperty("backgroundColor", "gray", "important");

console.log("Valores asignados con setProperty" + "Color:" + titulo.style.color + "- Fondo: " + titulo.style.backgroundColor)

/*

Eliminar valores de propiedad

Usamos el metodo de propiedad y le definimos una cadena de texto vacia

  elemento.style.nombrePropiedad = ""

  Esto termina los valores previamente definidos en JS y en los estilos en linea 

*/

titulo.style.color = "";
titulo.style.backgroundColor = "";

/*

Metodo removeProperty()

Esto elimina la propiedad de estilo

  elemento.style.removeProperty(nombrePropiedad)

*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("backgroundColor");

