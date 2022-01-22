document.addEventListener("DOMContentLoaded", function (event) {

    // a
    let numA = document.getElementsByTagName("a");

    /***********************************************************************/

    // p
    let numP = document.getElementsByTagName("p");

    /***********************************************************************/

    // penultimo a
    let penultimo = numA.length-2;
    let penultimoA = numA[penultimo];

/***********************************************************************/

    // ultimo a
    let ultimo = numA.length-1;
    let ultimoA = numA[ultimo];

/***********************************************************************/    
   
    // links a http://prueba/

    let contadorA=0;

    for(let i=0;i<numA.length;i++){

        if(numA[i].href=="http://prueba/"){
            contadorA++;
        }

    }

    
/***********************************************************************/

    //Numero de enlaces por parrafo

    const numDe_aXparrafo = new Map();
    let contador_aXp=0;

    for(let parrafo of numP){
        contador_aXp++;
        numDe_aXparrafo.set(contador_aXp, parrafo.getElementsByTagName("a").length);
    }

    //Mostrar contenido

    let text= "Numero de links: " + numA.length+"<br>"+
    "<br>Numero de paragrafos: " + numP.length+"<br>"+
    "<br>El penúltimo enlace apunta a: " + penultimoA+"<br>"+
    "<br>El último enlace apunta a: " + ultimoA+"<br>"+
    "<br>Hay: " + contadorA +" http://prueba/ <br>";
   
    for(let [numP,numA] of numDe_aXparrafo){
        text+="<br>Nombre de enlaces del parrafo = "+numP+" = "+numA+"<br>";
    }

    document.getElementById("info").innerHTML=text;

});