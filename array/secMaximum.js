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

let array=[10,20,30,40,40,40]
let max1=Math.max(array[0],array[1]);
let Smax1=Math.max(array[0],array[1]);
for(let i=2;i<array.length;i++){
    if(max1<array[i]){
        Smax1=max1;
        max1=array[i]
    }
    else 
        if(array[i]>Smax1 && array[i]<max1){
            Smax1=array[i]
        }
    
}
console.log(Smax1)