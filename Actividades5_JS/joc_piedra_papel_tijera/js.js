let randomPosc;

let j1=["&#129308","&#129306","&#128406"];
let j2=["&#129307","&#129306","&#128406"];

randomj1=Math.floor(Math.random()*3);
randomj2=Math.floor(Math.random()*3);

document.write("j1 j2 <br>");
    document.write(j1[randomj1]);
    document.write(j2[randomj2]);

if(j1[randomj1]==j2[randomj2] || j1[randomj1]=="&#129308" && j2[randomj2]=="&#129307"){
    document.write("<br> empate");
}else if(j1[randomj1]=="&#129308" && j2[randomj2]=="&#128406" || j1[randomj1]=="&#128406" && j2[randomj2]=="&#129306" || j1[randomj1]=="&#129306" && j2[randomj2]=="&#129307"){
    document.write("<br> j1 gana");
}else{
    document.write("<br> j2 gana");
}

