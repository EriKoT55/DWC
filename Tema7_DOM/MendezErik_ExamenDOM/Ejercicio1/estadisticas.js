document.addEventListener("DOMContentLoaded", function(event) {
    let cabecera = ['LETRA','NºVECES','%APARICIONES'];

    // INTRODUCIR CÓDIGO AQUÍ



   

 });

 function mostrarEstadisticas(textarea){

    let cabecera = ['LETRA','NºVECES','%APARICIONES'];

    let table= document.createElement("table");

    let thead=document.createElement("thead");

    thead.insertRow(0);

    for(let i =0;i<cabecera.length;i++){

        thead.rows[0].insertCell(i);

        thead.rows[0].cells[i].innerHTML=cabecera[i];

    }    

    table.appendChild(thead);
    
    document.getElementById("divTabla").appendChild(table);

 }
