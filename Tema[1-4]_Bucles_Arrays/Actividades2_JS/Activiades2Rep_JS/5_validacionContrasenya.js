let nom,passwd;
// 
var mayus="AÁÀBCÇDEÉÈFGHIÍÌJKLMNÑOÓÒPQRSTUÚÙÜVWXYZ";
var minus="aáàbcçdeéèfghiíìjklmnñoóòpqrstuúùüvwxyz";
var nums="0123456789";

//Boleanos
let seguir=true;
let nombreOk=true;
let contraseñaOk;
do{
    nom=prompt("Ponga su nombre de usuario: ");
    if(nom==null){seguir=false;};
    
    if(seguir==true){
    let contadorMayus=0;
    let contadorNums=0;
    let contadorSimbolos=0;
    let i=0;
    nombreOk = true;
      while(i<nom.length){

        if(minus.indexOf(nom.charAt(i))==-1){
            if(mayus.indexOf(nom.charAt(i))!=-1){

                contadorMayus++;

            }else if(nums.indexOf(nom.charAt(i))!=-1){
                contadorNums++;
            }else{
                contadorSimbolos++;
            }

        }

        i++;
      }
      if(contadorMayus>0 || contadorNums==0 || contadorSimbolos>0){

        nombreOk=false;
        alert("Debe contener minusculas y numeros");
      }
    }
    

}while(seguir==true && nombreOk==false);

if(seguir==true){
    do{

        passwd=prompt("Ponga su contraseña");
        if(passwd==null){seguir=false;};

        if(seguir==true){
            let booleanMayus=false;
            let booleanMinus=false;
            let booleanSimbolos=false;
            let booleanNums=false;
            let i=0;
            contraseñaOk=true;
            while(i<passwd.length){

                if(minus.indexOf(passwd.charAt(i))!=-1){
                    booleanMinus=true;
                }else if(mayus.indexOf(passwd.charAt(i))!=-1){
                    booleanMayus=true;
                }else if(nums.indexOf(passwd.charAt(i))!=-1){
                    booleanNums=true;
                }else{
                    booleanSimbolos=true;
                }
                i++;
            }
            contraseñaOk=(booleanSimbolos==true && booleanNums== true && booleanMayus==true && booleanMinus==true);

            if(contraseñaOk==false){
                
                alert("La contraseña debe contener minimo un simbolo, un numero, una mayuscula y una minuscula");
            }
        }

    }while(seguir==true && contraseñaOk==false);

}