let arr=[10,5,12,1,3]
let n=arr.length;
for(let i=0;i<n-1;i++){
    for(let j=0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr);

let arr1=[20,3,1,8,0]
let m=arr1.length
for(let i=0;i<m-1;i++){
    for(let j=0;j<m-1-i;j++){
        if(arr1[j]>arr1[j+1]){
            let temp=arr1[j]
            arr1[j]=arr1[j+1]
            arr1[j+1]=temp
        }
    }
}
console.log(arr1)