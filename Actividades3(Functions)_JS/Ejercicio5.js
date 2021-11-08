//Crea una funció que rebi un array de paraules.
//La funció retornarà un mapa que contingui com a clau cada paraula i el valor és el 
//nombre de vegades que aquesta paraula apareix en el array.
//Farem una pàgina web que llegeixi paraules fins que l'usuari cancel·li o deixi 
//el quadre buit i mostrarem les repeticions de les paraules.

let palabra;
let salir=false;
const palabrasArray=[];

let i=0;
do{
    
    palabra=prompt("Ponga las palabras que quiera para el array:");
    
    if(palabra==null || palabra ==""){
        salir=true;
    }else{
        salir=false;
        palabrasArray[i]=palabra;
    }
 i++;  
}while(salir==false);


//No lo he probado mirar

function repetirArrays(array){
    const palabras= new Map();
let contador=0;
    for(let i=0;i<array.lenght;i++){

        if(palabras.has(array[i])){
            contador=2;
            
            palabrasArray.set(array[i],contador);
            contador++;

        }else{
            contador=1;
            palabrasArray.set(array[i],contador);
        }

    }
return palabras;
}