
class Paciente{

    constructor(numeroRegistro,nombreCompleto,numeroSS,direccion){
        this.numeroRegistro=numeroRegistro;
        this.nombreCompleto=nombreCompleto;
        this.numeroSS=numeroSS;
        this.direccion=direccion;
    }

    comprobarPatrones(elementoAComprobar, tipoComprobacion) {
        let patronNumeroRegistro; // Contiene el patrón para comprobar el número de registro
        let patronNombreCompleto; // Contiene el patrón para comprobar el nombre
        let patronNumeroSS; // Contiene el patrón para comprobar el número de la seguridad social
        let patronDireccion; // Contiene el patrón para comprobar la dirección
    
        let patrones = new Map([
            ['numeroRegistro', patronNumeroRegistro],
            ['nombre', patronNombreCompleto],
            ['numeroSS', patronNumeroSS],
            ['direccion', patronDireccion]
        ]);
        
        //Si se a introducido uno de los siguientes se hace su respectiva comprobacion y devulve true o false si la comprobacion es correcta
    
        if(tipoComprobacion=='numeroRegistro'){
    
            patronNumeroRegistro=/^[A-Z]{3}[0-9]{3}$/;
    
            if(patronNumeroRegistro.test(elementoAComprobar)==true){
                return true
            }else{
                return false
            }
    
        }else if(tipoComprobacion=='nombre'){
    
            patronNombreCompleto =/^[A-ZÁÉÍÓÚÜÇ]{1}[a-záéíóúüç]\/s{1}[A-ZÁÉÍÓÚÜÇ]{1,2}\.$/;
           
            if(patronNombreCompleto.test(elementoAComprobar)==true){
                return true;
            }else{
                return false;
            }
    
        }else if(tipoComprobacion=='numeroSS'){
    
            patronNumeroSS=/^[0-9]{1,9}$/;
    
            if(patronNumeroSS.test(elementoAComprobar)==true){
                return true;
            }else{
                return false;
            }
    
        }else if(tipoComprobacion=='direccion'){
    
            patronDireccion=/((^(C\/|Av\.){1}[A-Z]{1}[A-Za-z])|(^(C\/|Av\.){1}[A-Z]{1}([A-Za-z]\/s{1})+))\,[0-9]+$/;
    
            if(patronDireccion.test(elementoAComprobar)==true){
                return true;
            }else{
                return false;
            }
    
        }
    
    }
    modificarNumeroRegistro(nuevoNumeroRegistro){
        //Si el valor modificado es correcto se aplicaran los cambios
        if(comprobarPatrones(elementoAComprobar, tipoComprobacion)==true){
            this.numeroRegistro=nuevoNumeroRegistro;
        }
    }
    modificarNombreCompleto(nuevonombreCompleto){
         //Si el valor modificado es correcto se aplicaran los cambios
        if(comprobarPatrones(elementoAComprobar, tipoComprobacion)==true){
            this.nombreCompleto=nuevonombreCompleto;
        }
    }
    modificarNumeroSS(nuevoNumeroSS){
         //Si el valor modificado es correcto se aplicaran los cambios
        if(comprobarPatrones(elementoAComprobar, tipoComprobacion)==true){
            this.numeroSS=nuevoNumeroSS;
        }
    }
    modificarDireccion(nuevaDireccion){
         //Si el valor modificado es correcto se aplicaran los cambios
        if(comprobarPatrones(elementoAComprobar, tipoComprobacion)==true){
            this.direccion=nuevaDireccion;
        }
    }
    imprimirNumeroRegistro(){
        return "Numero de registro: "+this.numeroRegistro;
    }
    imprimitNombreCompleto(){
        return "Nombre completo:"+this.nombreCompleto;
    }
    imprimirNumeroSS(){
        return "Numero de la seguridad social: "+this.numeroSS;
    }
    imprimirDireccion(){
        return "Direccion: "+this.direccion;
    }
}
