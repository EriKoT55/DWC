
let random;
const randomizer = new Set();

for(let j=1;j<=50;j++){

    
    do{
        randomizer.add(Math.floor(Math.random()*50+1));
    }while(randomizer.size<6);

    document.write("<br>");
    
    for(numeros of randomizer){
        
        document.write(" "+numeros);
    }
    randomizer.clear();
}
// no acabo de entender como utilizar randoms.has como condicion 
    // me devuelve un booleado, true si se repite, false si no
    // lo que no acabo de entender es si me da false, que es lo que quiero, 
    // el problema que set guarda los numeros y claro guarda los 50 random entoces
    // cuando vaya a salir cualquier numero random, ya no se mostrara, por que seria repetido
    // lo que quiero hacecr es que en la linea no se repita, pero no acabo de ver como hacer lo  
    