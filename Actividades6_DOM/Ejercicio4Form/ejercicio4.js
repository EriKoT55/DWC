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

const elementrosFunciones = {"text":"text",
    "textarea":"text",
    "checkbox":"check",
    "readio":"check",
    "select-multiple":"select-multiple",
    "select-one":"select-one"

}

const funcionesRetornar={

    'text':function(elementoForm){
        return elementoForm.value;
    }
    ,
    'check':function(elementoForm){
        let valor="";
        if(elementoForm.checked){
             
            valor = elementoForm.value;
            return valor;
        }
    }
    ,
    'select-multiple': function(elementoForm){
        let arraySelects = [];

        for(let i=0; i<elementoForm.options.length;i++){

            if(elementoForm.options.selected==true){
                arraySelects.push(elementoForm.options.value);
            }
        }

        return arraySelects;

    }
    ,
    "select-one":function (elementForm){
        let valor="";
        let indexSelect= elementForm.selectedIndex;

       valor= elementForm.options[indexSelect].value;
       return valor;
    }

};



function retornaValor(elementForm) {

    let tipo = elementForm.type;

  
   return  funcionesRetornar[elementForm[tipo]](elementForm);

    /*
      let valor="";
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
        }

    }else if(tipo=="select-one"){

        let indexSelect= elementForm.selectedIndex;

        valor=elementForm.options[indexSelect].value;

    }

    return valor;*/

}

// Pasar el elemento del formulario a retorna valor, para poder trabajar 
function validarFormulario(formID) {

    let form = document.getElementById(formID);
    let muestraPantalla="Resultado de la validacion: ";

    for (let elemento of form.elements) {

        retornaValor(elemento);
        muestraPantalla+=;
    }

}