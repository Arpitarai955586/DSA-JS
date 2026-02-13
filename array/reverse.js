let arr=[10,20,30,40,50];
let temp=new Array(arr.length);
let j=0;
for(let i=arr.length;i>=0;i--){
      temp[j]=arr[i];
      j++;  
} 
console.log(temp)
// without using extra space
let i=0;
let h=arr.length-1;
while(i!=h){
    let temp=arr[i];
    arr[i]=arr[h];
    arr[h]=temp;
    i++;
    h--;
}
console.log(arr)