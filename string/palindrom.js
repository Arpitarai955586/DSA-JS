const prompt=require("prompt-sync")()
let s=prompt("enter the string :")
let isPalindrom=true;
let i=0,j=s.length-1
while(i<j){
    if(s.charAt(i)!=s.charAt(j)){
        isPalindrom=false
        break
    }
    i++
    j--
}
if(isPalindrom){
    console.log("palindrom")
}else{
    console.log("not palindrom")
}