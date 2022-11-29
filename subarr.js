var arr=[1,2,3,4,5];
function subarray(arr,s,e){
    if(e>arr.length){
        return "";
    }
    else if(e==arr.length){
        return subarray(arr,s+1,s+1)
    }
    else if(s<=e){
        console.log(arr.slice (s,e+1))
        return subarray(arr,s,e+1)
    }
}
console.log(subarray(arr,0,0))