function CarritoCompra() {
    this.carrito = new Array();

    this.localizarItemCarrito = function (producto) {
        // AÑADIR CÓDIGO AQUÍ


        for (let i = 0; i < this.carrito.length; i++) {
                if (this.carrito[i][0] == producto) {
                    return i;
                } 
        }
       return -1;
    }

    this.introducirItemCarrito = function (producto, cantidad) {
        this.carrito.push(new Array(producto, cantidad));
    }


    this.borrarItemCarrito = function (producto, cantidad) {
        let posicionItemCarrito = this.localizarItemCarrito(producto);

        // AÑADIR CÓDIGO AQUÍ
        this.carrito[posicionItemCarrito][1]-=cantidad;
        
        if(this.carrito[posicionItemCarrito][1]<=0){

            this.carrito.splice(posicionItemCarrito,1);

        }

    }

}


let carrito1 = new CarritoCompra();


carrito1.introducirItemCarrito("pan", 3);
carrito1.introducirItemCarrito("leche", 2);
carrito1.introducirItemCarrito("sal",5);
console.log(carrito1.localizarItemCarrito("pan"));
carrito1.borrarItemCarrito("sal",5);

console.log(carrito1.carrito);

 //PRUEBAS
 /*FUNCIONA */
 /*for(let i=0;i<carrito1.carrito.length;i++){
    if(carrito1.carrito[i][0]=="pan"){
        console.log(i);
        console.log(carrito1.carrito[i][0]);
    }
}*/

  //console.log(carrito1.carrito.length);
