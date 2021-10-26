//Arrays
let arrayMayus=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
let arrayMinus=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
let arrayNums=[0,1,2,3,4,5,6,7,8,9];

//Booleano
let boolean=false;

let nom=prompt("Ponga su nombre de usuario: (Debe tener minusculas y numeros)");

let arrayChars=nom.split("");

for(let j=0;j<arrayMayus.length;j++){

    
    for(let i=0;i<arrayChars.length;i++){

        console.log(arrayMayus.indexOf(arrayChars[i]));
        
        /*if(arrayMayus.indexOf(arrayChars)==arrayChars[i]){
            alert("encontramos una mayus");
            nom=prompt("Ponga su nombre de usuario:(Debe tener minusculas y numeros)");
        }else{
            alert("no esta");
        }
         */
    }
    
}



let contrasenya=prompt("Ponga su contraseña:");

