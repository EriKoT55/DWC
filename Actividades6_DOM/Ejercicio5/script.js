function invertir() {

    //Conversion a array con los tres puntos
    //con el operador de propagacion, paso el node list a array
    let p = [...document.getElementsByTagName("p")];

  /*  for (let i = 0; i < body[0].getElementsByTagName("p").length; i++) {

        p[i] = body[0].getElementsByTagName("p")[i];
        //console.log(body[0].getElementsByTagName("p").length);

    }*/

    p.reverse();

    for (let i = 0; i < p.length; i++) {

        document.body.appendChild(p[i]);
        //console.log(body[0].getElementsByTagName("p").length);

    }


}