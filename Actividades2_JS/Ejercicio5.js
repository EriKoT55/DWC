//Arrays
let arrayMayus=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
let arrayMinus=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
let arrayNums=["0","1","2","3","4","5","6","7","8","9"];

//Booleano
let boolean=false;

let nom=prompt("Ponga su nombre de usuario: (Debe tener minusculas y numeros)");

let arrayChars=nom.split("");



    for(let i=0;i<arrayChars.length;i++){

        if( arrayMayus.indexOf(arrayChars[i]) != -1 ){

            alert("He encontrado un mayus");
  
        }if( arrayNums.indexOf(arrayChars[i]) == -1){

                    alert("No he encontrado un numeo");
                
        }
            nom=prompt("Ponga su nombre de usuario:(Debe tener minusculas y numeros)");
            
        }
    



let contrasenya=prompt("Ponga su contraseña:");

