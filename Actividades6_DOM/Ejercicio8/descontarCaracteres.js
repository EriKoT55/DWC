document.addEventListener("DOMContentLoaded", function(event) {
    let textarea = document.getElementById('areatexto');
    let nodoParrafo = document.createElement('p');
    nodoParrafo.id = 'parrafoCaracteres'
    let nodoTextoParrafo = document.createTextNode(`Pots escriure ${textarea.maxLength - textarea.value.length} caràcters`)

    nodoParrafo.appendChild(nodoTextoParrafo);
    document.getElementById('areaFormulario').appendChild(nodoParrafo);
});

