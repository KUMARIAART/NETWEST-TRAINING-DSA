let arr=[5,4,2,1,3];
var n=arr.length;
function selectionShort(arr,n,i){
    if(i==n){
        return;
    }
    else{
        var min=i;
        for(var j=i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min=j
            }
        }
    }
    temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
    selectionShort(arr,n,i+1)
}
selectionShort(arr,n,i=0);
console.log(arr);