let arr=[13,7,15,4,5,17,1];
for(var i=1;i<arr.length;i++){
    var key=arr[i];
    var j=i-1;
    while(j>=0 && key<arr[j]){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=key
}
console.log(arr);
