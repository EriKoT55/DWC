function generarDecimo(divContenedor) {
    //Cojo el nodeList
    let contenidoDivCont = document.getElementById(divContenedor);

    //Inicializo variable para el random
    let numRand_loto = 0;

    //Cuanto los divs que hay 
    let numeroDivs = contenidoDivCont.children.length;

    //Creo el array para guardar los numeros random
    let randomNums = [];

    //Hago un bucle para introducir los numeros en los divs y asi no hacer código espaguetti
    for (let i = 0; i < numeroDivs; i++) {

        numRand_loto = Math.floor(Math.random() * 10 + 1);

        randomNums[i] = numRand_loto;

        contenidoDivCont.children[i].innerHTML = randomNums[i];

    }

    let elementoSorteo = document.getElementById("realizarSorteo");

    //console.log(elementoSorteo);

    elementoSorteo.removeAttribute("disabled");

}


function realizarSorteo() {


    let divNumSorteo = document.getElementById("numeroSorteo");

    let numRandomSorteo = Math.floor(Math.random() * 10 + 1);

    divNumSorteo.children[0].innerHTML = numRandomSorteo;

    let numSorteo = divNumSorteo.children[0].innerHTML;

    //Cojo el nodeList
    let contenidoDivCont = document.getElementById("divContenedor");

    //Cuento los divs que hay 
    let numeroDivs = contenidoDivCont.children.length;

    let childrensToDiv = contenidoDivCont.children;

    console.log(numSorteo);

    for (let i = 0; i < numeroDivs; i++) {

        if (numSorteo == childrensToDiv[i].innerHTML) {

            childrensToDiv[i].style.color = "green";

        }else{

            childrensToDiv[i].style.color = "red";
            
        }

    }




}