
let nombreCompleto =prompt("Escribe tu nombre completo: ");

let salario = parseInt(prompt("Digame cuanto cobra: "));

let edad = parseInt(prompt ("Cual es su edad: "));



if(salario>=1000 && salario<=2000){

    if(edad>45){
        salario=salario+salario*0.03;
    }else if(edad<=45){
        salario=salario+(salario*0.1);
    }

}else if(salario<1000){

    if(edad<30){
        salario=1100;
    }else if(edad>=30 && edad<=45){
        salario = salario+salario*0.03;
    }else if(edad>45){
        salario=salario+salario*0.15;
    }

}

alert(`${nombreCompleto}`+` `+`${edad}`+` `+`${salario}`);
