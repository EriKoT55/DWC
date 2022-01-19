function CarritoCompra() {
    this.carrito = new Array();

    this.localizarItemCarrito = function (producto) {
        // AÑADIR CÓDIGO AQUÍ
        //CREO VARIABLE PARA GUARDAR LA POSICION DEL PRODUCTO
        let result;

        for (let i = 0; i < this.carrito.length; i++) {
                if (this.carrito[i][0] == producto) {
                    result = i;
                  
                } else{
                    result= -1;
                }
        }
       return result
    }

    this.introducirItemCarrito = function (producto, cantidad) {
        this.carrito.push(new Array(producto, cantidad));
    }


    this.borrarItemCarrito = function (producto, cantidad) {
        let posicionItemCarrito = localizarItemCarrito(producto);

        // AÑADIR CÓDIGO AQUÍ

    }

}



let carrito1 = new CarritoCompra();


carrito1.introducirItemCarrito("pan", 3);
carrito1.introducirItemCarrito("leche", 2);

 //PRUEBAS
 /*FUNCIONA */
 for(let i=0;i<carrito1.carrito.length;i++){
    if(carrito1.carrito[i][0]=="leche"){
        console.log(i);
        console.log(carrito1.carrito[i][0]);
    }
}

  //console.log(carrito1.carrito.length);
console.log(carrito1.localizarItemCarrito("leche"));