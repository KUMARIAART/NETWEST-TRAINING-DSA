const userInput=require("readline-sync");
let size=userInput.questionInt("enter size of arr:-");
let arr=[];
for(var i=0;i<size;i++){
    var arr1=[]
    for(var j=0;j<size;j++){
        var val=userInput.questionInt("enter numbers:-");
        arr1.push(val);
    }
    arr.push(arr1)
}
console.log(arr);

let array=[];
for(i of arr[arr.length-1]){
    if(!array.includes(i)){
        array.push(i)
    } 
}
for(var i=arr.length-1;i>=0;i--){
    if(!array.includes(arr[i][arr[i].length-1])){
        array.push(arr[i][arr[i].length-1])
    }
}
console.log(array);