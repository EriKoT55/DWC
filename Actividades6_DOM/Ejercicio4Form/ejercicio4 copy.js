
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

    let text="";

    let nombre = document.getElementById("nombre");
    text+=nombre.value+" ";

    //Con getElementsByTagName(), se cogen los valores con un for
    let textarea = document.getElementsByName("mensaje");
    for(let i=0;i<textarea.length;i++){
        text+=textarea[i].value+" ";
    }
    
    let radioBtn = document.getElementsByName("sexo");
    for (let i=0;i<radioBtn.length;i++){

        if(radioBtn[i].checked==true){
            text+= radioBtn[i].value+" ";
        }

    }

    let selectBici = document.getElementById("marcaBici");

    for(let i=0; i<selectBici.length;i++){

       if(selectBici.options[i].selected==true){
        text+= selectBici[i].value+" " ;
       }

    }

    let selectCoche = document.getElementById("marcaCoche");

    for(let i=0; i<selectCoche.length;i++){

        if(selectCoche.options[i].selected==true){
            //ME GUSTARIA NO COGER EL VALUE SI NO EL COTENIDO
            text+=selectCoche.value+" ";
        }

    }

    console.log(text);

     /*LO UTILICE PARA MOSTRAR EL CONTENIDO DEL TEXTO CON UN P pero no se

     document.getElementById("body").innerHTML=text;

    let p=document.createElement("p");

    let contenidoP= document.createTextNode(text);

    document.write(p.appendChild(contenidoP));*/
    
 
 }
 
 // Pasar el elemento del formulario a retorna valor, para poder trabajar 
 function validarFormulario(formID){

        retornaValor();
    
    }
 }