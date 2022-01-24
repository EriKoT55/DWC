document.addEventListener("DOMContentLoaded", function (event) {

    let contenidoLiPrompt;
    let num;
    let seguirNum = true;
    let seguirP = true;

    do {
        contenidoLiPrompt = prompt("Ponga el contenido del nuevo paragrafo: ");
        if ( contenidoLiPrompt != "") {
            seguirP = false;
        } else if (contenidoLiPrompt == null) {
            seguirP = false;
        } else {
            seguirP = true;
        }
    } while (seguirP == true);

    do {

        num = parseInt(prompt("Ponga un numero del 1 al 10: "));

        if (num >= 1 && num <= 10 && !isNaN(num)) {
            seguirNum = false;
        } else if (num == null) {
            seguirNum = false;
        } else {
            seguirNum = true;
        }

    } while (seguirNum == true);

    //console.log(typeof num);
    //  Creo el nuevo li
    let nuevoLi = document.createElement("li");

    // Creo nodo del contenido del li
    let contenidoLi = document.createTextNode(contenidoLiPrompt);

    // Añado el nodo contenido al li
    nuevoLi.appendChild(contenidoLi);

    //cojo el ol por su tag name o sea ol 
    let ol=document.getElementsByTagName("ol");

    // li anterior
    let anteriorLi=document.getElementsByTagName("li")[num-1];
    
    //Introduzco li despues del anterior, ol[0] por que al coger por tagName me devuelve
    // un array de una sola posición si no lo pono peta, ya que no selecciono nada 
    // en la lista
    ol[0].insertBefore(nuevoLi,anteriorLi);


});