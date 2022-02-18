const arrayAbecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const mapaAbecedarioUnicode = new Map();
/*Usar el método Array.sort() para clasificar una sola cadena en Java
Usa el bucle for para ordenar una sola cadena en Java */
let contador = 0;
for (let i = 9398; i <= 9423; i++) {
    mapaAbecedarioUnicode.set(`${arrayAbecedario[contador]}`, `&#${i}`);
    contador++;
}

//CREACION DEL SETT
const LETRAS_SIN_REPETIR = new Set();
let randomLet = [];
let orderLet = [];
/*RANDOMIZAR LAS LETRAS*/
for (let i = 0; i < 20; i++) {
    let randomLetras = Math.floor(Math.random() * 26 + 0);

    randomLet[i] = mapaAbecedarioUnicode.get(arrayAbecedario[randomLetras]);

    document.write(randomLet[i] + " ");

    //LETRAS_SIN_REPETIR.add(mapaAbecedarioUnicode.get(arrayAbecedario[randomLetras]));
}
document.write("<br>");
document.write("<h1> Lletres ordenades </h1>");

orderLet = randomLet;
orderLet.sort();

for (let i = 0; i < orderLet.length; i++) {
    document.write(orderLet[i]+" ");

    LETRAS_SIN_REPETIR.add(orderLet[i]);
}


document.write("<h1>" + LETRAS_SIN_REPETIR.size + " lletres sense repetir </h1>");
for (letras of LETRAS_SIN_REPETIR) {

    document.write(letras + " ");

}




//document.write(mapaAbecedarioUnicode);