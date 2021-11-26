
let text = prompt("Escriba un texto:");

let clave = prompt("Escriba la clave:");

let ascii=[];

let claves=clave.split("");

let contador=0;

for(let i=0; i<text.length;i++){

    ascii[i]=text.charCodeAt(i);

    document.write("&#"+(ascii[i]+parseInt(claves[contador])));
    contador++;
    // Esto es para reiniciar el contador cuando llegue al final de la clave volver a empezar y asi hacer
    // 1 2 3 4 5 1 2 3 4 5
    if(contador==clave.length){
        contador=0;
    }
    
}