let arr=[1,2,3,4,2,1,6,5];
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
let arr1=[...new Set(arr)]
if(arr1.length<3){
    console.log("not possible");
}
else{
    console.log(arr1[0],arr1[1],arr1[2]);
    console.log(arr1[arr1.length-3],arr1[arr1.length-2],arr1[arr1.length-1]);
}
