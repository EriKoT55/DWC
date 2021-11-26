


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
    //Bucle que me de todos los propietarios
    // Tres bucles, pero utilizando propiedades que no he visto como 
    //.next / .value / .keys

    imprimirTodosPropietarios(){
       //Guardo las claves en la variable
         let plantaClave=this.mapaPropietariosEdificio.keys();
        let text="";
        //let tab="&nbsp;&nbsp;&nbsp;&nbsp";
        for(let i=0;i<this.mapaPropietariosEdificio.size;i++){
            //cojo la clave con .next().value 
            let planta=plantaClave.next().value;

            // Me muestra lo que contiene esta clave
            text+="Planta: "+planta+"\n";
        
            //Guardo las claves en la variable
            let puertaClave=this.mapaPropietariosEdificio.get(planta).keys();
    
            for(let j=0;j<this.mapaPropietariosEdificio.get(planta).size;j++){
                //cojo la clave con .next().value 
                    let puerta=puertaClave.next().value;

                // Me muestra lo que contiene esta clave
                text+="     Puerta: "+puerta+" \n";
                
                for(let k=0;k<this.mapaPropietariosEdificio.get(planta).get(puerta).length;k++){
                    //Guardo los valores 
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

