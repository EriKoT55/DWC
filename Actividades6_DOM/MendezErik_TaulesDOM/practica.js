function crearTablaColores(tablaColores, numColores) {

    let elementTableID = document.getElementById(tablaColores);

    //Numero de columnas
    let numColumnas = elementTableID.row[0].cells.lenght;

    crearTabla(numColores, numColumnas);

}

function crearTabla(numFila, numColumna) {


    let tBodyElement = document.createElement("tbody");

/* BUCLE PARA AÑADIR LAS FILAS Y COLUMNAS INTRODUCIDAS POR PARAMETRO 
https://es.stackoverflow.com/questions/393709/crear-una-tabla-con-js-con-una-columna-y-una-fila-fijas */
    for (let i=0;i<numFila;i++) {
        let trElement = document.createElement("tr");

        let tdElement = document.createElement("td");

        let randomRed = Math.floor(Math.random() * 255 + 1);
        let randomGreen = Math.floor(Math.random() * 255 + 1);
        let randomBlue = Math.floor(Math.random() * 255 + 1);

        /* https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_create */
        /*var td = document.createElement("td");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var t = document.createTextNode(randomRed);
  var p=document.createTextNode(randomGreen);
  var g=document.createTextNode(randomBlue);
  
  
  td.appendChild(t);
  td1.appendChild(p);
  td2.appendChild(g);
  td3.style.backgroundColor=(`rgb(${randomRed},${randomGreen},${randomBlue})`);
  document.getElementById("myTr").appendChild(td);
  document.getElementById("myTr").appendChild(td1);
  document.getElementById("myTr").appendChild(td2);
  document.getElementById("myTr").appendChild(td3);*/

        //Creo que sera algo así
        let contenidoTD = document.createTextNode();
    }


}

function introducirDatosTabla(tabla, datos) {




}

function permutarFilas(tablaColoresm, fila1, fila2) {



}


function cambiarFondo(tablaColores, filaFondo) {



}