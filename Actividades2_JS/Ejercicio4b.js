

let random;
let arrayNums=[0,0,0,0,0,0,0,0,0,0]


for(let i=1; i<=10000;i++){
  
        random = Math.floor(Math.random()*10+1);
        
        arrayNums[random-1]++;// va poniendo en cada posicion del aray los numeros randoms 
        // Pongo el -1 ya que al haber de la posicion 0 al 9 en el array y los numeros randoms
        // van del 1 al 10, lo que hago al poner el -1 es hacer que el random cuente del 0 al 9
        // ya que le resto una posicion 

}
for(let i=0; i<10;i++){

    document.write("<br> · Numero "+(i+1)+": "+arrayNums[i]);
   
}

//Sumar los valores dentro del array 
let total=0;
for(let i=0;i<arrayNums.length;i++){

    total+=arrayNums[i];

}

//Sumar los valores dentro del array - pero con For of -
/*for(let i of arrayNums){

    total+=i;

}*/

document.write("<br> Total: "+total);