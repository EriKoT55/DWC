
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

let Edificio1 = JSON.parse(edificio1);

function RandomColorFondo(){

let red= Math.floor(Math.random()*256);
let green=Math.floor(Math.random()*256);
let blue =Math.floor(Math.random()*256);

document.body.style.backgroundColor=(`rgb(${red},${green},${blue})`);

}