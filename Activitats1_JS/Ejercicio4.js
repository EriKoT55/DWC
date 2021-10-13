

var random = Math.floor(Math.random()*101);

var numIntentos=0;
let isNum=false;
let acertado=false;

let volver= confirm("¿Te gustaria jugar?");



while(volver==true){
    
    random = Math.floor(Math.random()*101);
    alert(random);
    num=prompt("Adivine el número: ");
    
    while(isNum==false){//Con este bucle mira si es un numero o no
        if(isNaN(num)){
            alert("No es un número");   
            num=prompt("Ponga un número, por favor: ");
            isNum=false;
        }
        else if(!isNaN(num)){
            if(num==null){
                alert("Se cerro el juego");
            }else{
                while(acertado==false){
           
                    if(num==random){
                        alert("Has acertadoo");
                        acertado=true;
                    }else{
            
                        if(num<random){
                            num=prompt("El número introducido es menor al número que busca, intente lo otra vez: ")
                            acertado=false;
                            if(num==null){
                                alert("Se cerro el juego");
                                acertado=true;
                            }
                        }else if(num>random){
                
                            num=prompt("El número introducido es mayor al número que busca, intente lo otra vez: ")
                            acertado=false;
                            if(num==null){
                                alert("Se cerro el juego");
                                acertado=true;
                            }
                        }
                        numIntentos++;
                    }
                }
            }
            isNum=true;
        }
        
            alert(`Intentos: ${numIntentos} `);
        
    }
    volver=confirm("¿Te gustaria vovler a jugar?");
    if(volver==false){
     alert("Bueno en otra ocasión sera");
    }
    
}



 /*if(num==null){
        alert("Se cerro el juego");
   }else{
        while(acertado==false){
           
         if(num==random){
            alert("Has acertadoo");
            acertado=true;
         }else{
            
            if(num<random ){
                num=prompt("El número introducido es menor al número que busca, intente lo otra vez: ")
                acertado=false;
                if(num==null){
                    alert("Se cerro el juego");
                    acertado=true;
                }
            }else if(num>random){
                
                num=prompt("El número introducido es mayor al número que busca, intente lo otra vez: ")
                acertado=false;
                if(num==null){
                    alert("Se cerro el juego");
                    acertado=true;
                }
            }
            numIntentos++;
            
         }
            
         
        }
        
     
    }
    alert(`Intentos: ${numIntentos} `);

 */  
