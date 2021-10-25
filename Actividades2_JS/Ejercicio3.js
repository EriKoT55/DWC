
let random;
let nums=[];
var uno,dos,tres,cuatro,cinco,seis;
for(let j=1;j<=50;j++){

    
    for(let i=0;i<49;i++){
           
           nums[i]=i+1;
        
        }
      
      uno = Math.floor(Math.random()*nums.length);
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
