
let text = prompt("Escriba un texto:");
do{

    if(isNaN(Number(clave))){
        alert("No has escrito un número");
    }

    let clave = prompt("Introduzca la clave:");
}while(isNaN(Number(clave)))



/*text.split("");*/
let ascii = []; /* Creo arra para guardar en el los valores ascii*/
for (let i = 0; i < text.length; i++) {

    ascii[i] = text.charCodeAt(i); /* Guardo los numeros ascii en el array*/

    document.write("<p> " + "&#" + (ascii[i] + parseInt(clave)) + ";" + " </p>"); /*parseInt fuerzo a clave que sea un int*/
    /*Imprimo los valores ascii con el metodo Cesar*/

}