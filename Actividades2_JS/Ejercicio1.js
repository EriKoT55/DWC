let text = prompt("Escriba un texto:");


let clave = prompt("Introduzca la clave:");

text.split("");
let ascii = [];
for (let i = 0; i < text.length; i++) {

    ascii[i] = text.charCodeAt(i);

    alert(ascii[i]);

}