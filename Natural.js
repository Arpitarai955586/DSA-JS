var n=5
if(isNaN(n)){
    console.log("invalid number")
}else{
    if(n>0){
        var sum=0;
        for(var i=1;i<=n;i++){
            sum=sum + i;
        }
        console.log(sum)
    }
    else{
        console.log("should be poistive and more than 0")
    }
    
}