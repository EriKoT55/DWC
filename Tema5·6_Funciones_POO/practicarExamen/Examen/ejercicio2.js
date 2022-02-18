class Paciente{

    comprobarPatrones(elementoAComprobar, tipoComprobacion) {
        let patronNumeroRegistro=/^[A-ZÁÉÍÚÓÇ]{3}[0-9]{3}$/; // Contiene el patrón para comprobar el número de registro
        let patronNombreCompleto=/^[A-ZÁÉÍÚÓÇ]{1}[a-záéíóúç]+\s[A-Z]{1,2}\.$/; // Contiene el patrón para comprobar el nombre
        let patronNumeroSS=/^[0-9]{1,9}$/; // Contiene el patrón para comprobar el número de la seguridad social
        let patronDireccion=/^(Av\.|C\/){1}[A-ZÁÉÍÚÓÇ]{1}[a-záéíóúçñ]+\s?[a-záéíóúçñ\s]*\,\s[0-9]+$/; // Contiene el patrón para comprobar la dirección
                                                                    //METO EL ESPACIO DENTRO DE LOS CORCHETES
                                                                    // YA QUE ASI SE PERMITE CUALQUIERA DE LO
                                                                    // QUE ESTA DENTRO Y PUEDO LETRA/S, PALABRA/S
                                                                    // Y ESPACIO/S       
        let patrones = new Map([
            ['numeroRegistro', patronNumeroRegistro],
            ['nombre', patronNombreCompleto],
            ['numeroSS', patronNumeroSS],
            ['direccion', patronDireccion]
        ]);
        
        return patrones.get(tipoComprobacion).test(elementoAComprobar);
    }

    constructor(numeroRegistro,nombreCompleto,numeroSS,direccion){
        if(this.comprobarPatrones(numeroRegistro,"numeroRegistro")){
            this.numeroRegistro=numeroRegistro;
        }
        if(this.comprobarPatrones(nombreCompleto,"nombre")){
            this.nombreCompleto=nombreCompleto;
        }
        if(this.comprobarPatrones(numeroSS,"numeroSS")){
            this.numeroSS=numeroSS;
        }
        if(this.comprobarPatrones(direccion,"direccion")){
            this.direccion=direccion;
        }
    }
    
    

    modificarNumeroRegistro(nuevoNumeroRegistro){
        if(this.comprobarPatrones(nuevoNumeroRegistro,"numeroRegistro")){
            this.numeroRegistro=nuevoNumeroRegistro;
        }
    }

    modificarNombreCompleto(nuevonombreCompleto){
        if(this.comprobarPatrones(nuevonombreCompleto,"nombre")){
            this.nombreCompleto=nuevonombreCompleto;
        }
    }

    modificarNumeroSS(nuevoNumeroSS){
        if(this.comprobarPatrones(nuevoNumeroSS,"numeroSS")){
            this.numeroSS=nuevoNumeroSS;
        }
        
    }

    modificarDireccion(nuevaDireccion){
        if(this.comprobarPatrones(nuevaDireccion,"direccion")){
            this.direccion=nuevaDireccion;
        }
        
    }

    /* AL NO ESPECIFICAR COMO QUIERE QUE IMPRIMAMOS LOS VALORES, 
        OPTO POR DEVOLVERLOS BASTANTE SENCILLO */
    imprimirNumeroRegistro(){
        return this.numeroRegistro;
    }

    imprimirNombreCompleto(){
        return this.nombreCompleto;
    }

    imprimirNumeroSS(){ 
        return this.numeroSS;
    }

    imprimirDireccion(){
        return this.direccion;
    }
}


let paciente1 = new Paciente("ABC123","Erik MM.","123456789","C/Federico lorca, 50");
let paciente2= new Paciente("ECZ456","Pepe J.","123456781","Av.Mis huevos, 20");
console.log(paciente1);
paciente1.modificarDireccion("Av.Argentina, 123");
console.log(paciente1);
console.log(paciente2);