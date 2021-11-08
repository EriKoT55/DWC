//Crea una funció que rebi un array de paraules.
//La funció retornarà un mapa que contingui com a clau cada paraula i el valor és el 
//nombre de vegades que aquesta paraula apareix en el array.
//Farem una pàgina web que llegeixi paraules fins que l'usuari cancel·li o deixi 
//el quadre buit i mostrarem les repeticions de les paraules.

let palabra;
let salir=false;
const palabrasArray=[];
const palabras= new Map();
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

for(valor of palabrasArray){
    document.write(valor);
}


/*function repetirArrays(array){

}*/