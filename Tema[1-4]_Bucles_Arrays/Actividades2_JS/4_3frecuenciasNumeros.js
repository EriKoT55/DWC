let cont,random;

let numeros= new Map();

for(let i=1;i<=10;i++){

    numeros.set(i,0);

}


for(let j=1;j<=10000;j++){

    random=Math.floor(Math.random()*10+1);

    // No entiendo ese +1
    // Introduzco en el map la clave del 1 al 10 aleatoria, despues meto los numeros aleatorios
    // cogiendolos del mapa numeros.set(random) cogiendolos con la funcion numeros.get(random) y le sumo 
    // para que literal funcione si no la pongo me da 0, pongo +1 para que los valores que me da el get
    // 
    numeros.set(random,(numeros.get(random)+1));
}

for(let i=1;i<10;i++){

   document.write("<br>"+" "+numeros.get(i));

}