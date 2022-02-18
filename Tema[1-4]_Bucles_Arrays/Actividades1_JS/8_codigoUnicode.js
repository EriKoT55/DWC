var contador=0;

for(var i=0;i<1000;i++){
    document.write("<tr>");
    for(var j=0;j<10;j++){

        document.write("<td>"+"&#"+contador+"</td>");
        document.write(`<td>${contador}</td>`);
        contador++;
    }
    document.write("</tr>");

}