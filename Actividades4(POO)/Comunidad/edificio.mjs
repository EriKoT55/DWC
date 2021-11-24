


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

    //Esto sera un Map que ira dentro del primer Map
    agregarPuerta(numeroPlanta,numeroPuerta){

        let puerta=[];
        let planta= this.mapaPropietariosEdificio.get(numeroPlanta);

        planta.set(numeroPuerta,puerta);

    }
    //Esto sera un array, que va dentro del segundo Map
    agregarPropietario(nombrePropietario,numeroPlanta, numeroPuerta){

        let planta= this.mapaPropietariosEdificio.get(numeroPlanta);
        let puerta = planta.get(numeroPuerta);

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
    //Bastante complejo 3bucles, pero utilizando propiedades que no he visto como 
    //.next / .value / .keys
    imprimirTodosPropietarios(){
       

       for(let i=0;i<puerta.length;i++){
           
       }


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