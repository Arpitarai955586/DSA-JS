// maximum number in an array
let arr=[10,40,5,100,30];
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log(max)

// minimum number in an array
let min=arr[0];
for(let i=1;i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i]
    }
}
console.log(min)