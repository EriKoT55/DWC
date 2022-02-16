function generarDecimo(divContenedor) {

    let contenidoDivCont = document.getElementById(divContenedor);

    let rand1= Math.floor(Math.random*10+1);
    let rand2= Math.floor(Math.random*10+1);
    let rand3= Math.floor(Math.random*10+1);


    //Crear un elemento p para meter los numeros random
    console.log(contenidoDivCont.children[0]);
    let pDiv1=document.createElement("p");

    contenidoDivCont.children[0].insert(pDiv1);    

}

function realizarSorteo() {



}