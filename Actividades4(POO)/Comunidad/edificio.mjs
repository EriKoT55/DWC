class Edificio{

    constructor(tipoVia,nombreVia,numeroEdificio,codigoPostal){

        const mapaPropietariosEdificio = new Map();

        this.tipoVia=tipoVia;
        this.nombreVia=nombreVia;
        this.numeroEdificio=numeroEdificio;
        this.codigoPostal=codigoPostal;
        //Es un Map
        this.mapaPropietariosEdificio=mapaPropietariosEdificio;
    }

    //Esto sera introducido dentro del Map siendo este la CLAVE
    agregarPlanta(numeroPlanta){
      let planta=new Map();
      this.mapaPropietariosEdificio.set(numeroPlanta,planta);
    }

    //Esto sera un  mapa
    agregarPuerta(numeroPlanta,numeroPuerta){

        let puerta=[];
        let planta= this.mapaPropietariosEdificio.get(numeroPlanta);

        planta.set(numeroPuerta,puerta);

    }
    //Esto sera un array
    /*Mirar darle otra vuelta */
    agregarPropietario(nombrePropietario,numeroPlanta, numeroPuerta){

        let planta= this.mapaPropietariosEdificio.get(numeroPlanta);
        let puerta = this.mapaPropietariosEdificio.get(numeroPuerta);

        puerta.push(nombrePropietario);
    }

    imprimirCodigoPostal(){
        return "Codigo Postal: "+this.codigoPostal;
    }
    imprimirNombreVia(){
        return "Nombre de la via: "+this.nombreVia;
    }
    imprimirNumeroEdificio(){
        return "Numero de edificio: "+this.numeroEdificio;
    }
    imprimirTipoVia(){
        return "Tipo de via: "+ this.tipoVia;
    }
    //Bucle el cual me de todos los propietarios
    imprimirTodosPropietarios(){
        //return "Todos los propietarios: "+;
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