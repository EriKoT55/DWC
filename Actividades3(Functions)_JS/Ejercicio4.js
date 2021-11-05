
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

        document.write(listaPalabras);

    





