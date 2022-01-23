document.addEventListener("DOMContentLoaded", function(event) { 
    let contenidoLiPrompt;
    let num;
    let seguirNum = true;
    let seguirP = true;

    do {
        contenidoP = prompt("Ponga el contenido del nuevo paragrafo: ");
        if (isNaN(contenidoLiPrompt) && contenidoLiPrompt == "") {
            seguirP = false;
        } else if (contenidoLiPrompt == null) {
            seguirP = false;
        } else {
            seguirP = true;
        }
    } while (seguirP == true);

    do {

        num = prompt("Ponga un numero del 1 al 10: ");

        if (num >= 1 && num <= 10 && !isNaN(num)) {
            seguirNum = false;
        } else if (num == null) {
            seguirNum = false;
        } else {
            seguirNum = true;
        }

    } while (seguirNum == true);

    //  Creo el nuevo li
    let nuevoLi = document.createElement("li");

    // Creo nodo del contenido del li
    let contenidoLi = document.createTextNode("Holaa");

    // Añado el nodo contenido al li
    nuevoLi.appendChild(contenidoLi);

    // li anterior
    let anteriorLi = document.getElementById("li")[0];

    // No añade nada PORQUE
    document.body.insertBefore(nuevoLi,anteriorLi);
});