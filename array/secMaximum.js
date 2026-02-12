let arr=[10,20,5,80,100,39,90];
let max=Math.max(arr[0],arr[1]);
let Smax=Math.max(arr[0],arr[1]);
for(let i=2;i<arr.length;i++){
    if(max<arr[i]){
        Smax=max;
        max=arr[i]
    }else 
        if(arr[i]>Smax){
            Smax=arr[i]
        }
}
console.log(Smax)