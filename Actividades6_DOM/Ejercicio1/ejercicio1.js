document.addEventListener("DOMContentLoaded", function (event) {


    /* Creo el nodo P y el NodoText hago que contenido sea hijo de paragrafo 
     * y despues lo muestro siendo paragrafo hijo del div(info) */
    // PARA MOSTRAR CONTENIDO EN EL DIV
    // a
    let numA = document.getElementsByTagName("a");

    let paragrafo1 = document.createElement("p");
    let contenidoL = document.createTextNode("Numero de links: " + numA.length);

    paragrafo1.appendChild(contenidoL);

    document.getElementById("info").appendChild(paragrafo1);

    /***********************************************************************/

    // p
    let numP = document.getElementsByTagName("p");

    let paragrafo2 = document.createElement("p");
    let contenidoP = document.createTextNode("Numero de paragrafos: " + numP.length);

    paragrafo2.appendChild(contenidoP);

    document.getElementById("info").appendChild(paragrafo2);

    /***********************************************************************/

    // penultimo a
    let penultimo = numA.length-2;
    let penultimoA = numA[penultimo];

    let paragrafo3 = document.createElement("p");
    let contenido_penult_a = document.createTextNode("El penúltimo enlace apunta a: " + penultimoA);

    paragrafo3.appendChild(contenido_penult_a);

    document.getElementById("info").appendChild(paragrafo3);

/***********************************************************************/

    // ultimo a
    let ultimo = numA.length-1;
    let ultimoA = numA[ultimo];

    let paragrafo4 = document.createElement("p");
    let contenido_ult_a = document.createTextNode("El último enlace apunta a: " + ultimoA);

    paragrafo4.appendChild(contenido_ult_a);

    document.getElementById("info").appendChild(paragrafo4);

/***********************************************************************/    
    /* NO FUNCIONA */
    // links a http://prueba/

    let linksPrueba=numA["http://prueba/"]

    let paragrafo5 = document.createElement("p");
    let contenidoLinkPrueba = document.createTextNode("El último enlace apunta a: " + linksPrueba.length);

    paragrafo5.appendChild(contenidoLinkPrueba);

    document.getElementById("info").appendChild(paragrafo5);

    /*document.getElementById("info").innerHTML="<p>"+numA.length+"</p>";*/

});