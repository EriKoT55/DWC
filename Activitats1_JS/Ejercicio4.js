

var random = Math.floor(Math.random()*101);

var numIntentos=0;
let isNum=false;// entrar en el segundo bucle, mirar si es un num o letra
let acertado=false;// entrar en el tercer bucle, mirar si has acertado el randomnum

let volver= confirm("¿Te gustaria jugar?");// entrar en el primer bucle



while(volver==true){
    
    random = Math.floor(Math.random()*101);
    alert(random);
    num=prompt("Adivine el número: ");
    
    while(isNum==false){//Con este bucle mira si es un numero o no
        if(isNaN(num)){// si no es un numero, te preguntara hasta que sea true
            //o sea, hasta que le introduzcas un num, ahí sera cuando vaya al else if
            //de abajo
            alert("No es un número");   
            num=prompt("Ponga un número, por favor: ");
            isNum=false;
        }
        else if(!isNaN(num)){// Aqui comprobara si he cerrado la ventana o si no entrara en 
            //el bucle
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
