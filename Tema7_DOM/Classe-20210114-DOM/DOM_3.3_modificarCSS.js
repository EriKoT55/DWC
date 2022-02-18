document.addEventListener("DOMContentLoaded", function(event) { 
// Documento HTML a utilizar: DOM_3.html
console.log ("Salida de DOM_3.3_modificarCSS`.js");

// -----------------------MODIFICAR CSS------------------------
// Es posible modificar el CSS de los elementos a través de los atributos style o class
// mediante el método setAttribute. Pero al ser un elemento tan importante, JS proporciona
// métodos especiales para manipular las clases CSS de un elemento.

// 1. Propiedad style
    // Los elementos poseen una propiedad llamada style que permite acceder a las 
    // propiedades CSS de un elemento. Lo que realmente hace es modificar el atributo 
    // style del elemento, modifican los valores de la misma. La idea es que style es 
    // un objeto que tiene como propiedades todas las propiedades CSS en formato
    // Camel Case (mayúsculas estilo camello).

    // Ejemplo de uso de style
    let parrafo = document.getElementsByTagName("p")[0];
    // parrafo.style.color = 'red';
    // parrafo.style.border = '1px solid black';

    // Así funciona con todas las propiedades. El problema viene si hubiéramos querido
    // modificar solo el borde inferior. La propiedad CSS para hacer esa modificación
    // se llama border-bottom (es un nombre problemático para la sintaxis anterior,
    // porque hay un guión en él). En JS los identificadores de propiedades, funciones,
    // métodos, etc, no pueden tener guiones (se confunden con la resta). Lo mismo
    // ocurre con la propiedad que modifica el color del fondo: blackground-color

    // El formato de modificación CSS explicado anteriormente es antiguo y entonces no se
    // disponía de la posibilidad de acceder a una propiedad mediante corchetes. Por eso 
    // la propiedad style contiene una propiedad por cada propiedad CSS, pero usando el 
    // formato Camel Case.

    // En el formato Camel Case, background-color se convierte en backgroundColor, 
    // border-bottom en borderBottom, text-aling en textAling y así con todas las 
    // propiedades.

    // Hoy en día, la mayoría de los navegadores aceptan el formato idéntico a CSS

    // Ejemplo de cambio del color del fondo con style
    // parrafo.style.backgroundColor = '#CCC';
    // parrafo.style["background-color"] = '#FCC';

    /*
    No obstante, hay varios problemas a tener en cuenta a la hora de utilizar style para
    modificar el CSS:
        - Manipular la propiedad de los elementos style da prioridad a cualquier otro CSS
            (ya que se modifica la propiedad style de HTML), pero no siempre es lo 
            deseable.
        - Es más fácil de mantener el código si se usan clases para aplicar CSS. 
            Especialmente, cuando queremos modificar varias propiedades CSS a la vez.
        - CSS avanza muy rápido por lo que muchas propiedades CSS ya disponibles, en
            algunos casos navegadores no lo están a través de la propiedad style de JS.
            Aunque la mayoría de navegadores se ponen al día rápido.
        - No podemos consultar a través de esta propiedad las propiedades CSS que
            tiene un elemento al cual se le ha dado formato a través de hojas de estilo
            externas.
    */

// 2. Obtener los estilos de CSS que se aplican aun elemento
    // El método getComputedStyle permite acceder a las propiedades CSS aunque se
    // encuentren en una hoja de estilos. Este método devuelve un objeto (idéntico al
    // de la propiedad style) en el que se pueden consultar las propiedades CSS que se
    // están aplicando a un elemento concreto. Este método solo permite ver las 
    // propiedades del elemento, pero no modificarlas.
    
    // Es un método del objeto window y no de los elementos en sí. Por ello, el método
    // requiere que se le pase el elemento a evaluar.

    // Ejemplo de uso de getComputedStyle
    let cssParrafo = window.getComputedStyle(parrafo);
    console.log(cssParrafo.fontFamily); // Salida: "Times New Roman"

    // Se mostrará el valor, independientemente de si esa propiedad se asignó usando la
    // propiedad style o mediante una hoja de estilos externa o mediante JS.

// 3. Manipular las clases CSS
    // Los elementos disponen de una propiedad llamada className. Mediante esa propiedad
    // podemos asignar una clase CSS a un elemento de la página o obtener la clase del
    // elemento.

    // Ejemplo de uso de className para asignar el elemento a una clase
    parrafo.className = "remarcado";
    console.log(parrafo.className); // Salida: remarcado (Si quitamos los comentarios de la línea anterior).

    // Los problemas surgen cuando un elemento tiene más de una clase asignada porque 
    // este método devuelve un string con los nombre de las clases asignadas al elemento
    // y es muy incómodo de manejar.
    
;});