let arr=[5,4,2,1,3];
for(var i=0;i<arr.length;i++){
    var min=i;
    for(var j=i+1;j<arr.length;j++){
        if(arr[min]>arr[j]){
            min=j
        }
    }
    temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
}
console.log(arr);
