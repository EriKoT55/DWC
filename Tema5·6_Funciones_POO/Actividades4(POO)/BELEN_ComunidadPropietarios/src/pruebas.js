import { Edificio } from "./edificio.js";

 
const edificio1 = new Edificio('calle', 'marques de la fontsanta', 60, '07005');
console.log(edificio1)
/* SALIDA:
    Edificio {
    tipoVia: 'calle',
    nombreVia: 'marques rubio',
    numeroEdificio: 70,
    codigoPostal: '07005',
    mapaPropietariosEdificio: Map(0) {},
    modificarTipoVia: [Function (anonymous)],
    modificarNombreVia: [Function (anonymous)],
    modificarNumeroEdificio: [Function (anonymous)],
    modificarCodigoPostal: [Function (anonymous)],
    imprimirTipoVia: [Function (anonymous)],
    imprimirNombreVia: [Function (anonymous)],
    imprimirNumeroEdificio: [Function (anonymous)],
    imprimirCodigoPostal: [Function (anonymous)],
    agregarPlanta: [Function (anonymous)],
    agregarPuerta: [Function (anonymous)],
    agregarPropietario: [Function (anonymous)],
    imprimirTodosPropietarios: [Function (anonymous)]
    }
*/

edificio1.agregarPlanta('1A');
edificio1.agregarPlanta('1B');
console.log(edificio1);
/* SALIDA:
    Edificio {
    tipoVia: 'calle',
    nombreVia: 'marques rubio',
    numeroEdificio: 70,
    codigoPostal: '07005',
    mapaPropietariosEdificio: Map(2) { '1A' => Map(0) {}, '1B' => Map(0) {} },
    modificarTipoVia: [Function (anonymous)],
    modificarNombreVia: [Function (anonymous)],
    modificarNumeroEdificio: [Function (anonymous)],
    modificarCodigoPostal: [Function (anonymous)],
    imprimirTipoVia: [Function (anonymous)],
    imprimirNombreVia: [Function (anonymous)],
    imprimirNumeroEdificio: [Function (anonymous)],
    imprimirCodigoPostal: [Function (anonymous)],
    agregarPlanta: [Function (anonymous)],
    agregarPuerta: [Function (anonymous)],
    agregarPropietario: [Function (anonymous)],
    imprimirTodosPropietarios: [Function (anonymous)]
    }
*/

edificio1.agregarPuerta('1A','3');
edificio1.agregarPuerta('1A','2');
edificio1.agregarPuerta('1B','1')
console.log(edificio1);
/* SALIDA:
    Edificio {
    tipoVia: 'calle',
    nombreVia: 'marques rubio',
    numeroEdificio: 70,
    codigoPostal: '07005',
    mapaPropietariosEdificio: Map(2) {
        '1A' => Map(2) { '3' => [], '2' => [] },
        '1B' => Map(1) { '1' => [] }
    },
    modificarTipoVia: [Function (anonymous)],
    modificarNombreVia: [Function (anonymous)],
    modificarNumeroEdificio: [Function (anonymous)],
    modificarCodigoPostal: [Function (anonymous)],
    imprimirTipoVia: [Function (anonymous)],
    imprimirNombreVia: [Function (anonymous)],
    imprimirNumeroEdificio: [Function (anonymous)],
    imprimirCodigoPostal: [Function (anonymous)],
    agregarPlanta: [Function (anonymous)],
    agregarPuerta: [Function (anonymous)],
    agregarPropietario: [Function (anonymous)],
    imprimirTodosPropietarios: [Function (anonymous)]
    }
*/

edificio1.agregarPropietario('Bel??n Laserna Belenguer','1A','3');
edificio1.agregarPropietario('Pedro Jimenez V??zquez','1A','3');
edificio1.agregarPropietario('Ana Mar??a Rodriguez Figuerola', '1A','2');
edificio1.agregarPropietario('Miguel L??pez L??pez','1B','1');
console.log(edificio1);
/* SALIDA:
    Edificio {
    tipoVia: 'calle',
    nombreVia: 'marques rubio',
    numeroEdificio: 70,
    codigoPostal: '07005',
    mapaPropietariosEdificio: Map(2) {
        '1A' => Map(2) { '3' => [Array], '2' => [Array] },
        '1B' => Map(1) { '1' => [Array] }
    },
    modificarTipoVia: [Function (anonymous)],
    modificarNombreVia: [Function (anonymous)],
    modificarNumeroEdificio: [Function (anonymous)],
    modificarCodigoPostal: [Function (anonymous)],
    imprimirTipoVia: [Function (anonymous)],
    imprimirNombreVia: [Function (anonymous)],
    imprimirNumeroEdificio: [Function (anonymous)],
    imprimirCodigoPostal: [Function (anonymous)],
    agregarPlanta: [Function (anonymous)],
    agregarPuerta: [Function (anonymous)],
    agregarPropietario: [Function (anonymous)],
    imprimirTodosPropietarios: [Function (anonymous)]
    }
*/

console.log(edificio1.imprimirTodosPropietarios());
/* SALIDA:
    Planta: 1A
        Puerta: 3
            Bel??n Laserna Belenguer
            Pedro Jimenez V??zquez
        Puerta: 2
            Ana Mar??a Rodriguez Figuerola
    Planta: 1B
        Puerta: 1
            Miguel L??pez L??pez
*/

edificio1.modificarTipoVia('avenida');
edificio1.modificarNombreVia('Marques de la Fontsanta');
edificio1.modificarNumeroEdificio('60A');
edificio1.modificarCodigoPostal('007005');
console.log(edificio1.imprimirTipoVia());
/* SALIDA:
    Tipo de via: avenida
*/

console.log(edificio1.imprimirNombreVia());
/* SALIDA:
    Nombre de la v??a: Marques de la Fontsanta
*/

console.log(edificio1.imprimirNumeroEdificio());
/* SALIDA:
    N??mero del edificio 60A
*/

console.log(edificio1.imprimirCodigoPostal());
/* SALIDA:
    C??digo Postal(CP): 007005
*/