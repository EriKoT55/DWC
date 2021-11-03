//Creacion de funcion
function table(nfilas,ncolumnas,bcolor){
   let contador=0;
    document.write("<table style='border:3px solid "+bcolor+"'>")
    for(let filas=0;filas<nfilas || filas <10;filas++){
        document.write( "<tr>");

        for(let columna=0;columna<ncolumnas || columna < 4;columna++){
         
            document.write("<td style='border:1px solid "+bcolor+"'>");
                document.write(contador);
            document.write("</td>");
            contador++;
        }

        document.write("</tr>");
    }
    document.write("</table>");
}

//Llamada a la funcion
table(10,5,"green");