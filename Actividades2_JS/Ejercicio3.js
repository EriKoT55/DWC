
let random;

const randoms= new Set([]);

for(let j=1;j<=50;j++){

document.write("<br>"+j+"-");
    for(let i=0;i<6;i++){
    random = Math.floor(Math.random()*51+1);
   
            document.write(" "+random);
        
        }
}