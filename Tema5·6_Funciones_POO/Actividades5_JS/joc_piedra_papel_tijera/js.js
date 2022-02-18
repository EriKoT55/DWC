let randomPosc;

let j1=["&#129308","&#129306","&#128406"];
let j2=["&#129307","&#129306","&#128406"];

randomj1=Math.floor(Math.random()*3);
randomj2=Math.floor(Math.random()*3);


document.write("&nbsp;&nbsp;&nbsp;"+" j1 &nbsp;&nbsp;&nbsp;&nbsp; j2 ");

document.write("<div>");
    document.write("<h1>"+j1[randomj1]+"</h1>");
    document.write("<h1>"+j2[randomj2]+"</h1>");
document.write("</div>");

if(j1[randomj1]==j2[randomj2] || j1[randomj1]=="&#129308" && j2[randomj2]=="&#129307"){
    document.write("<h2>&nbsp; empate </h2>");
}else if(j1[randomj1]=="&#129308" && j2[randomj2]=="&#128406" || j1[randomj1]=="&#128406" && j2[randomj2]=="&#129306" || j1[randomj1]=="&#129306" && j2[randomj2]=="&#129307"){
    document.write("<h2>&nbsp; j1 gana </h2>");
}else{
    document.write("<h2>&nbsp; j2 gana </h2>");
}

