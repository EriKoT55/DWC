var nom =prompt("Ponga el mensaje que cifrara");

var clave;
var boolean=false;

while(!boolean){
    clave =prompt("Ponga la clave para el cifrado");
    if(isNaN(clave)){
        boolean=false;
        alert("Deberias haber puesto numeros");
    }else{
        boolean=true;
    }

}

let ascii=[];

let contador=0;
for(let i=0;i<nom.length;i++){

ascii[i]=nom.charCodeAt(i);

//Aquest és el missatge

document.write("<br>"+"&#"+(ascii[i]+parseInt(clave.charAt(contador))));
contador++;
//Esto es para reiniciar el contador cuando llegue al final de la clave volver a empezar y asi hacer
// 1 2 3 4 5 1 2 3 4 5
if(contador==clave.length){
    contador=0;
}

}
