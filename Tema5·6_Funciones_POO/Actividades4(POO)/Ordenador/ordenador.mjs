/* HACER CON FUNCIONES CONTRUCTORAS */
//HERENCIA CON FUNCIONES, Prototype y __proto__(este ultimo esta obsoleto)
function Ordenador(marca,modelo,ram=4,disco=512,pulgadas=17){

        this.marca=marca;
        this.modelo=modelo;
        this.ram=ram;
        this.disco=disco;
        this.pulgadas=pulgadas;

}

Ordenador.prototype.toString = function(){

    return "El ordenador tiene estas caracteristicas: "
    +"\n Marca: "+this.marca+"\n Modelo: "+this.modelo+"\n Ram: "+this.ram+"GB"+"\n Disco duro: "
    +this.disco+"GB"+"\n Pulgadas: "+this.pulgadas+" pulgadas";

}


function Portatil (marca,modelo,ram=4,disco=256,pulgadas=13,autonomia=4){
    //puedes utilizar call en vez de prototype

    this.__proto__=new Ordenador(marca,modelo,ram,disco,pulgadas);

    this.autonomia=autonomia;

    this.toString=function(){

        return this.__proto__.toString+"\n Autonomia: "+this.autonomia+"horas";

    }

}

//HERENCIA CON CLASES
/*class Ordenador{

    constructor(marca,modelo,ram=4,disco=512,pulgadas=17){
        this.marca=marca;
        this.modelo=modelo;
        this.ram=ram;
        this.disco=disco;
        this.pulgadas=pulgadas;
    }

    toString(){

        return "El portatil tiene estas caracteristicas: "
        +"Marca: "+this.marca+" Modelo: "+this.modelo+" Ram: "+this.ram+"GB"+
        " Disco duro: "+this.disco+"GB"+" Pulgadas: "+this.pulgadas+" pulgadas";

    }

}*/
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