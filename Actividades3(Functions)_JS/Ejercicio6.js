
let num;
let seguir=false;

do{
    num=prompt("Ponga el numero que quiere de la secuencia fibonacci");
    if(isNaN(num) || num=="" || num==null){
        seguir=true;
    }else{
        seguir=false
    }

}while(seguir==true);
//valores n1=1 n2=1, creo una variable que la igualo a n1
function fibonacci(num){
    let n1=1,n2=1;
  for(let i=2;i<=num;i++){

    let f=n1;
    
    n1=n2;

    n2=f+n2;


  }

return n2;

}

document.write(fibonacci(num));