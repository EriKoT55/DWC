/*
 @author Raúl Caro Pastorino
 @copyright Copyright © 2017 Raúl Caro Pastorino
 @license https://wwww.gnu.org/licenses/gpl.txt
-->

<!--
↓ INSTRUCCIONES DEL EJERCICIO ↓
Utiliza un map almacenar información sobre módulos impartidos en este IES ("DWECL", “Desarrollo Web en Entorno Cliente).
Añade la información con posterioridad a la creación de la estructura :
    a.Muestra cuántos módulos hay almacenados
    b.Muestra el contenido de la estructura
    c.Devuelve las abreviaturas de todos los módulos guardados
    d.Devuelve el nombre completo de todos los módulos
    e.Consulta si está el módulo "DAW"
    f.Si está, elimínalo.
*/

var map= new Map();

map.set("DWS","Desarrollo web entorno servidor");
map.set("DIW","Desarrollo de interfaces web");
map.set("DAW","Despliegue de aplicaciones web");
map.set("DWC","Desarrollo web entorno cliente");

/* CON SIZE MUESTRO EL TAMAÑO DEL MAP */
document.write("El tamaño del map "+map.size);

document.write("<br>");

/* COJO LAS CLAVES DEL MAP */
for (k of map.keys()){
    document.write("<br>"+k);
}

document.write("<br>");

/* MUESTRO LOS VALORES DEL MAP */
for (v of map.values()){
    document.write("<br>"+v);
}

document.write("<br>");

/* con has devuelvo true o false si encuentra el valor introducido */
document.write("Esta el modulo DAW: "+map.has("DAW"));

document.write("<br>");
document.write("<br>");

if(map.has("DAW")){
    document.write("Se encontro, procediendo a borrado");
    map.delete("DAW");
}else{
    document.write("No se ha encontrado");
}

document.write("<br>");

map.forEach((value,key)=>{
    document.write("La clave: "+key+" y su valor "+value+" <br>");
});