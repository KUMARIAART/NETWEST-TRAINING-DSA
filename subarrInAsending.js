let arr=[1,2,1,2,3,1];
let count=1;
let count1=1;
for(var i=0;i<arr.length-1;i++){
    if(arr[i]<arr[i+1]){
        count+=1
        count1=count
    }
    else{
        count1=count
        count=1
    }
}
console.log(count1);

