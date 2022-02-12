/***** Funcion la cual crea la tabla con ayuda de otras dos funciones *****/
function crearTablaColores(tablaColores, numColores) {

    //Guardo en la variable el elementoTabla
    let elementTableID = document.getElementById(tablaColores);

    //Numero de columnas
    let numColumnas = elementTableID.rows[0].cells.length;

    //Numero de filas
    let numFilas = document.getElementById(numColores).value;

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

    //console.log(CorloresRandoms);

    crearTabla(numFilas, numColumnas);

    introducirDatosTabla(tablaColores, ColoresRandoms);

}

/***** Funcion la cual crea la tabla sin datos *****/
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

    let elementoTbody = document.getElementsByTagName("tbody");

    //Saco las filas con los valores introducios
    let row1 = elementTableID.rows[numF1];
    let row2 = elementTableID.rows[numF2];
    //let filas = elementTableID.rows;

    //############ SOLUCION:
    //INSERTAR LA FILA 1 EN LA POSICION DE FILA 2 E IVICEVERSA,
    //SEGUIDAMENTE BORRAR LAS DE ABAJO DE ESTAS POR QUE SERAN LAS REPETIDAS
    //COMO, ASI = numF1+1 esto seria la posicion de abajo de numF1 entonces borrare esa posicion


     let newRow1 =elementTableID.tBodies[1].insertRow(numF2);
    let contenidoRow1 = "";
    let contenidoRow2 = "";

    //contenidoRow1=elementTableID.tBodies[1].rows[numF1-1].cells[1].innerHTML;
    //console.log(contenidoRow1);

    // RECORRER LAS CELDAS DE row1 para recoger sus datos e introducirlos
    // a la nueva fila que ira en la posicion de row2
    for (let i = 0; i < row1.cells.length-1; i++) {

        contenidoRow1 = elementTableID.tBodies[1].rows[numF1 - 1].cells[i].innerHTML;

        cellsRow1=newRow1.insertCell(i);
    //Me falta coger el style y ponerselo a la 4 celda
        cellsRow1.innerHTML=contenidoRow1;
        // row.insertCell(i);
        //console.log(cellsRow1);
    }


    /*for(){

    }*/

}

/***** Funcion la cual se le pasa un numero de fila de la tabla y lo pone de fondo *****/
function cambiarFondo(tablaColores, filaFondo) {

    let elementTableID = document.getElementById(tablaColores);

    let numFila = document.getElementById(filaFondo).value;

    let numColumnas = elementTableID.rows[numFila].cells.length;

    let backColorFF = elementTableID.rows[numFila].cells[numColumnas - 1].style.backgroundColor;

    //Paso el rgb para que lo aplique en el fondo de la pagina
    document.body.style.backgroundColor = backColorFF;

}