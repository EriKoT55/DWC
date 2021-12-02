class Edificio{

     constructor(tipoVia,nombreVia,numeroEdificio,codigoPostal){

        this.tipoVia=tipoVia;
        this.nombreVia=nombreVia;
        this.numeroEdificio=numeroEdificio;
        this.codigoPostal=codigoPostal;
        this.mapaPropietariosEdificio= new Map();
     }

     agregarPlanta(numeroPlanta){
        
        let planta=new Map();
        this.mapaPropietariosEdificio.set(numeroPlanta,planta);

     }
     agregarPuerta(numeroPlanta,numeroPuerta){

        let puerta=[];
        let planta=this.mapaPropietariosEdificio.get(numeroPlanta);

        planta.set(numeroPuerta,puerta);

     }
     agregarPropietario(nombrePropietario,numeroPlanta,numeroPuerta){
        //acabar

        let planta = this.mapaPropietariosEdificio.get(numeroPlanta);
        let puerta= planta.get(numeroPuerta);

        puerta.push(nombrePropietario);

     }

     imprimirCodigoPostal(){
         return "Codigo Postal:"+this.codigoPostal;
     }
     imprimirNombreVia(){
         return "Nombre de la via:"+this.nombreVia;
     }
     imprimirNumeroEdificio(){
         return "Numero del edificio: "+this.numeroEdificio
     }
     imprimirTipoVia(){
         return "Tipo de via"+this.tipoVia;
     }

     imprimirTodosPropietarios(){
         let plantaKeys=this.mapaPropietariosEdificio.keys();
         return plantaKeys;
     }
     modificarCodigoPostal(nuevocodigoPostal){
        return this.codigoPostal=nuevocodigoPostal;
     }
     modificarNombreVia(nuevoNombreVia){
        return this.nombreVia=nuevoNombreVia;
     }
     modificarNumeroEdificio(nuevoNumeroEdificio){
        return this.numeroEdificio=nuevoNumeroEdificio;
     }
     modificarTipoVia(nuevoTipoVia){
        return this.tipoVia=nuevoTipoVia;
     }
}
export {Edificio};