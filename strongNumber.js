const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("enter the No:",(n)=>{
    n=Number(n)
    if(isNaN(n)){
        console.log("invalid the number")
    }
    else{
        if(n>0){
            var sum=0;
            var copy=n;
            while(n>0){
                var rem=n%10

                var fact=1;
                for(var i=1;i<=rem;i++){
                    fact=fact*i
                }
                sum=sum + fact;
                
                n=Math.floor(n/10)
                
            }
            console.log(sum)
       
        if(copy==sum){
            console.log("strong")
        }else{
            console.log("not strong number")
        }
    }
}
})