let url;
let seguir=true;
/* https://www.w3schools.com/js/js_regexp.asp */
url= prompt("Introduzca una URL para comprobarla: ");

function comprobationUrl(url){

    return /^(http|https|ftp)?::/+/["/"]{0,3}//*Shema*/
    /[-A-ZÁÉÍÓÚÜÇa-záéíóúüç0-9]?//*que esten separadas un puntos*/
    /::[-A-ZÁÉÍÓÚÜÇa-záéíóúüç0-9]?/
    /@/
    /:[0-90-9]/;

}


do{



}while();