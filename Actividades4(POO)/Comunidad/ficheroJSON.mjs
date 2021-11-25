import {Edificio} from "./edificio.mjs";

let edificio1 = `{
    "tipoVia":"Calle",
    "nombreVia":"García Prieto",
    "numeroEdificio": "58A",
    "codigoPostal": "07010",
    "mapaPropietariosEdificio": {
        "A": {
            "1A": ["José Antonio López"],
            "2A": ["Luisa Martínez"],
            "3A": ["Marta Castellón", "José Montero"]
        },
        "B": {
            "1B": [],
            "2B": ["Antonio Pereira"],
            "3B": []
        }
    }
}`;

// guardar una variable el json el cual tiene edificio1 que es un map que dentro 
// tiene un map que dentro de este ultimo tiene un array

//json guardo un objeto en formato texto
let Edificio1=JSON.parse(edificio1);

//Ejemplo que utilización del objeto para obtener sus datos
//console.log(Edificio1.mapaPropietariosEdificio.A["1A"]);

/*
-Utilitzar l’arxiu amb l’objecte JSON amb informació del edifici1 per:
        -Convertir el JSON a objecte Edifici
-Utilitzar els métodes de l’objecte Edifici per mostrar pel navegador les següents dades.
*/
//Creo un nuevo Edificio 

function colorRandomFondo(){

    let red;
    let green;
    let blue;

        red= Math.floor(Math.random()*255);
        green= Math.floor(Math.random()*255);
        blue= Math.floor(Math.random()*255);
    
    document.body.style.backgroundColor=`rgb(${red},${green},${blue})`;

}

colorRandomFondo();

let ObjEdificio = new Edificio(Edificio1.tipoVia,Edificio1.nombreVia,Edificio1.numeroEdificio,
    Edificio1.codigoPostal);
    let map = new Map();

    //let map1 = mapaPropietariosEdificio;

    //No es posible escribir 
document.write("<h1>Comunitat de propietaris</h1>");    
document.write(ObjEdificio);