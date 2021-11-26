function introDatos(){
    
        let tipoVia;
        let nombreVia;
        let numeroEdificio;
        let codigoPoatal;
        let planta;
        let puerta;
        let propietario;
        let seguir = false;
      

            tipoVia = prompt("Introduzca el tipo de via(calle/pasaje/avenida/bulevar):");
            if(tipoVia!=null){
                alert("Dato introducido");
            }
            
            nombreVia = prompt("Introduzca el nombre de la via: ");
            if(nombreVia!=null){
                alert("Dato introducido");
            }
            numeroEdificio = prompt("Introduzca el numero del edificio: ");
            if(numeroEdificio!=null){
                alert("Dato introducido");
            }
            codigoPoatal = prompt("Introduzca el codigo postal: ");
            if(codigoPoatal!=null){
                alert("Dato introducido");
            }
            planta = prompt("Introduzca numero de la planta: ");
            if(planta!=null){
                alert("Dato introducido");
            }

            do {

                puerta = prompt("Introduzca la puerta: ");

                if (puerta <= 0 || puerta == null) {
                    seguir = true;
                } else {
                    seguir = false;
                    alert("Dato introducido");
                }

            } while (seguir == true);

            propietario = prompt("Introduzca el nombre del propietario: ");
            if(propietario!=null){
                alert("Dato introducido");
            }


            let edificio = new Edificio(tipoVia,nombreVia,numeroEdificio,codigoPoatal);


}