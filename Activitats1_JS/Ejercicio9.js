var red;
var verde;
var azul;
var izq;
var arriba;

for(let i=0;i<5000;i++){
    
    rojo=parseInt(Math.random()*256);
    verde= parseInt(Math.random()*256);
    azul=parseInt(Math.random()*256);
    altura=parseInt(Math.random()*100);
    izq=parseInt(Math.random()*100);

    document.write(`<div id='fondo' `+`style='width:50px;height:50px; 
    background-color:rgb(${rojo},${verde},${azul});` +
    `left:${izq}%;top:${altura}%; margin:0px; border:1px solid black; position:absolute'></div>`);

    
}