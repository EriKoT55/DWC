document.addEventListener("DOMContentLoaded", function(event) { 
// Documento HTML a utilizar: DOM_2_seleccionElementos.html
console.log ("Salida de DOM_2.5_seleccionPorSelectorCSS.js");

// ----------------------SELECCIÓN POR SELECTOR CSS------------------------------
// El selector más poderoso es querySelectorAll. Permite indicar, como texo, cualquier
// selector válido CSS. Si la sintaxis del selector no es correcta, entonces devolverá
// un error. Lo que devuelve, nuevamente, es una lista de elementos con aquellos que cumplan
// el selector.

// Ejemplo de uso de querySelectorAll
    // Seleccionando los elementos de la clase verdura
    let listaVerduras = document.querySelectorAll(".verdura"); // Se usa el punto delante de verdura porque hay que hacerlo en el formato CSS.
    console.log(listaVerduras); // Salida: NodeList(4) [li.verdura, li.verdura, li.verdura, li.verdura]
    
    // Seleccionamos los elementos li que están dentro de ul
    let listaElementosUlLi = document.querySelectorAll("ul li");
    console.log(listaElementosUlLi); // Salida: NodeList(10) [li.verdura, li.verdura, li.carne, li.verdura, li.carne, li.hidrato, li.hidrato, li.carne, li.verdura, li.hidrato]

    // Selecciona el primer elemento li de cada lista
    let lista1erElementoLi = document.querySelectorAll("li:first-of-type");
    console.log(lista1erElementoLi); // Salida: NodeList [li.verdura]

    // Selecciona el primer elemento li de cada lista si es de la clase verdura
    let lista1erElementoLiVerdura = document.querySelectorAll("li.verdura:first-of-type");
    console.log(lista1erElementoLiVerdura); // Salida: NodeList [li.verdura]

// Existe un método llamada querySelector (sin la palabra all) que funciona igual, pero
// no devuelve una lista, sino el primer elemento en el documento que cumpla el criterio.
// No suele ser muy habitual su uso.

// Hay que recordar que aunque el código como document.querySelectorAll("#capa17"); está
// claro que solo devuelve un elemento, este método siempre devuelve una colección de
// elementos. Es decir, acceder al elemento en cuestión implica utilizar el índice cero del
// resultado.
});