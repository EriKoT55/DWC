
let text = prompt("Escriba un texto:");


let clave = prompt("Escriba la clave:");

let ascii=[];

let claves=clave.split("");

let contador=0;

for(let i=0; i<text.length;i++){

    ascii[i]=text.charCodeAt(i);


    document.write("&#"+(ascii[i]+parseInt(claves[contador])));
    contador++;
    if(contador==clave.length){
        contador=0;
    }
    
}