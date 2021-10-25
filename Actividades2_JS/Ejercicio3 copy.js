
let random;


for(let j=1;j<=50;j++){

    
    for(let i=0;i<6;i++){
        random = Math.floor(Math.random()*51+1);

        const randomizer = new Set([random]);// array de random sin repetirse
        
    

    // no acabo de entender como utilizar randoms.has como condicion 
    // me devuelve un booleado, true si se repite, false si no
    // lo que no acabo de entender es si me da false, que es lo que quiero, 
    // el problema que set guarda los numeros y claro guarda los 50 random entoces
    // cuando vaya a salir cualquier numero random, ya no se mostrara, por que seria repetido
    // lo que quiero hacecr es que en la linea no se repita, pero no acabo de ver como hacer lo  
    

            document.write(" "+random);
            
           
        
        }
}
