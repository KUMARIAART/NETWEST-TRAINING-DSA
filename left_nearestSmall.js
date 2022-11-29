const arr=[31,19,21,35,36,22,9,7,1];
const new_arr=[-1];
for(var i=1;i<arr.length;i++){
    let min=arr[i];
    for(var j=i-1;j>=0;j--){
        if(arr[j]<min){
            new_arr[i]=arr[j]
            break
        }
        else{
            new_arr[i]=-1
        }
    }
}
console.log(new_arr);