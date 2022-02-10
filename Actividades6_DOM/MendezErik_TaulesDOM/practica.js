function crearTablaColores(tablaColores, numColores) {

    let elementTableID = document.getElementById(tablaColores);

    //Numero de columnas
    let numColumnas = elementTableID.rows[0].cells.length;

    let numFilas = document.getElementById(numColores).value;

    crearTabla(numFilas, numColumnas);

}

function crearTabla(numFila, numColumna) {
    let elementTableID = document.getElementById("tablaColores");

    let tBodyElement = document.createElement("tbody");

    elementTableID.appendChild(tBodyElement);
   
    for (let k = 0; k < numFila; k++) {
        let trElement = document.createElement("tr");
        for (let i = 0; i < numColumna; i++) {


            let tdElement = document.createElement("td");

            let randomRed = Math.floor(Math.random() * 255 + 1);
            let randomGreen = Math.floor(Math.random() * 255 + 1);
            let randomBlue = Math.floor(Math.random() * 255 + 1);
            
            let contenidoTD = document.createTextNode(randomRed);
            tdElement.appendChild(contenidoTD);
            //ESTO NO FUNCIONA
            /*if(i=0){
                let contenidoTD = document.createTextNode(randomRed);
                tdElement.appendChild(contenidoTD);
            }else if(i=1){
                let contenidoTD = document.createTextNode(randomGreen);
                tdElement.appendChild(contenidoTD);
            }else if(i=2){
                let contenidoTD = document.createTextNode(randomBlue);
                tdElement.appendChild(contenidoTD);
            }else if(i=3){
                
                tdElement.style.backgroundColor=(`rgb(${randomRed},${randomGreen},${randomBlue})`);
            }*/
            
            trElement.appendChild(tdElement);
        }
        tBodyElement.appendChild(trElement);
    }

    elementTableID.appendChild(tBodyElement);

}

function introducirDatosTabla(tabla, datos) {




}

function permutarFilas(tablaColoresm, fila1, fila2) {



}


function cambiarFondo(tablaColores, filaFondo) {



}
