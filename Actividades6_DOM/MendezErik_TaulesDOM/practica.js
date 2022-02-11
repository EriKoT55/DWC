function crearTablaColores(tablaColores, numColores) {

    //Guardo en la variable el elementoTabla
    let elementTableID = document.getElementById(tablaColores);

    //Numero de columnas
    let numColumnas = elementTableID.rows[0].cells.length;

    //Numero de filas
    let numFilas = document.getElementById(numColores).value;

    let randomRed = 0;
    let randomGreen = 0;
    let randomBlue = 0;


    let CorloresRandoms = [];
    for (let i = 0; i < numFilas; i++) {
        CorloresRandoms[i] = new Map();
        randomRed = Math.floor(Math.random() * 255 + 0);
        randomGreen = Math.floor(Math.random() * 255 + 0);
        randomBlue = Math.floor(Math.random() * 255 + 0);
        CorloresRandoms[i].set("red", randomRed).set("green", randomGreen).set("blue", randomBlue);

    }

    //console.log(CorloresRandoms);

    crearTabla(numFilas, numColumnas);

    introducirDatosTabla(tablaColores, CorloresRandoms);

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

    //console.log(datos);
    let colors = [];
    let j = 0;
    for (let i = 0; i < filas.length-1; i++) {
        j = 0;
        colors = datos[i];

        for (let color of colors.values()) {
   
            
                //Cojo la última columna
                filas[i + 1].cells[j].innerHTML = color;
            

            j++;
        }
        filas[i + 1].cells[filas[i].cells.length - 1].style.backgroundColor = `rgb(${colors.get("red")},${colors.get("green")},${colors.get("blue")})`;
    }

}

function permutarFilas(tablaColoresm, fila1, fila2) {



}


function cambiarFondo(tablaColores, filaFondo) {



}