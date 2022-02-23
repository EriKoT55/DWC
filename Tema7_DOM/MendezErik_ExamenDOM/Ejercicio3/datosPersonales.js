//isNaN()

function vaciarDatos() {

    let elementoFormulario = document.getElementById("formulario");

    let form1 = elementoFormulario.children[0];

    let inputs = form1.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {

        inputs[i].value = "";
        inputs[i].style.backgroundColor = "white";

        form1.getElementsByTagName("p").remove();

    }

}

function validarDatos(formulario,datos) {

    let elementoFormulario = document.getElementById(formulario);

    let form1 = elementoFormulario.children[0];
    let inputs = form1.getElementsByTagName("input");

    let nodeBeforeBTN = form1.children[10];

    let nodeBtnVal = form1.children[9];
    

        let nombre = inputs[0].value;

        let apellidos = inputs[1].value;

        //console.log(form1);

        if (!isNaN(nombre) || !isNaN(apellidos)) {
            let p = document.createElement("p");

            let nodeText = document.createTextNode("Error, deben ser palabras");

            p.appendChild(nodeText)

            form1.insertBefore(p, nodeBeforeBTN);
        }

        if (!isNaN(nombre)) {
            inputs[0].style.backgroundColor = "red";
        }

        if (!isNaN(apellidos)) {

            inputs[1].style.backgroundColor = "red";
        }

        if (isNaN(nombre) && isNaN(apellidos)) {
            let p = document.createElement("p");

            let nodeText = document.createTextNode(nombre + " " + apellidos);

            p.appendChild(nodeText)

            form1.insertBefore(p, nodeBtnVal);
        }

    
    

        let form2=elementoFormulario.children[1];

        let nodeBeforeBTN2=form2.children[16];

        form2.style.backgroundColor = "red";

        
            let p = document.createElement("p");

            let nodeText = document.createTextNode("Error, No se eligio ningun rango");

            p.appendChild(nodeText)

            form2.insertBefore(p, nodeBeforeBTN2);
    


}

function validarDatos(formulario,) {

    let elementoFormulario = document.getElementById(formulario);

    let form1 = elementoFormulario.children[0];
    let inputs = form1.getElementsByTagName("input");

    let nodeBeforeBTN = form1.children[10];

    let nodeBtnVal = form1.children[9];
    

        let nombre = inputs[0].value;

        let apellidos = inputs[1].value;

        //console.log(form1);

        if (!isNaN(nombre) || !isNaN(apellidos)) {
            let p = document.createElement("p");

            let nodeText = document.createTextNode("Error, deben ser palabras");

            p.appendChild(nodeText)

            form1.insertBefore(p, nodeBeforeBTN);
        }

        if (!isNaN(nombre)) {
            inputs[0].style.backgroundColor = "red";
        }

        if (!isNaN(apellidos)) {

            inputs[1].style.backgroundColor = "red";
        }

        if (isNaN(nombre) && isNaN(apellidos)) {
            let p = document.createElement("p");

            let nodeText = document.createTextNode(nombre + " " + apellidos);

            p.appendChild(nodeText)

            form1.insertBefore(p, nodeBtnVal);
        }

    
    

        let form2=elementoFormulario.children[1];

        let nodeBeforeBTN2=form2.children[16];

        form2.style.backgroundColor = "red";

        
            let p = document.createElement("p");

            let nodeText = document.createTextNode("Error, No se eligio ningun rango");

            p.appendChild(nodeText)

            form2.insertBefore(p, nodeBeforeBTN2);
        

    


}