let random;

let uno=0;
let dos=0;
let tres=0;
let cuatro=0;
let cinco=0;
let seis=0;
let siete=0;
let ocho=0;
let nueve=0;
let diez=0;

const randoms = new Set([]);

for(let i=1;i<=10000;i++){

    random = Math.floor(Math.random()*10 +1);

    if(random==1){
        uno++;
    }else if(random==2){
        dos++;
    }else if(random==3){
        tres++;
    }
    else if(random==4){
        cuatro++;
    }
    else if(random==5){
        cinco++; 
    }
    else if(random==6){
        seis++;
    }
    else if(random==7){
        siete++;
    }
    else if(random==8){
        ocho++;
    }
    else if(random==9){
        nueve++;
    }else if(random==10){
        diez++;
    }

}

    document.write(`<li>Número 1: ${uno}</li>`);
    document.write(`<li>Número 2: ${dos}</li>`);
    document.write(`<li>Número 3: ${tres}</li>`);
    document.write(`<li>Número 4: ${cuatro}</li>`);
    document.write(`<li>Número 5: ${cinco}</li>`);
    document.write(`<li>Número 6: ${seis}</li>`);
    document.write(`<li>Número 7: ${siete}</li>`);
    document.write(`<li>Número 8: ${ocho}</li>`);
    document.write(`<li>Número 9: ${nueve}</li>`);
    document.write(`<li>Número 10: ${diez}</li>`);
   


