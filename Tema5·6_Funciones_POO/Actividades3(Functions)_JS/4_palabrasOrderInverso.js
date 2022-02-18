
    let palabras;

    let parar = false;

    const palabrasSet = new Set();

    do {
        palabras = prompt("Ponga una palabra");

        if (palabras == null || palabras == "") {
            parar = true;
        } else {
            parar = false;
            palabrasSet.add(palabras); 
        }

        

    } while (parar == false);

    const listaPalabras =[...palabrasSet];

        listaPalabras.sort((a,b) => b.localeCompare(a,'es'));
// Tambien lo podemos hacer así, pero lo que pretendia el ejercicio era hacerlo con una funcion flecha
// listaPalabras.sort().reverse();

//Tambien se puede hacer con un foreach, funciona como tal, 
//pero puedo probarlo con un for... of
/*
        listaPalabras.forEach(function(palabra)){
             document.write(palabra);
        }
*/
        document.write(listaPalabras);

    





