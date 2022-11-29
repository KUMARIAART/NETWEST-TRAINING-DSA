var str="noon";
function palindrome(str){
    if(str==""){
        return true
    }
    else{
        return (str[0]==str[str.length-1] && palindrome(str.slice(1,str.length-1)))
    }
}
console.log(palindrome(str));
if(palindrome(str)){
    console.log(str," is plindrome");
}
else{
    console.log(str," is not a palindrome");
}