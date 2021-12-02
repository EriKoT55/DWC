let nif=prompt("Introduzca su NIF: ");

function comprobarNif(nif){

    //let comprobacion = /[XIZ0-9]{1}[0-9]{7}/;
    //Puedo utilizar startswitch
    // Comprobar el if con el pattern no funciona preguntar
    if(nif.charAt(0)==/[0-9]/){

       let resto = nif.split("")%23;
        
    }else if(nif.charAt(0)=="X"){
        nif.replace("X",0);
    }else if(nif.charAt(0)=="Z"){
        nif.replace("Z",1);
    }else if(nif.charAt(0)=="I"){
        nif.replace("I",2);
    }

    /*if(comprobacion.test(nif)==true){
        return "t";
    }else{
        return "f";
    }*/



}
document.write(comprobarNif(nif));