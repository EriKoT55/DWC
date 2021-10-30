let random;

const randoms = new Set();

var uno=0;
var dos=0;
var tres=0;
var cuatro=0;
var cinco=0;
var seis=0;

// Tengo pensado si set me quita los valores repetidos meter cada uno de los valores
// de la loteria del uno al seis para que no se reptian

for(let i=1;i<=50;i++){

    for(let j=0;j<50;j++){

        uno = Math.floor(Math.random()*49+1);
        
        dos = Math.floor(Math.random()*49+1);

        tres =Math.floor(Math.random()*49+1);

        cuatro =Math.floor(Math.random()*49+1);

        cinco =Math.floor(Math.random()*49+1);

        seis= Math.floor(Math.random()*49+1);
    }

document.write("<br>"+randoms.add(uno)+" "+dos+" "+tres+" "+cuatro+" "+cinco+" "+seis);

}

/*for(uno of randoms){

    document.write("<br>"+"- "+uno);

}*/