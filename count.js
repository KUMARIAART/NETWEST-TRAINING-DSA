let arr=[1,1,2,3,2,2,2,2];
let len=Math.floor(arr.length/2);
let short=[... new Set(arr)];
var a=-1
for(var i of short){
    var count=0;
    for(j of arr){
        if(i===j){
            count+=1
        }
    }
    if(count>len){
        var a="yes";
        break;
    }
}
console.log(a);