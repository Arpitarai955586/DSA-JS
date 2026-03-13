function fab(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fab(n-1) + fab(n-2)
}

let n=10;
for (let i=0;i<=n;i++){
// console.log(fab(i))
}

let a=0,b=1
console.log(a)
console.log(b)
for(let i=1;i<=5;i++){
    c=a+b
    console.log(c)
    a=b
    b=c
}
