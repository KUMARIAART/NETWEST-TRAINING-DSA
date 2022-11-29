function reverce(str){
    if(str.length===0){
        return "";
    }
    else{
        return str[str.length-1]+reverce(str.slice(0,str.length-1))
    }
}
console.log(reverce("abcde"));