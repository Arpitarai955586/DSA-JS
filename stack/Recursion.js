function temp(n){
    if(n==0) return;
    console.log(n)
    temp(n-1)
}
temp(5)

function tem(m){
    if(m==0) return;
    tem(m-1)
    console.log(m)
}
tem(5)