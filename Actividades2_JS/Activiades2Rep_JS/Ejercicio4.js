
const randoms = new Map();

for(let i =1;i<=10;i++){

    randoms.set(i,0);

}

for(let j=1;j<=10000;j++){

    random = Math.floor(Math.random()*10+1);

    randoms.set(random,(randoms.get(random)+1));

}

//Perfilar para que quede bonito
for(nums of randoms){

    document.write("<br>"+ nums);
}
// no consegui sumar el map ni con "for of" ni un "for" normal.