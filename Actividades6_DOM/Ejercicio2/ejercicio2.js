function ocultarMostra(paragrafo,link){

let parrafo = document.getElementById(paragrafo);

let enlace = document.getElementById(link);
//Si el nombre de la clase es visible del parrafo es visible entonces
// cambio el nombre de la clase a ocult y 
// cambio lo que se muestra en el enlace
if (parrafo.className=="visible"){
    parrafo.className="ocult";
    enlace.innerHTML="Mostrar";
}else{
    parrafo.className="visible";
    enlace.innerHTML="Ocultar";
}

}