let arr=[0,1,1,2,2,3,3,4];

let j=1;
for(let i=0;i<arr.length-1;i++){
    if(arr[i]!=arr[i+1]){
     arr[j]=arr[i+1]
     j++
     
    };
}
for(let i=0;i<j;i++){
    console.log(arr[i])
}
// console.log(arr)