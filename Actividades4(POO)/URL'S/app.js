
/* https://www.w3schools.com/js/js_regexp.asp */
/* https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url */
let url= prompt("Introduzca una URL para comprobarla: ");

function comprobationUrl(url){

    let comprobacion =/^(http|https|ftp)?::["/"]{0,3}[-.A-ZÁÉÍÓÚÜÇa-záéíóúüç0-9]*\:{0,2}([\W]|[\w])\@$/;
    //http::/P3p2-na.N0:Give|*100%@_-!@
   // /(/\@)?[A-ZÁÉÍÓÚÜÇa-záéíóúüç]["."][A-ZÁÉÍÓÚÜÇa-záéíóúüç]//*host*/
   // /(/\:?\:?[0-90-9]?)^["/"]?[A-ZÁÉÍÓÚÜÇa-záéíóúüç]["/"]?[A-ZÁÉÍÓÚÜÇa-záéíóúüç]["/"]?//*Path*/
   // /(/\?)([\W][\w])/;//esto es para el final del ej

  
        if(comprobacion.test(url)==true){
            return "t";
        }else{
            
            return "f";
        }
   
}
document.write(comprobationUrl(url));
/*do{



}while();*/