const arr=[100,60,0,34,200];
var n=arr.length;
function buble(arr,n){
    if(n==1){
        return;
    }
    else{
        for(var i=0;i<n-1;i++){
            if(arr[i]>arr[i+1]){
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
            }
        }
        buble(arr,n-1)
    }
}
console.log(buble(arr,n));
console.log(arr);


