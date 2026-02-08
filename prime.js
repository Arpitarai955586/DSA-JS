
const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter the no :",(n)=>{
    n=Number(n);

    if(isNaN(n)){
        console.log("invalid number")
    }
  else{
    if(n>0){
        var primeHai=true;
        for(var i=2;i<=Math.floor(n/2);i++){
            if(n%i===0)
                primeHai=false;
            break;
        }
    }
    console.log(primeHai)
  }

})