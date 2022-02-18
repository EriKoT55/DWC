
/* EL OBJETO Attr
En el DOM HTML, el objeto Attr representa un atributo HTML.

Un atributo HTML siempre pertenece a un elemento HTML.

El objeto NamedNodeMap
En el DOM de HTML, el objeto NamedNodeMap representa una colección desordenada de nodos de atributos de elementos.

Se puede acceder a los nodos en un NamedNodeMap por nombre o por índice (número). 
*/

name	//Returns an attribute's name

value	//Sets or returns an attribute's value

getAttribute()	//Returns the specified attribute value of an element node

let value = document.getElementById("myId").getAttribute("class");


getAttributeNode()	//Returns the specified attribute node

//Obtenga el valor del nodo de atributo de clase de un elemento <h1>:
var elmnt = document.getElementsByTagName("H1")[0];
var attr = elmnt.getAttributeNode("class").value;

removeAttribute()	//Removes a specified attribute from an element

    //Elimina el atributo de clase de un elemento <h1>:
    document.getElementsByTagName("H1")[0].removeAttribute("class");


setAttribute()	//Sets or changes the specified attribute, to the specified value
    
    //Agregue el atributo de clase con el valor de "democlass" a un elemento <h1>:
    document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");

