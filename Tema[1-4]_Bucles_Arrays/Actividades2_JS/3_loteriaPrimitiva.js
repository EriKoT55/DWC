
var random;
var nums=[];
var uno,dos,tres,cuatro,cinco,seis;
for(let j=1;j<=50;j++){

    
    for(let i=0;i<49;i++){

           //Esto lo hago por que el array va de 0 a 49 
           //para que sea de 1 a 50 y así tenga coherencia con el primer bucle
           nums[i]=i+1;
        
        }
      //Me saca numeros aleatorios del 1 al 50 y los guardo en la variable uno
      uno = Math.floor(Math.random()*nums.length);
      // Con splcie elimino definitivamente los elementos que quiera, en este ejemplo elimino un elemento de nums, el porque hago esto ni idea
      nums.splice(uno-1,1);
      
      dos = Math.floor(Math.random()*nums.length);
        nums.splice(dos-1,1);

      tres = Math.floor(Math.random()*nums.length);
      nums.splice(tres-1,1);

      cuatro = Math.floor(Math.random()*nums.length);
      nums.splice(cuatro-1,1);

      cinco = Math.floor(Math.random()*nums.length);
      nums.splice(cinco-1,1);

      seis = Math.floor(Math.random()*nums.length);
      nums.splice(seis-1,1);

        document.write(" "+uno+" "+dos+" "+" "+tres+" "+cuatro+" "+cinco+" "+seis);
        document.write("<br>");
}
