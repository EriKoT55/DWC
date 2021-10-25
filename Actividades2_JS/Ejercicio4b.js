let nums = [];
let contador=0;


let random;

for(let i=0;i<10000;i++){
    
    random = Math.floor(Math.random()*10);
    
    nums[random]=nums[random]+1;// contador del array, tambien se puede hacer asi 
                                //  nums[random]+=1

}

