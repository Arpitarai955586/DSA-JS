const readline =require("readline")

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter the no :",(n)=>{
    n=Number(n)
    if(isNaN(n)){
        console.log("invalid number")
    }else{
        if(n>0){
            var fact=1;
            for(var i=1;i<=n;i++){
                fact=fact*i
            }
            console.log(fact)
        }
    }
})