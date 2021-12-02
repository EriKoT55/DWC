
/* https://www.w3schools.com/js/js_regexp.asp */
/* https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url */
let url= prompt("Introduzca una URL para comprobarla: ");

function comprobationUrl(url){
                                                                                                                                        //Mirar esta parte al poner * + ? fuera del parentesis peta y creo que cualquier cosa que pongas dara true
    let comprobacion =/^(http|https|ftp)?:\/{0,3}([A-ZÇa-zç0-9\-\.]*:.+|[A-ZÇa-zç0-9\-\.]*)\@[A-ZÇa-zç0-9\-]+\.[A-ZÇa-zç0-9\-]+(:[0-9])*(^\/.+\/$)*.+\?$/;
    //http:/P3p2-na.N0:Give|*100%@_-!@
    //http:/P3p2-na.N0:Give|*100%@_-!@MAn3L0.com:80/Give|*100%@_-!@/
    //http:/P3p2-na.N0:Give|*100%@_-!@MAn3L0.com:80/Give|*100%@_-!@/2sE%#3?

   // en el host me falta hacer que el minimo sean dos palabras separadas por un punto
  
        if(comprobacion.test(url)==true){
            return "t";
        }else{
            
            return "f";
        }
   
}
document.write(comprobationUrl(url));
/*do{



}while();*/