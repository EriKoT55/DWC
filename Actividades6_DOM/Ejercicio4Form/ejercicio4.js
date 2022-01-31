
function habilitarSelect(selectID) {
    /*habilita quan el checkbox on es troba sigui seleccionat i ha de deshabilitar el
    select si el checkbox es deshabilita. */

    let select = document.getElementById(selectID);

    //console.log(selectMarcaBici);

    if (select.disabled) {
        select.disabled=false;
    } else {
        select.disabled=true;
    }

}



function retornaValor() {

    let form = document.getElementById('nombre');
     console.log(form.value);
 
 }
 
 
 function validarFormulario(formID){
     retornaValor();
 }