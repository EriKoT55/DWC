class Edificio{

    constructor(tipoVia,nombreVia,numeroEdificio,codigoPostal){

        this.tipoVia=tipoVia;
        this.nombreVia=nombreVia;
        this.numeroEdificio=numeroEdificio;
        this.codigoPostal=codigoPostal;
        //Esto es un Map
        this.mapaPropietariosEdificio=mapaPropietariosEdificio;
    }

    //Esto sera introducido dentro del Map siendo este la CLAVE
    agregarPlanta(numeroPlanta){



    }
    //Esto sera un VALOR que ira dentro de la CLAVE
    agregarPropietario(nombrePropietario,numeroPlanta, numeroPuerta){



    }
    //Esto sera un VALOR que ira dentro de la CLAVE
    agregarPuerta(numeroPlanta,numeroPuerta){

    }
    imprimirCodigoPoatal(){
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