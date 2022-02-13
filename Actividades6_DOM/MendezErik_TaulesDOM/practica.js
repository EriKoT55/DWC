/***** Funcion la cual crea la tabla con ayuda de otras dos funciones *****/
function crearTablaColores(tablaColores, numColores) {

    //Guardo en la variable el elementoTabla
    let elementTableID = document.getElementById(tablaColores);

    //Numero de columnas
    let numColumnas = elementTableID.rows[0].cells.length;

    //Numero de filas
    let numFilas = document.getElementById(numColores).value;

    //Eliminar contenido del input
    document.getElementById(numColores).value = "";

    //Creacion y Guardado de colores aleatorios en un array para posteriormente introducrilos en la tabla    
    let randomRed = 0;
    let randomGreen = 0;
    let randomBlue = 0;

    //Creacion del Array en el cual se introduciran los Maps
    let ColoresRandoms = [];
    for (let i = 0; i < numFilas; i++) {
        //Creacion del Map
        ColoresRandoms[i] = new Map();

        //Aleatorización de los colores
        randomRed = Math.floor(Math.random() * 255 + 0);
        randomGreen = Math.floor(Math.random() * 255 + 0);
        randomBlue = Math.floor(Math.random() * 255 + 0);

        //Insercion de los colores con set en el map e introducidos en el Array
        ColoresRandoms[i].set("red", randomRed).set("green", randomGreen).set("blue", randomBlue);

    }

    //Comprobacion de filas introducidas
    if (!isNaN(numFilas)) {
        if (numFilas >= 1 && numFilas <= 20) {
            crearTabla(numFilas, numColumnas);
        } else {
            alert("No se pueden introducir estas filas: " + numFilas);
        }
    }

    introducirDatosTabla(tablaColores, ColoresRandoms);

}

/***** Funcion la cual crea la tabla sin datos *****/
function crearTabla(numFila, numColumna) {

    /* ##### PREGUNTAR ##### */

    //He cogido el id para poder crear la tabla en si, pero claro, 
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

/***** Funcion la cual inserta los datos en la tabla antes creada *****/
function introducirDatosTabla(tabla, datos) {

    let elementTableID = document.getElementById(tabla);

    let filas = elementTableID.rows;

    //console.log(datos);
    let colors = [];
    let j = 0;
    for (let i = 0; i < filas.length - 1; i++) {
        j = 0;
        colors = datos[i];

        for (let color of colors.values()) {

            filas[i + 1].cells[j].innerHTML = color;

            j++;
        }
        //Pongo el fondo del color de la fila, al final de la fila correspondiente
        filas[i + 1].cells[filas[i].cells.length - 1].style.backgroundColor = `rgb(${colors.get("red")},${colors.get("green")},${colors.get("blue")})`;
    }

}

/***** Funcion la cual se introducen las filas deseadas y las cambia de posicion *****/
function permutarFilas(tablaColores, fila1, fila2) {

    let elementTableID = document.getElementById(tablaColores);

    //Cojo los valores pasados por el input
    let numF1 = document.getElementById(fila1).value;
    let numF2 = document.getElementById(fila2).value;


    if (!isNaN(numF1) && !isNaN(numF1 && numF1!=numF2)) {

        //Eliminar contenido de los campos
        document.getElementById(fila1).value = "";
        document.getElementById(fila2).value = "";

        //y al ser como un array debo restar 1, a la posicion introducida
        //Para que se adecue al numero real
        numF1 = numF1 - 1;
        numF2 = numF2 - 1;

        //Saco una fila para coger el valor de las celdas
        let row = elementTableID.rows[0];

        //############ SOLUCION:
        //INSERTAR LA FILA 1 EN LA POSICION DE FILA 2 E IVICEVERSA,
        //SEGUIDAMENTE BORRAR LAS DE ABAJO DE ESTAS POR QUE SERAN LAS REPETIDAS

        //####### PROBLEMA SOLUCIONADO:
        // Al querer añadir las dos filas y coger los datos en el mismo bucle
        // cogia las culumnas vacias acabadas de crear, por eos creo unos array y cojo los valores
        // de las filas y los introduzco en estos para que asi en el siguiente bucle coger esos valores
        // y pdoer insertar en las celdas dichos valores

        let newRow1 = "";
        let newRow2 = "";
        let contenidoRow1Arr = [];
        let contenidoRow2Arr = [];
        let contenidoRow1 = "";
        let contenidoRow2 = "";

        // RECORRER LAS CELDAS DE las Filas para recoger sus datos e introducirlos en un array
        for (let i = 0; i < row.cells.length; i++) {

            contenidoRow1Arr[i] = elementTableID.tBodies[1].rows[numF1].cells[i].innerHTML;
            contenidoRow2Arr[i] = elementTableID.tBodies[1].rows[numF2].cells[i].innerHTML;

        }

        //Cojo el fondo de la fila1 
        let backColorFF1 = elementTableID.tBodies[1].rows[numF1].cells[row.cells.length - 1].style.backgroundColor;
        //Cojo el fondo de la fila2
        let backColorFF2 = elementTableID.tBodies[1].rows[numF2].cells[row.cells.length - 1].style.backgroundColor;

        //Creo e inserto las nuevas Filas en las posiciones pasadas por parametro
        newRow1 = elementTableID.tBodies[1].insertRow(numF2);
        newRow2 = elementTableID.tBodies[1].insertRow(numF1);

        for (let i = 0; i < row.cells.length; i++) {

            contenidoRow1 = contenidoRow1Arr[i];
            contenidoRow2 = contenidoRow2Arr[i]

            cellsRow1 = newRow1.insertCell(i);
            cellsRow1.innerHTML = contenidoRow1;

            cellsRow2 = newRow2.insertCell(i);
            cellsRow2.innerHTML = contenidoRow2;

        }

        //Pongo en la nueva fila1 el fondo
        newRow1.cells[newRow1.cells.length - 1].style.backgroundColor = backColorFF1;

        //Pongo en la nueva fila2 el fondo
        newRow2.cells[newRow2.cells.length - 1].style.backgroundColor = backColorFF2;

        //Sumo uno al numero de la fila ya que la fila que quiero borrar esta debajo de esta
        numF1 = numF1 + 1;
        numF2 = numF2 + 1;

        //Prosigo a borrar las filas antiguas
        elementTableID.tBodies[1].deleteRow(numF1);
        elementTableID.tBodies[1].deleteRow(numF2);
    } else {
        //Eliminar contenido de los campos
        document.getElementById(fila1).value = "";
        document.getElementById(fila2).value = "";
    }
}

/***** Funcion la cual se le pasa un numero de fila de la tabla y lo pone de fondo *****/
function cambiarFondo(tablaColores, filaFondo) {

    let elementTableID = document.getElementById(tablaColores);

    let numFila = document.getElementById(filaFondo).value;

    if (!isNaN(numFila)) {
        //Eliminar contenido del input
        document.getElementById(filaFondo).value = "";

        let numColumnas = elementTableID.rows[numFila].cells.length;

        let backColorFF = elementTableID.rows[numFila].cells[numColumnas - 1].style.backgroundColor;

        //Paso el rgb para que lo aplique en el fondo de la pagina
        document.body.style.backgroundColor = backColorFF;
    } else {
        //Eliminar contenido del input
        document.getElementById(filaFondo).value = "";
    }


}