/*
    //Funcion declarativa
function par(num){

    if(num%2==0){
        return "Es par";

    }else{
       return "No es par";
    }


}
let random;
for(let i=0;i<500;i++){

random=Math.floor(Math.random()*10000+1);

document.write("<br>"+(i+1)+"- "+random+" "+par(random));

}*/

/*    // funcion anonima
let pares = function (num){

    if(num%2==0){
        return "Es par";

    }else{
       return "No es par";
    }

}

let random;
for(let i=0;i<500;i++){

random=Math.floor(Math.random()*10000+1);

document.write("<br>"+(i+1)+"- "+random+" "+pares(random));

}*/

    // funcion flecha

    let pares =(num)=>{
        if(num%2==0){
            return "Es par";
        }else{
            return "No es par";
        }
    };

    for(let i=0;i<500;i++){

        random=Math.floor(Math.random()*10000+1);
        
        document.write("<br>"+(i+1)+"- "+random+" "+pares(random));
    }