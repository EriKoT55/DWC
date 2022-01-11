var randomNums;
var randomBalls;

const NUMS_SIN_REPETIR = new Set();

randomBalls=Math.floor(Math.random()*11 +5);
randomNums=Math.floor(Math.random()*10 + 10102);


document.write("<h3>Entre estas "+randomBalls+" bolas... </h3>");

document.write("<div>");
for(let i=0;i<randomBalls;i++){
    randomNums=Math.floor(Math.random()*9 + 10102);
    document.write("<h1>&#"+randomNums+"</h1>");
    
    NUMS_SIN_REPETIR.add(randomNums);

}
document.write("</div>");


document.write("<h3>Hay "+NUMS_SIN_REPETIR.size+" bolas distintas</h3>");

document.write("<div>");
    for(x of NUMS_SIN_REPETIR){
        document.write("<h1 class='h11'>&#"+x+"</h1>");
    }
document.write("</div>");

