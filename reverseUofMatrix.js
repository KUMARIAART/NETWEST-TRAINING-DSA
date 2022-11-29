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

let array=[]
for(var i=arr.length-1;i>=0;i--){
    if(!array.includes(arr[i][0])){
        array.push(arr[i][0])
    }
}
for(var i of arr[0]){
    if(!array.includes(i)){
        array.push(i)
    }
}
for(var i of arr){
    if(!array.includes(i[i.length-1])){
        array.push(i[i.length-1])
    }
}
final_list=arr[arr.length-1]
for(var i=final_list.length-1;i>=0;i--){
    if(!array.includes(final_list[i])){
        array.push(final_list[i])
    } 
}
console.log(array);