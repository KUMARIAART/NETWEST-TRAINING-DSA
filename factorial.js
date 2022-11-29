let arr=[1];
for(var i=2;i<=10;i++){
    arr.push(arr[arr.length-1]*i)
}
console.log(arr);