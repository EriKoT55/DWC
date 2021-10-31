let random;

const randoms = new Set();

// Tengo pensado si set me quita los valores repetidos meter cada uno de los valores
// de la loteria del uno al seis para que no se reptian

for(let i=1;i<=50;i++){

    document.write("<br>");
    
    for(let j=0;j<6;j++){

        randoms.add(Math.floor(Math.random()*49+1));
        
    };  

    for(nums of randoms){

        document.write(" "+nums);

    }
    randoms.clear();
}

