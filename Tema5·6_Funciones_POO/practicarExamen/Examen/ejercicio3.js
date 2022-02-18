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

const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);

var numeroRegistroPaciente;
var nombrePaciente;
var numeroSSPaciente;
var direccionPaciente;
const agendaPacientes = new Map();
var contadorPacientes = 0;

for([registro,info] of registroPacientes){

    contadorPacientes++;

    numeroRegistroPaciente=registro;
   nombrePaciente=info.split(" (")[0];
   numeroSSPaciente=info.split(" (")[1].split(") ")[0];
   direccionPaciente=info.split(" -> ")[1];

   agendaPacientes.set(contadorPacientes,new Paciente(numeroRegistroPaciente,nombrePaciente,numeroSSPaciente,direccionPaciente));
   
}

console.log(agendaPacientes);
