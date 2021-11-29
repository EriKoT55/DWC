let url;
let seguir=true;
/* https://www.w3schools.com/js/js_regexp.asp */
url= prompt("Introduzca una URL para comprabarla: ");

function comprobationUrl(url){

    return /^(http|https|ftp)::/+/["/"]{0,3}//*Shema*/
    /[A-ZÁÉÍÓÚÜÇa-záéíóúüç0-9]//*nom,me falta que pueda tener un guion y poner para que este o no, y que esten separadas on puntos*/
    /:/;

}


do{



}while();