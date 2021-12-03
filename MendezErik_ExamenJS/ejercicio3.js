

const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);

var numeroRegistroPaciente;
var nombrePaciente;
var numeroSSPaciente;
var direccionPaciente;
const agendaPacientes = new Map();
var contadorPacientes = 0;

numeroRegistroPaciente= registroPacientes.keys();
//Creo unos bucles para recorrer los map y el array y mostrar los datos por text, no me dio tiempo de todo
let text="";
for(let i=0;i<registroPacientes.size;i++){

    text+="numeroRegistro"+numeroRegistroPaciente.next().value;
    nombrePaciente=registroPacientes.get(numeroRegistroPaciente).keys();
    for(let e=0;e<registroPacientes.get(numeroRegistroPaciente);e++){
        text+="nombreCompleto"+nombrePaciente;
        for(){

        }
    }
}

console.log(text);
/*let Paciente1=JSON.parse(registroPacientes);

let paciente= new Paciente(Paciente1.);*/
