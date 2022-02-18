
class Edificio {

    constructor(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
        this.tipoVia = tipoVia;
        this.nombreVia = nombreVia;
        this.numeroEdificio = numeroEdificio;
        this.codigoPostal = codigoPostal;
        this.mapaPropietariosEdificio = new Map();
    }

    agregarPlanta(numeroPlanta){
       const planta= new Map();
       this.mapaPropietariosEdificio.set(numeroPlanta,planta);
    }

    agregarPuerta(numeroPlanta,numeroPuerta){
        const puerta=[];
        let planta=this.mapaPropietariosEdificio.get(numeroPlanta);
        planta.set(numeroPuerta,puerta);
    }

        //metemos la propietario dentro del array
    agregarPropietario(nombrePropietario,numeroPlanta,numeroPuerta){

        let planta=this.mapaPropietariosEdificio.get(numeroPlanta)
        let puerta=planta.get(numeroPuerta);

        puerta.push(nombrePropietario);
    }

    imprimirCodigoPostal(){
        return "Código postal:"+this.codigoPostal;
    }
    imprimirNombreVia(){
        return "Nombre de la via :"+this.nombreVia;
    }
    imprimirNumeroEdificio(){
        return "Numero del edificio :"+this.numeroEdificio;
    }
    imprimirTipoVia(){
        return "Tipo de la via: "+this.tipoVia;
    }
    imprimirTodosPropietarios(){

        let plantaClave= this.mapaPropietariosEdificio.keys();
        let text="";

        for(let i=0;i<this.mapaPropietariosEdificio.size;i++){
            let planta=plantaClave.next().value;
            
            text+="Planta: "+planta+"\n";
            let puertaClave=this.mapaPropietariosEdificio.get(planta).keys();
            for(let j=0;j<this.mapaPropietariosEdificio.get(planta).size;j++){
                let puerta=puertaClave.next().value;

                text+="     Puerta: "+puerta+"\n";
                for(let k=0;k<this.mapaPropietariosEdificio.get(planta).get(puerta).length;k++){
                    let propietario=this.mapaPropietariosEdificio.get(planta).get(puerta);
                    
                    text+="        "+propietario[k]+"\n";
                }
            }
        }

        return text;        
    }

    modificarCodigoPostal(nuevoCodigoPostal){
        this.codigoPostal=nuevoCodigoPostal;
    }
    modificarNombreVia(nuevoNombreVia){
        this.nombreVia=nuevoNombreVia;
    }
    modificarNumeroEdificio(nuevoNumeroEdificio){
        this.numeroEdificio=nuevoNumeroEdificio;
    }
    modificarTipoVia(nuevoTipoVia){
        this.tipoVia=nuevoTipoVia;
    }

}


export {Edificio};