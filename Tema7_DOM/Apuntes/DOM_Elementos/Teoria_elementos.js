
/*############# El objeto del elemento #################

    En HTML DOM, el objeto Element representa un elemento HTML, como P, DIV, A, TABLE o cualquier otro elemento HTML.

    Propiedades y Métodos:
    Las siguientes propiedades y métodos se pueden utilizar en todos los elementos HTML: 
*/

appendChild()	//Adds a new child node, to an element, as the last child node
    
    //Añadir un elemento a una lista:
    const node = document.createElement("LI");
    const textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);


attributes	//Returns a NamedNodeMap of an element's attributes

    //How many attributes does the <img> element have:
    let numb = document.getElementById("myImg").attributes.length;

    //Obtenga el nombre del segundo atributo (índice 1) de un elemento <button>:
    let attr = document.getElementById("myBtn").attributes[1].name;


childNodes	//Devuelve una colección de nodos secundarios de un elemento (incluidos los nodos de texto y comentarios)

    /* DEFINICION Y USO
        La childNodespropiedad devuelve una colección (lista) de los nodos secundarios de un elemento.

        La childNodespropiedad devuelve un objeto NodeList .

        La childNodespropiedad es de solo lectura.

        childNodes[0]es lo mismo que firstChild.

    */

    //Get the <body> element's child nodes:
    const nodeList = document.body.childNodes;


children	//Devuelve una colección del elemento secundario de un elemento (excluyendo los nodos de texto y comentarios)

    /* 
        DEFINICION Y USO

        The children property returns a collection of an element's child elements.

        The children property returns an HTMLCollection object. 
        
    */

    //Cambie el fondo del segundo elemento secundario de "myDIV":
    const collection = document.getElementById("myDIV").children;
    collection[1].style.backgroundColor = "yellow";


cloneNode   //Clona un elemento

    //Copie un elemento <li> de "myList2" a "myList1":
    const node = document.getElementById("myList2").lastChild;
    const clone = node.cloneNode(true);
    document.getElementById("myList1").appendChild(clone);


firstChild	//Returns the first child node of an element

    //Devuelve el contenido HTML del primer nodo secundario de un elemento <ul>:
    document.getElementById("myList").firstChild.innerHTML;

    //Obtenga el texto del primer nodo secundario de un elemento <select>:
    let text = document.getElementById("mySelect").firstChild.text;


insertBefore()	//Inserts a new child node before a specified, existing, child node

    //Inserte un nuevo elemento <li> antes del primer elemento secundario de un elemento <ul>:
    var newItem = document.createElement("LI");       // Create a <li> node
    var textnode = document.createTextNode("Water");  // Create a text node
    newItem.appendChild(textnode);                    // Append the text to <li>

    var list = document.getElementById("myList");    // Get the <ul> element to insert a new node
    list.insertBefore(newItem, list.childNodes[0]);  // Insert <li> before the first child of <ul>



lastChild	//Returns the last child node of an element

lastElementChild   	//Returns the last child element of an element


nodeValue	//Sets or returns the value of a node

    //Obtenga el valor de nodo del primer elemento <button> en el documento:
    var x = document.getElementsByTagName("BUTTON")[0].childNodes[0].nodeValue;

parentNode	//Returns the parent node of an element
    
    //Obtenga el nombre de nodo del nodo principal de un elemento <li>:
    var x = document.getElementById("myLI").parentNode.nodeName;

parentElement	//Returns the parent element node of an element


remove()	//Removes the element from the DOM

    //Eliminar el elemento seleccionado del documento:
    var myobj = document.getElementById("demo");
    myobj.remove();


removeChild()	//Removes a child node from an element
    
    //Elimina el primer elemento <li> de una lista:
    var list = document.getElementById("myList");   // Get the <ul> element with id="myList"
    list.removeChild(list.childNodes[0]);           // Remove <ul>'s first child node (index 0)

replaceChild()	//Replaces a child node in an element

    //Reemplace un nodo de texto en un elemento <li> en una lista con un nuevo nodo de texto:
    // Create a new text node called "Water"
    var textnode = document.createTextNode("Water");

    // Get the first child node of an <ul> element
    var item = document.getElementById("myList").childNodes[0];

    // Replace the first child node of <ul> with the newly created text node
    item.replaceChild(textnode, item.childNodes[0]);
    // Note: This example replaces only the Text node "Coffee" with a Text node "Water"

