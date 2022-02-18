document.addEventListener("DOMContentLoaded", function(event) { 
// Documento HTML a utilizar: DOM_3.html
console.log ("Salida de DOM_3.1_propiedadTextContent`.js");

// -----------------------PROPIEDAD TEXTCONTENT------------------------
// La propiedad textContent de un elemento permite obtener y modificar el texto que 
// contiene ese elemento. Hay que tener en cuenta que un elemento puede tener dentro más
// elementos y que esta propiedad obtendrá el texto de todos ellos.

// Ejemplo de uso de textContent para mostrar el contenido de un elemento
console.log(document.getElementById("pSol").textContent);
/* Salida:
    El Sol, una estrella de tipo espectral G2 que contiene más del 
    99,85% de la masa del sistema. Con un diámetro de 1400000Km, se compone de un 
    75% de hidrógeno, un 20% de helio y un 5% de oxígeno, hierro y otros elementos.          
*/

console.log(document.getElementById("pPlanetas").textContent);
/* Salida:
    Los planetas, divididos en planetas interiores (también llamados terrestres o 
    telúricos) y planetas exteriores o gigantes. Entre estos últimos 
    Júpiter y Saturno se denominan gigantes gaseosos,
    mientras que Urano y Neptuno suelen nombrarse gigantes helados. Todos los 
    planetas gigantes tienen a su alrededor anillos.
*/

// Vemos que dentro del elemento pSol hay otro elemento de tipo strong y su texto
// aparece  también en el resultado a la vez que la propia etiqueta strong desaparece
// del resultado. Es decir, solo recoge el texto interior (junto con el resto del texto)
// pero no las etiquetas.

// Ejemplo de uso de textContent para modificar el contenido de un elemento
// document.getElementById("pSol").textContent = 'Soy el <strong>Sol</strong>'

// Si se observa el resultado del último ejemplo, veremos que aunque hemos indicado que
// la palabra Sol se encuentra dentro de las etiquetas  strong, estas no funcionan, se
// toman de forma literal. La razón es que textContent tiene capacidad para modificar el
// texto de un elemento, pero no los elementos interiores.

});