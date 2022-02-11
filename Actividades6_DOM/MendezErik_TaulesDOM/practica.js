function crearTablaColores(tablaColores, numColores) {

    //Guardo en la variable el elementoTabla
    let elementTableID = document.getElementById(tablaColores);

    //Numero de columnas
    let numColumnas = elementTableID.rows[0].cells.length;

    //Numero de filas
    let numFilas = document.getElementById(numColores).value;

    let randomRed = Math.floor(Math.random() * 255 + 1);
    let randomGreen = Math.floor(Math.random() * 255 + 1);
    let randomBlue = Math.floor(Math.random() * 255 + 1);

    const ColorRadomMap = new Map();
    ColorRadomMap.set("red",randomRed).set("green",randomGreen).set("blue",randomBlue);

    crearTabla(numFilas, numColumnas);

    introducirDatosTabla(tablaColores,ColorRadomMap);
}

function crearTabla(numFila, numColumna) { 
    //Preguntar he cogido el id para poder crear la tabla en si, pero claro, 
    //no esta como parametro, entocnes no se si lo estare haciendo mal
    let elementTableID = document.getElementById("tablaColores");

    let tBodyElement = document.createElement("tbody");

    elementTableID.appendChild(tBodyElement);
   
    for (let k = 0; k < numFila; k++) {
        let trElement = document.createElement("tr");
        for (let i = 0; i < numColumna; i++) {


            let tdElement = document.createElement("td");
            
            trElement.appendChild(tdElement);
        }
        tBodyElement.appendChild(trElement);
    }

    elementTableID.appendChild(tBodyElement);

}

function introducirDatosTabla(tabla, datos) {

    let elementTableID = document.getElementById(tabla);

    let filas = elementTableID.rows;

    for(let i = 0; i< filas.length;i++){

        let contenidoTD0=document.createTextNode(datos.get("red"));
        filas.cells[0].appendChild(contenidoTD0);

        let contenidoTD1=document.createTextNode(datos.get("green"));
        filas.cells[1].appendChild(contenidoTD1);

        let contenidoTD2=document.createTextNode(datos.get("blue"));
        filas.cells[2].appendChild(contenidoTD2)

    }

}

function permutarFilas(tablaColoresm, fila1, fila2) {



}


function cambiarFondo(tablaColores, filaFondo) {



}
