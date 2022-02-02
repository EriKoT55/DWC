function habilitarSelect(selectID) {
    /*habilita quan el checkbox on es troba sigui seleccionat i ha de deshabilitar el
    select si el checkbox es deshabilita. */

    let select = document.getElementById(selectID);

    //console.log(selectMarcaBici);

    if (select.disabled) {
        select.disabled = false;
    } else {
        select.disabled = true;
    }

}



function retornaValor(elementForm) {

    let tipo = elementForm.type;

    if (tipo == "text" || tipo == "textarea") {
        valor = elementForm.value;
    } else if (tipo == "checkbox" || tipo == "radio") {
        if (elementForm.checked == true) {
            valor = elementForm.value;
        }
    }else if (tipo=="select-multiple"){

        let arraySelects = [];

        for(let i=0; i<elementForm.options.length;i++){

            if(elementForm.options.selected==true){
                valor=arraySelects.push(elementForm.options.value);
            }

        elementForm.options[];

    }else if(tipo="select-one"){

        let indexSelect= elementForm.selectedIndex;

        elementForm.options[indexSelect];

    }

    return valor;

}

// Pasar el elemento del formulario a retorna valor, para poder trabajar 
function validarFormulario(formID) {

    let form = document.getElementById(formID);

    for (let elemento of form.elements) {

        retornaValor(elemento);

    }

}