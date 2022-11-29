let arr=[1,2,3,4,5,6,7,8,9];
let array=[];
let sum=5;
let sum2=0;
for(var i=0;i<arr.length;i++){
    for(var j=i;j<arr.length;j++){
        array.push(arr.slice(i,j+1))
    }
}
for(i of array){
    sum2+=i
}
if(sum==sum2){
    console.log("yes");
}
else{
    console.log("no");
}
