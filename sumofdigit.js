const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("enter the no :",(n)=>{
 n=Number(n);
 if(isNaN(n)){
    console.log("invalid number")
 }else{
    if(n>0){
        var sum=0;
        while(n>0){
            var rem=n%10;
            sum=sum+rem;
            n=Math.floor(n/10)
        }
        console.log(sum)
    }
 }
})