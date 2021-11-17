

//Contructor
function Punto(x,y){

    this.x=x;
    this.y=y;

    //Como un setter(Metodo)
    this.cambiar=function(x,y){
        this.x=x;
        this.y=y;
    }

    //Como un getter(Metodo)
    this.copia=function(){
        return Punto;
    }

    //Funcion como tal, utilizar formula que nos dio
    this.suma=function(){

    }

}


var p = new Punto(1,2); 
console.log("p: " + p.toString());

