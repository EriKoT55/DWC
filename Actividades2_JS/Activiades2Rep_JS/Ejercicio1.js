var nom = prompt("Ponga su texto para ser cifrado: ");
var clave;
var boolean=false;


while(!boolean){
 
    clave= prompt("Ponga la clave para poder cifrar su texto:");

    if(isNaN(clave)){
        alert("no has puesto un numero");
        boolean=false;
    }else{
        boolean=true;
    }

}
var cifrado=[];

for(let i =0; i<nom.length;i++){

   cifrado[i] = nom.charCodeAt(i)+parseInt(clave);

    
        
        document.write("<br>"+"&#"+cifrado[i]);
    

   

}
