let random;
let array=[];

for(let i=0; i<20;i++){

    random=Math.floor(Math.random()*50+1);

   array[i]=random;

}

for(let j=0;j<array.length;j++){
    document.write("<br>");
    document.write(array[j]);
    
    for(let k=0;k<array[j];k++){
        document.write("*");
    }

}
