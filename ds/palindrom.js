let prompt=require('prompt-sync')();
let num=Number(prompt("enter the number:"))


    let original=num
    let reverse=0
    while(num>0){
        let rem=num%10;
        reverse=reverse*10+rem;
        num=Math.floor(num/10)
    }
    if(original===reverse){
        console.log("palindom num")
    }else{
        console.log("not palindom number")
    }