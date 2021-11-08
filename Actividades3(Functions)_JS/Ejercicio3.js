
function primo(num){
   
	for (let x = 2; x*x<=num; x++) {
		if (num%x == 0){
            return false;
        }
	}

    return true;

}


for(let i=1;i<=1000;i+=2){

   if(primo(i)){
    document.write("<br> "+i);
   }
  
}

