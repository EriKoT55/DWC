function agregarColumna(tabla, columna, text) {

    let elementTabla = document.getElementById(tabla);
    let tBody = elementTabla.tBodies[0];
    //console.log(tBody);

    //Cojo el numero introducido
    let numCol = document.getElementById(columna).value-1;

    let textcol = document.getElementById(text).value;


    let td = "";
    let newCell = "";
    if (numCol <= tBody.rows[0].cells.length && numCol >= 0) {

        for (let i = 0; i < tBody.rows[0].cells.length; i++) {

            //Inserto la nueva celda en las filas que haya en la posicion indicada
            newCell = tBody.rows[i].insertCell(numCol);
            td = newCell.innerHTML = textcol;
            tBody.rows[i].cells[numCol].inserHTML = td;

        }

    } else {
        window.alert("error al introducir el numero de columna");
    }
}

function agregarFila(tabla,fila,text){

    let elementTabla= document.getElementById(tabla);

    //Cojo el elmento Tbody
    let tBody= elementTabla.tBodies[0];

    //Recojo el numero de filas del input
    let numFila= document.getElementById(fila).value;

    //Recojo el text que ira en las filas del input
    let textFila= document.getElementById(text).value;

    //
    let numCeldas=tBody.rows[0].cells.length;

    let newRow=tBody.insertRow(numFila-1);
    for(let i =0;i<numCeldas;i++){
    
        newRow.insertCell(i);
        newRow.cells[i].innerHTML=textFila;
    }

}

function cambiarValorCelda(tabla,fila,columna,text){

    let elementTabla= document.getElementById(tabla);

    //Cojo el elmento Tbody
    let tBody= elementTabla.tBodies[0];

    //Recojo el numero de filas del input
    let numFila= document.getElementById(fila).value-1;

    //Cojo el numero introducido
    let numCol = document.getElementById(columna).value-1;
    
    //Recojo el text que ira en las filas del input
    let textFila= document.getElementById(text).value;


    tBody.rows[numFila].cells[numCol].innerHTML=textFila;

}

function borrarColumna(tabla,columna){

    let elementTabla= document.getElementById(tabla);

    //Cojo el numero introducido
    let numCol = document.getElementById(columna).value-1;

    let tBody=elementTabla.tBodies[0];

    for(let i=0;i<tBody.rows.length;i++){

        tBody.rows[i].deleteCell(numCol);

    }

}

function borrarFila(tabla,fila){

    let elementTabla= document.getElementById(tabla);

    //Cojo el numero introducido
    let numFila = document.getElementById(fila).value-1;

    let tBody=elementTabla.tBodies[0];

        tBody.deleteRow(numFila);
    

}

function cambiarValorTodasCeldas(tabla,text){

    let elementTabla= document.getElementById(tabla);

    let tbody= elementTabla.tBodies[0];

    //Recojo el text que ira en las filas del input
    let textFila= document.getElementById(text).value;

    console.log(tbody.rows[0].cells.length);
    console.log(tbody.rows.length);
    for(let i=0;i<tbody.rows.length;i++){

        let Allrows=tbody.rows[i];

        for(let j=0;j<tbody.rows[i].cells.length;j++){

            Allrows.cells[j].innerHTML=textFila;

        }

    }

}