/* HACER CON FUNCIONES CONTRUCTORAS */
class Ordenador{

    constructor(marca,modelo,ram=4,disco=512,pulgadas=17){
        this.marca=marca;
        this.modelo=modelo;
        this.ram=ram;
        this.disco=disco;
        this.pulgadas=pulgadas;
    }

    toString(){

        return "El ordenador tiene estas caracteristicas: "
        +"Marca: "+this.marca+" Modelo: "+this.modelo+" Ram: "+this.ram+"GB"+" Disco duro: "
        +this.disco+"GB"+" Pulgadas: "+this.pulgadas+" pulgadas";

    }

}

Ordenador.prototype;

/*class Portatil extends Ordenador{

    constructor(marca,modelo,ram=4,disco=256,pulgadas=13,autonomia=4){
        super(marca,modelo,ram,disco,pulgadas);
        this.autonomia=autonomia;
    }

    toString(){

        return "El portatil tiene estas caracteristicas: "
        +"Marca: "+this.marca+" Modelo: "+this.modelo+" Ram: "+this.ram+"GB"+
        " Disco duro: "+this.disco+"GB"+" Pulgadas: "+this.pulgadas+" pulgadas"+
        " Autonomia: "+this.autonomia+"horas";

    }

}*/

export {Ordenador, Portatil};