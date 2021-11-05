

function primo(num){
   
	for (let x = 2; x*x<=num; x++) {
		if (num%x == 0){
            return false;
        }
	}

    return true;

}

let primos=[];
for(let i=0;i<1000;i++){

   if(primo(i)==true){
        if(=undefined){//acabar
        primos[i]=i;
        }
   }
   document.write(primos[i]);
}

