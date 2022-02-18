//##############   Property / Method	Description ################/

// SE ACCEDE A AL OBJECT DOCUMENT tecleando simplemente:
document. //### Cualquiera de los siguientes ###/

activeElement	//Returns the currently focused element in the document

body  //Sets or returns the document's body (the <body> element)

    //Obtener el contenido HTML de un documento:
    const myBody = document.body.innerHTML;

    //Cambiar el color de fondo de un documento:
    document.body.style.backgroundColor = "yellow";

    //Cambiar el <body> de un documento (sobrescribir todo el contenido existente):
    document.body.innerHTML = "Some new HTML content";


createAttribute()	//Creates an attribute node

    // Create a class attribute:
    const att = document.createAttribute("class");

    // Set the value of the class attribute:
    att.value = "democlass";

    // Add the class attribute to the first h1:
    const h1 = document.getElementsByTagName("H1")[0];
    h1.setAttributeNode(att);   


createElement()	//Creates an Element node

    //Crea un elemento <p> y añádelo al documento:
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    document.body.appendChild(para);


createTextNode()	//Creates a Text node

    //Cree un elemento <h1> con un nodo de texto:
    const h1 = document.createElement("h1");
    const textNode = document.createTextNode("Hello World");
    h1.appendChild(textNode);

forms	//Returns a collection of all <form> elements in the document

    //Número de elementos <form> en el documento:
    let num = document.forms.length;

    //Obtenga la identificación del primer elemento <form>:
    let id = document.forms[0].id;

   // Obtenga el contenido HTML del elemento <form> con id="myCarForm":
   let html = document.forms.namedItem("myCarForm").innerHTML;

getElementById()	//Returns the element that has the ID attribute with the specified value

getElementsByClassName()	//Returns a HTMLCollection containing all elements with the specified class name

getElementsByTagName()	//Returns a HTMLCollection containing all elements with the specified tag name

head	//Returns the <head> element of the document

images	//Returns a collection of all <img> elements in the document

links	//Returns a collection of all <a> and <area> elements in the document that have a href attribute

    //Coge todos los links del documento
    document.links

normalize()	//Removes empty Text nodes, and joins adjacent nodes

querySelector()	//Returns the first element that matches a specified CSS selector(s) in the document

    //Obtenga el primer elemento <p>:
    document.querySelector("p");

    //Obtenga el primer elemento con class="example":
    document.querySelector(".example");

querySelectorAll()	//Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document

    //Selecciona todos los elementos con class="example":
    document.querySelectorAll(".example");

scripts	//Returns a collection of <script> elements in the document

title	//Sets or returns the title of the document

URL	//Returns the full URL of the HTML document
