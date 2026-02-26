// fib=0,1,1,2,3,5,8,13

function fib(n){
    if(n<=1){
         return n;
    }
        let a=0,b=1;
        for(let i=2;i<=n;i++){
            let c=a+b;
            a=b;
            b=c;
            console.log(c)
        }
        return b;
   }
   fib(10)