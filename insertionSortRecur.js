let arr=[13,7,15,4,5,17,1];
var n=arr.length;
function InsertionShort(arr,n,i){
    if(i===n){
        return;
    }
    else{
        var key=arr[i];
        var j=i-1;
        while(j>=0 && key<arr[j]){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key

    }
    InsertionShort(arr,n,i+1);
}
InsertionShort(arr,n,i=0)
console.log(arr);