let arr=[0,1];
for(var i=0;i<=10;i++){
    arr.push(arr[i+1]+arr[i])
}
console.log(arr);