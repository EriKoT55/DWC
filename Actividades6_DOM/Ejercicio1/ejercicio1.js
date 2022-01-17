document.addEventListener("DOMContentLoaded", function (event) {

    //CREACION DE VARIABLES
    let numP = document.getElementsByTagName("p");
    let numA = document.getElementsByTagName("a");

    /* Creo el nodo P y el nodo Text hago que contenido sea hijo de paragrafo 
     * y despues lo muestro */
    let paragrafo = document.createElement("p");
    let contenido = document.createTextNode("Numero de paragrafos: " + numP.length);

    paragrafo.appendChild(contenido);

    document.getElementById("info").appendChild(paragrafo);
    /******************************/

    document.getElementById("info").innerHTML="<p>"+numA.length+"</p>";
 
});