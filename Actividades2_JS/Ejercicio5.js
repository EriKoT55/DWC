//Arrays
var mayus="AÁÀBCÇDEÉÈFGHIÍÌJKLMNÑOÓÒPQRSTUÚÙÜVWXYZ";
var minus="aáàbcçdeéèfghiíìjklmnñoóòpqrstuúùüvwxyz";
var nums="0123456789";
/*let simbols="0123456789aáàbcçdeéèfghiíìjklmnñoóòpqrstuúùüvwxyzAÁÀBCÇDEÉÈFGHIÍÌJKLMNÑOÓÒPQRSTUÚÙÜVWXYZ";*/

//Booleanos condiciones
/*let booleanMayus=false;
let booleanMinus=false;
let booleanNums=false;*/

//Booleanos bucle
let nombreOk=true;
let seguir=true;

let nom,contraseña;


do{

    nom = prompt("Ponga su nombre de usuario");

    if(nom==null){seguir=false;}

    if(seguir){
        //Contadores
        let contadorMayus=0;
        let contadorSimbolos=0;
        let contadorNums=0;
        let i =0;
        nombreOk = true;
        while(i<nom.length){

          if(minus.indexOf(nom.charAt(i))==-1){
            if(mayus.indexOf(nom.charAt(i))!=-1){
                contadorMayus++;
                
            }else if (nums.indexOf(nom.charAt(i))!=-1){
                contadorNums++;
                
            }else {
                contadorSimbolos++;
                
            }
            
          }  
          i++
        }

        if(contadorMayus>0 || contadorNums==0 || contadorSimbolos>0){

            nombreOk=false; 
            alert("Debe contener minusculas y numeros");
            
        }


    }


}while(seguir && !nombreOk);


