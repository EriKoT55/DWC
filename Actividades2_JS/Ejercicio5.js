//Arrays
let arrayMayus=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
let arrayMinus=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
let arrayNums=["0","1","2","3","4","5","6","7","8","9"];

//Arrays de Resultados
let resultNumsIndexOf=[];
let resultMayusIndexOf=[];

//Booleanos condiciones
let booleanMayus=false;
let booleanMinus=false;
let booleanNums=false;

//Booleanos bucle
let booleanWhile=false;

//Contador
let contador=0;


let nom=prompt("Ponga su nombre de usuario: (Debe tener minusculas y numeros)");
   

    
 for(let i=0;i<nom.length;i++){ 

console.log(arrayMayus.indexOf(nom.charAt(i)));

        if(arrayMayus.indexOf(nom.charAt(i))!=-1){
            
            alert(" HAY mayus");
            nom=prompt("Ponga su nombre de usuario: (Debe tener minusculas y numeros)");

        }

   
   
    }
 





 



/**/


/*function encontrarMinus(booleanMinus){

    for(let i=0;i<arrayChars.length;i++){
   
        //si hay alguna minus en arrayChars boolean true
        if(arrayMinus.indexOf(arrayChars[i])!=-1){  
            booleanMinus==true;
        }
    
     }
    return booleanMinus;
}
function encontrarMinus(booleanMinus){

    for(let i=0;i<arrayChars.length;i++){
   
        //si hay alguna minus en arrayChars boolean true
        if(arrayMinus.indexOf(arrayChars[i])!=-1){  
            booleanMinus==true;
        }
    
     }
    return booleanMinus;
}
*/