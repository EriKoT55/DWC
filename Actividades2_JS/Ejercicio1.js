
let text = prompt("Escriba un texto:");
let boolean=false;
let clave;


    do{

         clave = prompt("Introduzca la clave:");
        if(isNaN(Number(clave))){
            alert("No has escrito un número");
            boolean=false;
        }else{
            boolean=true;
        }

    
    }while(boolean==false)



/*text.split("");*/
let ascii = []; /* Creo array para guardar en el los valores ascii*/
for (let i = 0; i < text.length; i++) {

    ascii[i] = text.charCodeAt(i); /* Guardo los numeros ascii en el array*/

    document.write("<p> " + "&#" + (ascii[i] + parseInt(clave)) + ";" + " </p>"); /*parseInt fuerzo a clave que sea un int*/
    /*Imprimo los valores ascii con el metodo Cesar*/

}