/* HACER CON FUNCIONES CONTRUCTORAS */
function Punto(coordX,coordY){

        this.X=coordX;
        this.Y=coordY;
    
//Como un setter(Metodo)
    this.cambiar=function(x,y){
        this.X=x;
        this.Y=y;
    }

//Muestra los valores del objeto
    this.toString=function(){
        return "("+this.X+","+this.Y+")";
    }

//Como un getter(Metodo)
    this.copia=function(){
        return new Punto(this.X,this.Y);
    }
//Funcion como tal, utilizar formula que nos dio
    this.suma=function(np){
        return  "("+(this.X+np.X)+","+(this.Y+np.Y)+")";
    }

    this.obetenerDistancia=function(np){
        
      let resX=((this.X)-(np.X));
      let resY=((this.Y)-(np.Y));
      let res1=Math.pow(resX,2)+Math.pow(resY,2);
      let resFin= Math.sqrt(res1);
        
        return "("+(resFin)+")";
    }

}

export {Punto};



