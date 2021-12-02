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
        

        let planta = this.mapaPropietariosEdificio.get(numeroPlanta);
        let puerta= planta.get(numeroPuerta);

        puerta.push(nombrePropietario);

     }

     imprimirCodigoPostal(){
         return "Codigo Postal: "+this.codigoPostal;
     }
     imprimirNombreVia(){
         return "Nombre de la via: "+this.nombreVia;
     }
     imprimirNumeroEdificio(){
         return "Numero del edificio: "+this.numeroEdificio
     }
     imprimirTipoVia(){
         return "Tipo de via: "+this.tipoVia;
     }

     imprimirTodosPropietarios(){

         let plantaKeys=this.mapaPropietariosEdificio.keys();
         let text="";
         for(let i=0;i<this.mapaPropietariosEdificio.size;i++){
            let planta=plantaKeys.next().value;
            text+="Planta: "+planta+"\n";
            let puertaKeys=this.mapaPropietariosEdificio.get(planta).keys();
            for(let k=0;k<this.mapaPropietariosEdificio.get(planta).size;k++){
               let puerta=puertaKeys.next().value;

               text+="          Puerta: "+puerta+"\n";
               
               for(let e=0;e<this.mapaPropietariosEdificio.get(planta).get(puerta).length;e++){
                  let propietarios=this.mapaPropietariosEdificio.get(planta).get(puerta);
                  text+="           "+propietarios[e]+"\n";
               }
            }
         }

         return text;

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