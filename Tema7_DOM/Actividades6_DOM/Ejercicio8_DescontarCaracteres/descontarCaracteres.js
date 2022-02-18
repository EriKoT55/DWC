document.addEventListener("DOMContentLoaded", function(event) {
    let textarea = document.getElementById('areatexto');
    let nodoParrafo = document.createElement('p');
    nodoParrafo.id = 'parrafoCaracteres'
    let nodoTextoParrafo = document.createTextNode(`Pots escriure ${textarea.maxLength - textarea.value.length} caràcters`)

    nodoParrafo.appendChild(nodoTextoParrafo);
    document.getElementById('areaFormulario').appendChild(nodoParrafo);
});

function insertarNumeroCaracteres(parrafo, areaTexto){

    let textArea= document.getElementById(areaTexto);

    let p = document.getElementById(parrafo);

    let maxLength=textArea.getAttribute("maxlength");

    let numCaracteres= maxLength-textArea.value.length;

    p.innerHTML="Pots escriure "+numCaracteres+" caracteres";

}